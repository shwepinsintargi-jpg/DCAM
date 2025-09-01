// Photo data (online links, replace with your own if needed)
const albums = {
  dont: {
    title: "Don’t",
    photos: [
      "https://picsum.photos/200/300?random=1",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4"
    ]
  },
  cry: {
    title: "Cry",
    photos: [
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=6",
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8"
    ]
  },
  anymore: {
    title: "Anymore",
    photos: [
      "https://picsum.photos/200/300?random=9",
      "https://picsum.photos/200/300?random=10",
      "https://picsum.photos/200/300?random=11",
      "https://picsum.photos/200/300?random=12"
    ]
  },
  yu: {
    title: "Yu",
    photos: [
      "https://picsum.photos/200/300?random=13",
      "https://picsum.photos/200/300?random=14",
      "https://picsum.photos/200/300?random=15",
      "https://picsum.photos/200/300?random=16"
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