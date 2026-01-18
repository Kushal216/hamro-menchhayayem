"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
exports.POST = POST;

var _people = _interopRequireDefault(require("@/models/people"));

var _server = require("next/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @swagger
 * /api/v1/Peoples:
 *   get:
 *     summary: get People from the database
 *     tags:
 *       - places
 *     description: adds People in body to the db
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
  var people;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_people["default"].find({}));

        case 3:
          people = _context.sent;
          return _context.abrupt("return", _server.NextResponse.json({
            message: "Peoples fetched successfully",
            data: people
          }));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _server.NextResponse.json({
            message: "DB error in performing the create culture action. ",
            err: _context.t0
          }));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}
/**
 * @swagger
 * /api/v1/Peoples:
 *   post:
 *     summary: add People to the database
 *     tags:
 *       - places
 *     description: adds People in body to the db
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
  var _ref, name, contact, photo, position, person;

  return regeneratorRuntime.async(function POST$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(req.json());

        case 2:
          _ref = _context2.sent;
          name = _ref.name;
          contact = _ref.contact;
          photo = _ref.photo;
          position = _ref.position;
          _context2.prev = 7;
          _context2.next = 10;
          return regeneratorRuntime.awrap(_people["default"].create({
            name: name,
            photo: photo,
            contact: contact,
            position: position
          }));

        case 10:
          person = _context2.sent;
          return _context2.abrupt("return", _server.NextResponse.json({
            message: "created People ".concat(person.name, "."),
            person: person
          }, {
            status: 201
          }));

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](7);
          return _context2.abrupt("return", _server.NextResponse.json({
            ERROR: 'failed to create the person',
            details: _context2.t0
          }, {
            status: 500
          }));

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[7, 14]]);
}