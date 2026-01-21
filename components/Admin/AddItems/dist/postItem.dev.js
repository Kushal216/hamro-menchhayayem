"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = postItem;

var _reactHotToast = _interopRequireDefault(require("react-hot-toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function postItem(data) {
  var res, text;
  return regeneratorRuntime.async(function postItem$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('/api/v1/cultures', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }));

        case 2:
          res = _context.sent;

          if (res.ok) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(res.text());

        case 6:
          text = _context.sent;
          throw new Error(text);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}