"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
exports.POST = POST;

var _server = require("next/server");

var _user = _interopRequireDefault(require("@/models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: validate authentication
 *     tags:
 *       - places
 *     description: Returns a list of places
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
  var users;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_user["default"].find({}));

        case 2:
          users = _context.sent;
          return _context.abrupt("return", _server.NextResponse.json({
            message: 'users fetched',
            data: users
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function POST(req) {
  return regeneratorRuntime.async(function POST$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  });
}