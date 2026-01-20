"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleDelete;

var _navigation = require("next/navigation");

var _reactHotToast = _interopRequireDefault(require("react-hot-toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handleDelete(route, id) {
  var confirm, res, _ref, message;

  return regeneratorRuntime.async(function handleDelete$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          confirm = window.confirm('Do you really want to delete this item?');

          if (!confirm) {
            _context.next = 13;
            break;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("/api/v1/".concat(route, "/").concat(id), {
            method: 'DELETE'
          }));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          _ref = _context.sent;
          message = _ref.message;

          _reactHotToast["default"].success(message);

          (0, _navigation.redirect)("/admin/".concat(route));
          _context.next = 14;
          break;

        case 13:
          _reactHotToast["default"].error("Deletion cancelled by the user.");

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
}