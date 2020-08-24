const Mock = require('mockjs');

const List = [];
const count = 100;

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    code: 'NO.@integer(10000,99999)',
    title: '@cword(5, 10)',
    remark: '@cword(10, 20)'
  }));
}

module.exports = [
  {
    url: '/orgconfig/list',
    type: 'get',
    response: config => {
      const { code, title, pageNumber = 1, pageSize = 20 } = config.query;

      let mockList = List.filter(item => {
        if (code && item.code !== code) return false;
        if (title && item.title.indexOf(title) < 0) return false;
        return true;
      });

      const pageList = mockList.filter((item, index) => index < pageSize * pageNumber && index >= pageSize * (pageNumber - 1));
      return {
        code: '000000',
        info: {
          total: mockList.length,
          list: pageList
        }
      };
    }
  },

  {
    url: '/orgconfig/info',
    type: 'get',
    response: config => {
      const { id } = config.query;
      for (const info of List) {
        if (info.id === +id) {
          return {
            code: '000000',
            info: info
          };
        }
      }
    }
  },

  {
    url: '/orgconfig/save',
    type: 'post',
    response: () => {
      return {
        code: '000000'
      };
    }
  },

  {
    url: '/orgconfig/update',
    type: 'post',
    response: () => {
      return {
        code: '000000'
      };
    }
  },

  {
    url: '/orgconfig/delete',
    type: 'post',
    response: () => {
      return {
        code: '000000'
      };
    }
  }
];
