const server = require(`./server_${process.env.NODE_ENV}`);
var prod = process.env.NODE_ENV === 'production';

var pathPre = '';
if (!prod) {
  pathPre = '';
}
module.exports = {
  server,
  pathPre
};
