const routes = require('./routes');

module.exports = [
  // mock get all routes form server
  {
    url: '/role/routes',
    type: 'get',
    response: _ => {
      return {
        code: '000000',
        info: routes
      };
    }
  }
];
