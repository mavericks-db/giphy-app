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
      let cardBody = document.createElement("div");
      let link = document.createElement("a");
      let title = document.createElement("h5");
      let image = document.createElement("img");
      giphyBox.classList.add("giphyBox", "card");
      cardBody.classList.add("card-body");
      image.src = gif.images.original.url;
      image.classList.add("gif-image", "card-img-top");
      link.classList.add("card-text");
      link.href = gif.embed_url;
      link.target = "_blank";
      title.textContent = gif.title;

      link.appendChild(title);
      cardBody.appendChild(link);
      giphyBox.append(image, cardBody);
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

function defaultGifs() {
  gifContainer.innerHTML = "";
  let searchTerm = "sponge bob";

  fetch(apiURL + searchTerm).then(res => res.json()).then(data => {
    const results = data.data;
    console.log(results);

    results.map(gif => {
      let giphyBox = document.createElement("div");
      let cardBody = document.createElement("div");
      let link = document.createElement("a");
      let title = document.createElement("h5");
      let image = document.createElement("img");

      giphyBox.classList.add("giphyBox", "card");
      cardBody.classList.add("card-body");
      image.src = gif.images.original.url;
      image.classList.add("gif-image", "card-img-top");
      link.classList.add("card-text");
      link.href = gif.embed_url;
      link.target = "_blank";
      title.textContent = gif.title;

      link.appendChild(title);
      cardBody.appendChild(link);
      giphyBox.append(image, cardBody);
      gifContainer.appendChild(giphyBox);
    })
  })
  searchBoxEl.value = "";
}


window.addEventListener("keypress", (e) => {
  enter(e);
});

window.addEventListener("DOMContentLoaded", () => {
  searchBoxEl.focus();
  defaultGifs();
});
