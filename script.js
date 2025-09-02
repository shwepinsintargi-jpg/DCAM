// Photo data (local photos stored in /photos folder)
const albums = {
  dont: {
    title: "Don’t",
    photos: [
      "photos/dont1.jpg",
      "photos/dont2.jpg",
      "photos/dont3.jpg",
      "photos/dont4.jpg",
      "photos/dont5.jpg",
      "photos/dont6.jpg",
      "photos/dont7.jpg",
      "photos/dont8.jpg",
      "photos/dont9.jpg",
      "photos/dont10.jpg"
    ]
  },
  cry: {
    title: "Cry",
    photos: [
      "photos/cry1.jpg",
      "photos/cry2.jpg",
      "photos/cry3.jpg",
      "photos/cry4.jpg",
      "photos/cry5.jpg",
      "photos/cry6.jpg",
      "photos/cry7.jpg",
      "photos/cry8.jpg",
      "photos/cry9.jpg",
      "photos/cry10.jpg"
    ]
  },
  anymore: {
    title: "Anymore",
    photos: [
      "photos/anymore1.jpg",
      "photos/anymore2.jpg",
      "photos/anymore3.jpg",
      "photos/anymore4.jpg",
      "photos/anymore5.jpg",
      "photos/anymore6.jpg",
      "photos/anymore7.jpg",
      "photos/anymore8.jpg",
      "photos/anymore9.jpg",
      "photos/anymore10.jpg"
    ]
  },
  yu: {
    title: "Yu",
    photos: [
      "photos/yu1.jpg",
      "photos/yu2.jpg",
      "photos/yu3.jpg",
      "photos/yu4.jpg",
      "photos/yu5.jpg",
      "photos/yu6.jpg",
      "photos/yu7.jpg",
      "photos/yu8.jpg",
      "photos/yu9.jpg",
      "photos/yu10.jpg"
    ]
  }
};

// Open album and show photos
function openAlbum(name) {
  document.getElementById("album-list").classList.add("hidden");
  document.getElementById("photo-container").classList.remove("hidden");

  const album = albums[name];
  document.getElementById("album-title").innerText = album.title;

  const photoContainer = document.getElementById("photos");
  photoContainer.innerHTML = "";
  album.photos.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    photoContainer.appendChild(img);
  });
}

// Go back to album list
function goBack() {
  document.getElementById("album-list").classList.remove("hidden");
  document.getElementById("photo-container").classList.add("hidden");
}