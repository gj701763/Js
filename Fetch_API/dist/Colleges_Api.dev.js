"use strict";

var Url = "http://universities.hipolabs.com/search?name=";
var btn = document.querySelector("button");
btn.addEventListener('click', function _callee() {
  var country, couArr;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          country = document.querySelector("input").value;
          console.log(country);
          _context.next = 4;
          return regeneratorRuntime.awrap(getCollege(country));

        case 4:
          couArr = _context.sent;
          show(couArr);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});

function show(couArr) {
  var list = document.querySelector(".list");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      col = _step.value;
      var li = document.createElement("li");
      li.innerText = col.name;
      list.appendChild(li);
      var b = document.querySelector("#b").addEventListener('click', function _callee2() {
        var country;
        return regeneratorRuntime.async(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                list.removeChild(li);
                country = document.querySelector("input").value = "";

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        });
      });
    };

    for (var _iterator = couArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function getCollege(country) {
  var res;
  return regeneratorRuntime.async(function getCollege$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(axios.get(Url + country));

        case 3:
          res = _context3.sent;
          return _context3.abrupt("return", res.data);

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", []);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}