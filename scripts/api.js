// api istegi atan fonksiyonlar

// "https://shazam.p.rapidapi.com/charts/track?locale=en-US&listId=ip-country-chart-TR&pageSize=20&startFrom=0";

const options = {
  headers: {
    "X-RapidAPI-Key": "a01f8c9863msh4496ae4728b9bfbp1e00f2jsn1c873837ceb9",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

export default class API {
  constructor() {
    this.songs = [];
  }

  async getPopular() {
    const res = await fetch(
      "https://shazam.p.rapidapi.com/charts/track?locale=tr-TR",
      options
    );

    const data = await res.json();

    this.songs = data.tracks;
  }

  // aratilan kelimeye uygun sarkilar
  async searchedMusic(query) {
    // api istegi at
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr-TR`,
      options
    );

    // gelen cevabi isle
    const data = await res.json();

    // gelen cevabin formatini degistir
    const newSongAray = data.tracks.hits.map((song) => {
      return song.track;
    });

    this.songs = newSongAray;
  }
}
