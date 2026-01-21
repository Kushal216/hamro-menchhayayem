"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
exports.POST = POST;

var _server = require("next/server");

var _literature = _interopRequireDefault(require("@/models/literature"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @swagger
 * /api/v1/literature:
 *   get:
 *     summary: Get all literature
 *     tags:
 *       - literature
 *     description: Returns a list of literature
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 */
function GET(req) {
  var literatures;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_literature["default"].find({}));

        case 2:
          literatures = _context.sent;
          return _context.abrupt("return", _server.NextResponse.json({
            message: 'GET list of literature',
            data: literatures
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}
/**
 * @swagger
 * /api/literature:
 *   post:
 *     summary: add a literature item
 *     tags:
 *       - cultures
 *     description: Returns a list of literature
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 */


function POST(req) {
  var body, id, newLiterature;
  return regeneratorRuntime.async(function POST$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(req.json());

        case 2:
          body = _context2.sent;
          //check authentication
          //validate data using middleware
          id = null;
          _context2.prev = 4;
          _context2.next = 7;
          return regeneratorRuntime.awrap(_literature["default"].create({
            _id: body._id,
            title: body.title,
            description: body.description,
            video: body.video,
            coverImage: body.coverImage,
            category: body.category,
            author: body.author
          }));

        case 7:
          newLiterature = _context2.sent;
          id = newLiterature._id;
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](4);
          console.log("ERROR: in creating Literature:\n".concat(_context2.t0));
          return _context2.abrupt("return", _server.NextResponse.json({
            message: "Error: ".concat(_context2.t0.message, ". "),
            err: _context2.t0
          }, {
            status: 400
          }));

        case 15:
          return _context2.abrupt("return", _server.NextResponse.json({
            message: "Added ".concat(body.title, " to the database with id: ").concat(id, ". ")
          }, {
            status: 201
          }));

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 11]]);
}