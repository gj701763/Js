"use strict";

var Url = "";

function getCollege(country) {
  var res;
  return regeneratorRuntime.async(function getCollege$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get(Url + country));

        case 3:
          res = _context.sent;
          return _context.abrupt("return", res.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", []);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}