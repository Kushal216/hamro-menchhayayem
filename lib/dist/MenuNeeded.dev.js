"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MenuNeeded;

var _navigation = require("next/navigation");

function MenuNeeded() {
  var paths = (0, _navigation.usePathname)().replace(/\/$/, '').split('/');
  var route = paths[1];
  console.log("checking menu");
  return !(route == 'admin' || route == 'login' || paths.length > 2);
}