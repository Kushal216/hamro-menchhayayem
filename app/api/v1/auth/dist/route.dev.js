"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = POST;

var _user = _interopRequireDefault(require("@/models/user"));

var _server = require("next/server");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _headers = require("next/headers");

var _validateAuth = _interopRequireDefault(require("@/lib/middlewares/validateAuth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @swagger
 * /api/v1/auth:
 *   post:
 *     summary: validate login credientials and return jwt in cookie
 */
function POST(req) {
  var _ref, email, password, user, matches, token, cookie;

  return regeneratorRuntime.async(function POST$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(0, _validateAuth["default"])(req)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.json({
            message: 'you are already logged in, Log out first and try again'
          }, {
            status: 400
          }));

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(req.json());

        case 4:
          _ref = _context.sent;
          email = _ref.email;
          password = _ref.password;
          _context.prev = 7;
          _context.next = 10;
          return regeneratorRuntime.awrap(_user["default"].findOne({
            email: email
          }).select('+password'));

        case 10:
          user = _context.sent;

          if (user) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.json({
            message: 'Invalid Credentials'
          }, {
            status: 401
          }));

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(_bcryptjs["default"].compare(password, user.password));

        case 15:
          matches = _context.sent;

          if (!matches) {
            _context.next = 24;
            break;
          }

          console.log('user ', user);
          token = _jsonwebtoken["default"].sign({
            name: user.name,
            userId: user._id,
            email: user.email,
            role: user.role
          }, process.env.JWT_SECRET, {
            expiresIn: '7d'
          });
          _context.next = 21;
          return regeneratorRuntime.awrap((0, _headers.cookies)());

        case 21:
          cookie = _context.sent;
          cookie.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7
          });
          return _context.abrupt("return", _server.NextResponse.json({
            message: 'Logged in successfully',
            data: user.name
          }));

        case 24:
          return _context.abrupt("return", _server.NextResponse.json({
            message: 'Invalid Credentials'
          }, {
            status: 401
          }));

        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](7);
          console.log("ERROR: in authenticating user:\n".concat(_context.t0));
          return _context.abrupt("return", _server.NextResponse.json({
            message: "DB error in performing the action. ",
            err: _context.t0
          }, {
            status: 500
          }));

        case 31:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 27]]);
}