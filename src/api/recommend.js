import {jsonp} from '../common/js/jsonp'
import {commonParams, qqcommonParams, options} from './config'
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
  //咪咕音乐
  const url = "https://m.music.migu.cn/migu/remoting/cms_list_tag?pageSize=10&nid=23831003&pageNo=0&type=2006";
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
};

export const getDiscList = () => {
  /*
   //咪咕音乐
   const url = 'https://m.music.migu.cn/migu/remoting/client_play_list_tag';
   return axios.get(url).then((res) => {
     return Promise.resolve(res.data)
   })*/
  const url = 'https://u.y.qq.com/cgi-bin/musics.fcg';
  //qq音乐
  const data = Object.assign({}, qqcommonParams, {
    platform: 'yqq.json',
    data: {
      "comm": {"ct": 24},
      "category": {"method": "get_hot_category", "param": {"qq": ""}, "module": "music.web_category_svr"},
      "recomPlaylist": {
        "method": "get_hot_recommend",
        "param": {"async": 1, "cmd": 2},
        "module": "playlist.HotRecommendServer"
      },
      "playlist": {
        "method": "get_playlist_by_category",
        "param": {"id": 8, "curPage": 1, "size": 40, "order": 5, "titleid": 8},
        "module": "playlist.PlayListPlazaServer"
      },
      "new_song": {"module": "newsong.NewSongServer", "method": "get_new_song_info", "param": {"type": 5}},
      "new_album": {
        "module": "newalbum.NewAlbumServer",
        "method": "get_new_album_info",
        "param": {"area": 1, "sin": 0, "num": 20}
      },
      "new_album_tag": {"module": "newalbum.NewAlbumServer", "method": "get_new_album_area", "param": {}},
      "toplist": {"module": "musicToplist.ToplistInfoServer", "method": "GetAll", "param": {}},
      "focus": {"module": "music.musicHall.MusicHallPlatform", "method": "GetFocus", "param": {}}
    }
  });

  return axios.get(url, {
    params: data
  }).then((res) => {
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
