"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
exports.POST = POST;

var _server = require("next/server");

var _culture = _interopRequireDefault(require("@/models/culture"));

var _validateAuth = _interopRequireWildcard(require("@/lib/middlewares/validateAuth"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @swagger
 * /api/v1/cultures:
 *   get:
 *     summary: Returns all cultures
 */
function GET(req) {
  var cultures;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_culture["default"].find({}));

        case 2:
          cultures = _context.sent;
          return _context.abrupt("return", _server.NextResponse.json({
            message: 'GET list of cultures',
            data: cultures
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}
/**
 * @swagger
 * /api/v1/cultures:
 *   post:
 *     summary: Add a culture
 */


function POST(req) {
  var body, id, newCulture;
  return regeneratorRuntime.async(function POST$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(req.json());

        case 2:
          body = _context2.sent;
          //check authentication
          //validate data using middleware
          id = null;
          _context2.prev = 4;
          _context2.next = 7;
          return regeneratorRuntime.awrap(_culture["default"].create({
            _id: body._id,
            title: body.title,
            description: body.description,
            gallery: body.gallery,
            video: body.video,
            coverImage: body.coverImage,
            category: body.category
          }));

        case 7:
          newCulture = _context2.sent;
          id = newCulture._id;
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](4);
          console.log("ERROR: in creating culture:\n".concat(_context2.t0));
          return _context2.abrupt("return", _server.NextResponse.json({
            message: "DB error ".concat(_context2.t0.message, ". "),
            err: _context2.t0
          }, {
            status: 400
          }));

        case 15:
          return _context2.abrupt("return", _server.NextResponse.json({
            message: "Added ".concat(body.title, " to the database with id: ").concat(id, ". ")
          }, {
            status: 201
          }));

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 11]]);
}