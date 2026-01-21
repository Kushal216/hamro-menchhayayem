"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
exports.POST = POST;

var _server = require("next/server");

var _school = _interopRequireDefault(require("@/models/school.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @swagger
 * /api/v1/schools:
 *   get:
 *     summary: Get all schools
 *     tags:
 *       - cultures
 *     description: Returns a list of schools
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
  var schools;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_school["default"].find({}));

        case 2:
          schools = _context.sent;
          return _context.abrupt("return", Response.json({
            message: 'GET all lists school',
            data: schools
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
 * /api/cultures:
 *   post:
 *     summary: add a school item
 *     tags:
 *       - cultures
 *     description: Returns a list of school
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
  var body, id, newSchool;
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
          return regeneratorRuntime.awrap(_school["default"].create({
            title: body.title,
            description: body.description,
            gallery: body.gallery,
            coverImage: body.coverImage,
            location: body.location,
            video: body.video,
            category: body.category,
            phoneNo: body.phoneNo
          }));

        case 7:
          newSchool = _context2.sent;
          id = newSchool._id;
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](4);
          console.log("ERROR: in creating school:\n".concat(_context2.t0));
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