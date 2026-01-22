"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
exports.POST = POST;

var _server = require("next/server");

var _places = _interopRequireDefault(require("@/models/places.js"));

var _validateAuth = _interopRequireDefault(require("@/lib/middlewares/validateAuth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @swagger
 * /api/v1/places:
 *   get:
 *     summary: get a list of all places
 *     tags:
 *       - places
 *   post:
 *     summary: add a place
 *     tags:
 *       - places
 */
function GET(req) {
  var places;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_places["default"].find({}));

        case 2:
          places = _context.sent;
          return _context.abrupt("return", _server.NextResponse.json({
            message: 'GET list of places',
            data: places
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function POST(req) {
  var body, id, newPlace;
  return regeneratorRuntime.async(function POST$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(req.json());

        case 2:
          body = _context2.sent;

          if ((0, _validateAuth["default"])(req)) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", _server.NextResponse.json({
            message: 'you need to be logged in to perform this request.'
          }, {
            status: 401
          }));

        case 5:
          id = null;
          _context2.prev = 6;
          _context2.next = 9;
          return regeneratorRuntime.awrap(_places["default"].create({
            _id: body._id,
            title: body.title,
            description: body.description,
            gallery: body.gallery,
            video: body.video,
            coverImage: body.coverImage,
            category: body.category,
            subCategory: body.subCategory,
            location: body.location
          }));

        case 9:
          newPlace = _context2.sent;
          id = newPlace._id;
          _context2.next = 17;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](6);
          console.log("ERROR: in creating places:\n".concat(_context2.t0));
          return _context2.abrupt("return", _server.NextResponse.json({
            error: _context2.t0.message,
            message: "Error: ".concat(_context2.t0.message, ". "),
            data: _context2.t0
          }, {
            status: 400
          }));

        case 17:
          return _context2.abrupt("return", _server.NextResponse.json({
            message: "Added ".concat(body.title, " to the database with id: ").concat(id, ". ")
          }, {
            status: 201
          }));

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[6, 13]]);
}