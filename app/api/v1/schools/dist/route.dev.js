"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
exports.POST = POST;

var _server = require("next/server");

var _school = _interopRequireDefault(require("@/models/school.js"));

var _validateAuth = _interopRequireDefault(require("@/lib/middlewares/validateAuth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @swagger
 * /api/v1/schools:
 *   get:
 *     summary: returns all schools
 *     tags:
 *       - schools
 *   post:
 *     summary: add a school
 *     tags:
 *       - schools
 */
function GET(req) {
  var schools;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_school["default"].find({}));

        case 2:
          schools = _context.sent;
          return _context.abrupt("return", Response.json({
            message: 'GET all lists school',
            data: schools
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function POST(req) {
  var body, id, newSchool;
  return regeneratorRuntime.async(function POST$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if ((0, _validateAuth["default"])(req)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return", _server.NextResponse.json({
            message: 'you need to be logged in to perform this request.'
          }, {
            status: 401
          }));

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap(req.json());

        case 4:
          body = _context2.sent;
          id = null;
          _context2.prev = 6;
          _context2.next = 9;
          return regeneratorRuntime.awrap(_school["default"].create({
            _id: body._id,
            title: body.title,
            description: body.description,
            gallery: body.gallery,
            coverImage: body.coverImage,
            location: body.location,
            video: body.video,
            category: body.category,
            phoneNo: body.phoneNo
          }));

        case 9:
          newSchool = _context2.sent;
          id = newSchool._id;
          _context2.next = 16;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](6);
          return _context2.abrupt("return", _server.NextResponse.json({
            error: _context2.t0.message,
            message: "DB error in performing the create culture action. ",
            err: _context2.t0
          }));

        case 16:
          return _context2.abrupt("return", _server.NextResponse.json({
            message: "Added ".concat(body.title, " to the database with id: ").concat(id, ". ")
          }, {
            status: 201
          }));

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[6, 13]]);
}