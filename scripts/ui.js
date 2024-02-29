export default class UI {
  constructor() {
    this.list = document.getElementById("list");
    this.form = document.getElementById("search-form");
    this.title = document.getElementById("title");
    this.playArea = document.querySelector(".play-area");
    this.checkBox = document.querySelector("#mode-checkbox");
  }
  renderLoader = () =>
    (this.list.innerHTML = `
    <div class="loader">
        <span style="--i:1"></span>
        <span style="--i:2"></span>
        <span style="--i:3"></span>
        <span style="--i:4"></span>
        <span style="--i:5"></span>
        <span style="--i:6"></span>
        <span style="--i:7"></span>
        <span style="--i:8"></span>
        <span style="--i:9"></span>
        <span style="--i:10"></span>
        <span style="--i:11"></span>
        <span style="--i:12"></span>
        <span style="--i:13"></span>
        <span style="--i:14"></span>
        <span style="--i:15"></span>
        <span style="--i:16"></span>
        <span style="--i:17"></span>
        <span style="--i:18"></span>
        <span style="--i:19"></span>
        <span style="--i:20"></span>
    </div>
  `);

  // ekrana kartlari bas
  renderCards(songs) {
    // gifi ekrandan kaldir
    this.list.innerHTML = "";

    // dizideki her bir eleman icin fonksiyonu calistir
    songs.forEach((song) => {
      //   console.log(song);
      const div = document.createElement("div");

      //   div.classList.add("card");
      div.className = "card";

      div.innerHTML = `
        <figure>
            <img src="${song.images.coverarthq}"/>
            <div id="play">
                <i id="play-btn" class="bi bi-play-fill"></i>
            </div>
        </figure>

        <h4>${song.title}</h4>
        <p>${song.subtitle}</p>
      `;

      // data verileri ekle
      div.dataset.title = song.title;
      div.dataset.photo = song.images.coverarthq;
      div.dataset.url = song.hub?.actions[1].uri;

      // karti html gonder
      this.list.appendChild(div);
    });
  }

  // basligi guncelle
  changeTitle(text) {
    this.title.innerText = text;
  }
  renderPlayArea(song) {
    this.playArea.innerHTML = `
    <div>
        <img class="animate" src="${song.photo}" />
        <div>
            <p>Su an oynatilyor</p>
            <h3>${song.title}</h3>
        </div>
    </div>
    <audio controls src="${song.url}"></audio>
    `;
  }
}
