import originJsonp from 'jsonp'

export const jsonp = (url, data, option) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      console.log(data);
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
};

export const param = (data) => {
  let url = '';
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : '';
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
};

export const formatUrl = (url, data) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return url;
};
