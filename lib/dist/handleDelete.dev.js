"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleDelete;

var _navigation = require("next/navigation");

var _reactHotToast = _interopRequireDefault(require("react-hot-toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handleDelete(route, id) {
  var confirm, res, _ref, message, _ref2, _message;

  return regeneratorRuntime.async(function handleDelete$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          confirm = window.confirm('Do you really want to delete this item?');

          if (!confirm) {
            _context.next = 22;
            break;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("/api/v1/".concat(route, "/").concat(id), {
            method: 'DELETE'
          }));

        case 4:
          res = _context.sent;

          if (res.ok) {
            _context.next = 14;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(res.json());

        case 8:
          _ref = _context.sent;
          message = _ref.message;

          _reactHotToast["default"].error(message);

          throw new Error(message);

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(res.json());

        case 16:
          _ref2 = _context.sent;
          _message = _ref2.message;

          _reactHotToast["default"].success(_message);

          (0, _navigation.redirect)("/admin/".concat(route));

        case 20:
          _context.next = 23;
          break;

        case 22:
          _reactHotToast["default"].error('Deletion cancelled by the user.');

        case 23:
        case "end":
          return _context.stop();
      }
    }
  });
}