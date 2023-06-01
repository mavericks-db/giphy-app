const gifContainer = document.querySelector("#gif-container");
const searchBoxEl = document.querySelector("#search-box");
const searchButtonEl = document.querySelector("#search-button");

const apiURL = "https://api.giphy.com/v1/gifs/search?api_key=WW8ndXrgcWP3aru6FW3Ts3T0tq1HTr9A&limit=12&rating=g&q=";

function getGifs() {
  gifContainer.innerHTML = "";
  let searchTerm = searchBoxEl.value;

  fetch(apiURL + searchTerm).then(res => res.json()).then(data => {
    const results = data.data;
    console.log(results);

    results.map(gif => {
      let giphyBox = document.createElement("div");
      let link = document.createElement("a");
      let title = document.createElement("h5");
      let image = document.createElement("img");
      giphyBox.classList.add("giphyBox");
      image.src = gif.images.original.url;
      image.classList.add("gif-image");
      link.href = gif.embed_url;
      link.target = "_blank";
      title.textContent = gif.title;

      link.appendChild(title);
      giphyBox.append(link, image);
      gifContainer.appendChild(giphyBox);
    })
  })

  searchBoxEl.value = "";
}

function enter(e) {
  if (e.keyCode === 13) {
    getGifs();
  }
}

window.addEventListener("keypress", (e) => {
  enter(e);
})
