import {getLyric} from '../../api/song'
import {ERR_OK} from '../../api/config'
import {Base64} from 'js-base64';

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id;
    this.mid = mid;
    this.singer = singer;
    this.name = name;
    this.album = album;
    this.duration = duration;
    this.image = image;
    this.url = url;
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }

    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric);
          resolve(this.lyric)
        } else {
          reject('no lyric')
        }
      })
    })
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}_1.jpg?max_age=2592000`,
    url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
  })
}

//https://thirdparty.gtimg.com/${musicData.songid}.m4a?fromtag=46
//http://ws.stream.qqmusic.qq.com/C400003mAan70zUy5O.m4a?
// guid=1670394370&
// vkey=3012A14B83B8FB027C62BFA7FB50F7B3D31D2F84CD2BF1D790354FAA261FA9139AFB88BC7ADBA16A566D6090992973C6428814DF92A3BB0D
// &uin=3975&
// fromtag=3&r=9563725464615371

//http://ws.stream.qqmusic.qq.com/C400003mAan70zUy5O.m4a?
// guid=1670394370&
// vkey=97B3AC3E4BEF0E7A8D0D3296055A27C3438F1AD2EEC9D57E74A7A680C28551B4BA83CA86ABD90301A4B6338508D8721F1982AD14423A3EFA
// &uin=3975
// &fromtag=3
// &r=11672061592316041

//004Fimy419PpsA

function filterSinger(singer) {
  let ret = [];
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  });
  return ret.join('/')
}

