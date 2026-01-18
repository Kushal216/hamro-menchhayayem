"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
exports.POST = POST;

var _server = require("next/server");

var _user = _interopRequireDefault(require("@/models/user"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

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
/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: add user to the database
 *     tags:
 *       - places
 *     description: adds user in body to the db
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
  var _ref, name, email, password, saltValue, hashedPassword, user;

  return regeneratorRuntime.async(function POST$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(req.json());

        case 2:
          _ref = _context2.sent;
          name = _ref.name;
          email = _ref.email;
          password = _ref.password;
          saltValue = 10;
          _context2.prev = 7;
          _context2.next = 10;
          return regeneratorRuntime.awrap(_bcryptjs["default"].hash(password, saltValue));

        case 10:
          hashedPassword = _context2.sent;
          _context2.next = 13;
          return regeneratorRuntime.awrap(_user["default"].create({
            name: name,
            email: email,
            password: hashedPassword
          }));

        case 13:
          user = _context2.sent;
          return _context2.abrupt("return", _server.NextResponse.json({
            message: "created User ".concat(user.main, "."),
            user: user
          }, {
            status: 201
          }));

        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](7);
          return _context2.abrupt("return", _server.NextResponse.json({
            ERROR: 'failed to create the user',
            details: _context2.t0
          }, {
            status: 500
          }));

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[7, 17]]);
}