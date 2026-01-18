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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @swagger
 * /api/v1/auth:
 *   post:
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
function POST(req) {
  var _ref, email, password, user, matches, token;

  return regeneratorRuntime.async(function POST$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(req.json());

        case 2:
          _ref = _context.sent;
          email = _ref.email;
          password = _ref.password;
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(_user["default"].findOne({
            email: email
          }).select('+password'));

        case 8:
          user = _context.sent;

          if (user) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.json({
            message: 'Invalid Credentials'
          }, {
            status: 401
          }));

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(_bcryptjs["default"].compare(password, user.password));

        case 13:
          matches = _context.sent;

          if (!matches) {
            _context.next = 18;
            break;
          }

          token = _jsonwebtoken["default"].sign({
            userId: user._id,
            email: user.email
          }, process.env.JWT_SECRET, {
            expiresIn: '7d'
          });
          (0, _headers.cookies)().set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7
          });
          return _context.abrupt("return", _server.NextResponse.json({
            message: 'Logged in successfully',
            data: user.name
          }));

        case 18:
          return _context.abrupt("return", _server.NextResponse.json({
            message: 'Invalid Credentials'
          }, {
            status: 401
          }));

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](5);
          console.log("ERROR: in creating culture:\n".concat(_context.t0));
          return _context.abrupt("return", _server.NextResponse.json({
            message: "DB error in performing the create culture action. ",
            err: _context.t0
          }));

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 21]]);
}