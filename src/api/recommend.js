import {jsonp} from '../common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios';

export const getRecommend = () => {
  /*const url = 'https://m.music.migu.cn/migu/remoting/cms_list_tag';

  const data = Object.assign({},commonParams, {
    pageSize: 10,
    nid: 23831003,
    pageNo: 0,
    type: 2006
  });

  return jsonp(url, data, options)*/
  const url = "https://m.music.migu.cn/migu/remoting/cms_list_tag?pageSize=10&nid=23831003&pageNo=0&type=2006";
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
};

export const getDiscList = () => {
  const url = 'https://m.music.migu.cn/migu/remoting/client_play_list_tag';
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
};

export function getSongList(disstid) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';

  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  });

  return jsonp(url, data, options)
}
