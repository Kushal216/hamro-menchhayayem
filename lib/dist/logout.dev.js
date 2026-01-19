"use strict";
'use server';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = logout;

var _headers = require("next/headers");

var _navigation = require("next/navigation");

function logout() {
  var cookieStore;
  return regeneratorRuntime.async(function logout$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _headers.cookies)());

        case 2:
          cookieStore = _context.sent;
          cookieStore["delete"]('token', {
            path: '/'
          });
          console.log("logged out successfully");
          (0, _navigation.redirect)('/login');

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}