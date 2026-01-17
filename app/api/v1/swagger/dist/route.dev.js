"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _server = require("next/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var swaggerSpec = (0, _swaggerJsdoc["default"])({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hamro-menchhayayem API ',
      version: '1.0.0'
    }
  },
  apis: ['./app/api/v1/**/route.js']
});

function GET() {
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _server.NextResponse.json(swaggerSpec));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}