export default class Singer {
  constructor({name, singerId,singerMid,avatar}) {
    this.singerId = singerId;
    this.singerMid = singerMid;
    this.name = name;
    //this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${pictureId}.jpg?max_age=2592000`
    this.avatar = avatar;
  }
}
