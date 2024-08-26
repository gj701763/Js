"use strict";

var Url = "https://api.potterdb.com/"; // fetch(Url)
// .then((res) => {
//     console.log(res);
//     return res.json();
// }).then((data) => {
//     console.log("data 1 = ",data);
//     return fetch(Url);
// }).then((res) => {
//     console.log(res);
//     return res.json();
// }).then((data2) => {
//     console.log("data 2 = ",data2.fact);
// })
// .catch((err) => {
//     console.log(err);
// });

function getfetch() {
  var res, data, res2, data2;
  return regeneratorRuntime.async(function getfetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(Url));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context.sent;
          console.log(data.message);
          _context.next = 10;
          return regeneratorRuntime.awrap(fetch(Url));

        case 10:
          res2 = _context.sent;
          _context.next = 13;
          return regeneratorRuntime.awrap(res2.json());

        case 13:
          data2 = _context.sent;
          console.log(data2.message);
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 20:
          console.log("bye");

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
}

getfetch();