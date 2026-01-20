"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getConfirmationAlert;

function getConfirmationAlert(message) {
  var confirm = window.confirm(message);
  return confirm;
}