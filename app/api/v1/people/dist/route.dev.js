"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
exports.POST = POST;

var _people = _interopRequireDefault(require("@/models/people"));

var _server = require("next/server");

var _validateAuth = _interopRequireDefault(require("@/lib/middlewares/validateAuth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @swagger
 * /api/v1/people:
 *   get:
 *     summary: get a list of all people
 *     tags:
 *       - people
 *   post:
 *     summary: add a person
 *     tags:
 *       - people
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
            message: 'Peoples fetched successfully',
            data: people
          }));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _server.NextResponse.json({
            error: _context.t0.message,
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

function POST(req) {
  var _ref, name, contact, photo, position, person;

  return regeneratorRuntime.async(function POST$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if ((0, _validateAuth["default"])(req)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return", _server.NextResponse.json({
            message: 'you need to be logged in to perform this request.'
          }, {
            status: 401
          }));

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap(req.json());

        case 4:
          _ref = _context2.sent;
          name = _ref.name;
          contact = _ref.contact;
          photo = _ref.photo;
          position = _ref.position;
          _context2.prev = 9;
          _context2.next = 12;
          return regeneratorRuntime.awrap(_people["default"].create({
            name: name,
            photo: photo,
            contact: contact,
            position: position
          }));

        case 12:
          person = _context2.sent;
          return _context2.abrupt("return", _server.NextResponse.json({
            message: "created People ".concat(person.name, "."),
            person: person
          }, {
            status: 201
          }));

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](9);
          return _context2.abrupt("return", _server.NextResponse.json({
            error: _context2.t0.message,
            message: "Error: ".concat(_context2.t0.message, ". "),
            data: _context2.t0
          }, {
            status: 400
          }));

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[9, 16]]);
}