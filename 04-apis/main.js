const input_busca = document.getElementById("inputBusca");
const div = document.getElementById("results");

input_busca.addEventListener("keyup", function() {
  div.innerHTML = "<img id='loading' src='loading.gif'>";
  get_data(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.value}&type=video&key=${gkey}`)
  .then(function (data) {
    const obj = JSON.parse(data);
    div.innerHTML = "";
    if (data.items.length > 0) {
      for(const item of obj.items) {
        div.innerHTML += `<a href="https://www.youtube.com/watch?v=${item.id.videoId}"><div><img src="${item.snippet.thumbnails.default.url}"></div><div><h1>${item.snippet.title}</h1><p>${item.snippet.description}</p></div></a>`;
      }
    } else {
      div.innerHTML = "<p>Nenhum resultado encontrado</p>";
    }
    if (input_busca.value.length === 0) {
      div.innerHTML = "";
    }
  })
  .catch(function (error) {
    div.innerHTML = `<p>${error}</p>`
  })
})