"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectMongoDB = connectMongoDB;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DB_URL = process.env.DB_URL;
var isConnected = false;

function connectMongoDB() {
  return regeneratorRuntime.async(function connectMongoDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!isConnected) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(_mongoose["default"].connect(DB_URL));

        case 5:
          console.log('MongoDB connected successfully');
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](2);
          console.error('MongoDB connection failed:', _context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 8]]);
} // export { connectMongoDB };