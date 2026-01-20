"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadImage = uploadImage;

function uploadImage(file) {
  var formData, res;
  return regeneratorRuntime.async(function uploadImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          formData = new FormData();
          formData.append("image", file);
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("/api/v1/upload", {
            method: "POST",
            body: formData
          }));

        case 4:
          res = _context.sent;

          if (res.ok) {
            _context.next = 7;
            break;
          }

          throw new Error("Image upload failed");

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(res.json());

        case 9:
          return _context.abrupt("return", _context.sent);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}