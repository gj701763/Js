"use strict";

var Url = "https://api.potterdb.com/"; // async function getfetch() {
//     try{
//         let res = await axios.get(Url);
//         console.log(res.data);
//     }
//     catch(e) {
//         console.log(e);
//     }
// }

getfetch();

function getfetch() {
  var config, res;
  return regeneratorRuntime.async(function getfetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          config = {
            Headers: {
              Accept: "application/json"
            }
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(axios.get(Url));

        case 4:
          res = _context.sent;
          console.log(res);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}