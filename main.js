import API from "./scripts/api.js";
import UI from "./scripts/ui.js";

const api = new API();
const ui = new UI();

document.addEventListener("DOMContentLoaded", async () => {
  // ekrana loading gif i bas
  ui.renderLoader();

  // api a istek at
  await api.getPopular();

  // gelen verileri ekrana bas
  ui.renderCards(api.songs);
});

ui.form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // aratilan kelimeye ulas
  const query = e.target[0].value;

  // bossa uyari gonder
  if (!query.trim()) return alert("Lutfen aratilacak kelimeyi girin");

  // ekrana yukleniyor bas
  ui.renderLoader();

  // basligi gncelle
  ui.changeTitle(`${query} icin sonuclar`);

  // api dan sarkilari al
  await api.searchedMusic(query);

  // sarkilari ekrana bas
  ui.renderCards(api.songs);
});
ui.list.addEventListener("click", (e) => {
  if (e.target.id === "play-btn") {
    const song = e.target.closest(".card").dataset;

    ui.renderPlayArea(song);
  }
});

const mode = localStorage.getItem("mode");
document.body.className = mode === "true" ? "dark" : "light";
ui.playArea.className = mode === "true" ? "play-area" : "play-area-white";
ui.checkBox.checked = mode === "true";

ui.checkBox.addEventListener("change", (e) => {
  const isDarkMode = e.target.checked;

  localStorage.setItem("mode", isDarkMode);

  document.body.className = isDarkMode ? "dark" : "light";
  ui.playArea.className = isDarkMode ? "play-area" : "play-area-white";
});
