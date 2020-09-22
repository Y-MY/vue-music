import {jsonp} from '../common/js/jsonp'
import {commonParams, options, qqcommonParams} from './config'
import {singerList} from "./data/singerData"
import axios from 'axios'

export function getSingerList() {
 // const url = '/api/getSingerList';
  /* const data = Object.assign({}, qqcommonParams, {
     data: {
       "comm": {"ct": 24, "cv": 0},
       "singerList": {
         "module": "Music.SingerListServer",
         "method": "get_singer_list",
         "param": {"area": -100, "sex": -100, "genre": -100, "index": -100, "sin": 0, "cur_page": 1}
       }
     }
   });*/
  const url = 'https://u.y.qq.com/cgi-bin/musics.fcg?-=getUCGI20534904553639088&g_tk=5381&sign=zzapdhvd1gatk9i2f3fef04bda3a286eeb40136f6b80f4a&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%2C%22singerList%22%3A%7B%22module%22%3A%22Music.SingerListServer%22%2C%22method%22%3A%22get_singer_list%22%2C%22param%22%3A%7B%22area%22%3A-100%2C%22sex%22%3A-100%2C%22genre%22%3A-100%2C%22index%22%3A-100%2C%22sin%22%3A0%2C%22cur_page%22%3A1%7D%7D%7D'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
  //return singerList;
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg';

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 80,
    songstatus: 1,
    singermid: singerId
  });

  return jsonp(url, data, options)
}

