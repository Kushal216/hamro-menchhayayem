"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = validateJWT;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function validateJWT(token) {
  try {
    return _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null; // invalid / expired
  }
}