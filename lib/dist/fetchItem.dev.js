"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchItem = fetchItem;
exports["default"] = fetchData;

function fetchItem(route, id) {
  var res, data;
  return regeneratorRuntime.async(function fetchItem$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/api/v1/".concat(route, "/").concat(id)));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          return _context.abrupt("return", null);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

function fetchData(route) {
  var res, data;
  return regeneratorRuntime.async(function fetchData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          console.log('item tried to be searched');
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/api/v1/".concat(route)));

        case 4:
          res = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          data = _context2.sent;
          return _context2.abrupt("return", data);

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          return _context2.abrupt("return", null);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
}