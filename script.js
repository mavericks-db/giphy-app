const gifContainer = document.querySelector("#gif-container");
const searchBoxEl = document.querySelector("#search-box");
const searchButtonEl = document.querySelector("#search-button");

const apiURL = "https://api.giphy.com/v1/gifs/search?api_key=WW8ndXrgcWP3aru6FW3Ts3T0tq1HTr9A&limit=10&rating=g&q=";

function getGifs() {
  let searchTerm = searchBoxEl.value;
  console.log(searchTerm);

  fetch(apiURL + searchTerm).then(res => res.json()).then(data => {
    const results = data.data;
    console.log(results);

    results.map(gif => {
      let giphyBox = document.createElement("div");
      let title = document.createElement("h4");

      title.textContent = gif.title;
      giphyBox.innerHTML = `<img src="${gif.images.original.url}" alt="${gif.title}" />`

      gifContainer.append(title, giphyBox);
    })
  })
}
