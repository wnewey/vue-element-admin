import request from '@src/extends/utils/request';
export const apiUrls = {
  list: '/orgconfig/list',
  save: '/orgconfig/save',
  update: '/orgconfig/update',
  delete: '/orgconfig/delete',
  info: '/orgconfig/info'
};

export function fetchList(query) {
  return request({
    url: apiUrls.list,
    method: 'get',
    params: query
  });
}

export function saveInfo(data) {
  return request({
    url: apiUrls.save,
    method: 'post',
    params: data
  });
}

export function updateInfo(data) {
  return request({
    url: apiUrls.update,
    method: 'post',
    params: data
  });
}

export function delList(ids = []) {
  return request({
    url: apiUrls.delete,
    method: 'post',
    params: {
      ids: ids.toString()
    }
  });
}

export function getInfo(id) {
  return request({
    url: apiUrls.info,
    method: 'get',
    params: { id }
  });
}
