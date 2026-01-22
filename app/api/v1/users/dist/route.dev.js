"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
exports.POST = POST;

var _server = require("next/server");

var _user = _interopRequireDefault(require("@/models/user"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _validateAuth = require("@/lib/middlewares/validateAuth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: validate authentication
 *     tags:
 *       - places
 *     description: Returns a list of all users
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
 *     description: creates a user
 */


function POST(req) {
  var _ref, name, email, password, role, saltValue, hashedPassword, user;

  return regeneratorRuntime.async(function POST$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if ((0, _validateAuth.isAdmin)(req)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return", _server.NextResponse.json({
            message: 'Permission Error: Only admins can delete items.'
          }, {
            status: 401
          }));

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap(req.json());

        case 4:
          _ref = _context2.sent;
          name = _ref.name;
          email = _ref.email;
          password = _ref.password;
          role = _ref.role;
          saltValue = 10;
          _context2.prev = 10;
          _context2.next = 13;
          return regeneratorRuntime.awrap(_bcryptjs["default"].hash(password, saltValue));

        case 13:
          hashedPassword = _context2.sent;
          _context2.next = 16;
          return regeneratorRuntime.awrap(_user["default"].create({
            name: name,
            email: email,
            password: hashedPassword,
            role: role
          }));

        case 16:
          user = _context2.sent;
          return _context2.abrupt("return", _server.NextResponse.json({
            message: "created User ".concat(user.main, "."),
            user: user
          }, {
            status: 201
          }));

        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](10);
          return _context2.abrupt("return", _server.NextResponse.json({
            error: _context2.t0.message,
            message: "error: ".concat(_context2.t0.message),
            data: _context2.t0
          }, {
            status: 500
          }));

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[10, 20]]);
}