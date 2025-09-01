// Photo data (online images)
const albums = {
  dont: {
    title: "Don’t",
    photos: [
      "https://picsum.photos/200/300?random=1",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3"
    ]
  },
  cry: {
    title: "Cry",
    photos: [
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=6"
    ]
  },
  anymore: {
    title: "Anymore",
    photos: [
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8",
      "https://picsum.photos/200/300?random=9"
    ]
  },
  yu: {
    title: "Yu",
    photos: [
      "https://picsum.photos/200/300?random=10",
      "https://picsum.photos/200/300?random=11",
      "https://picsum.photos/200/300?random=12"
    ]
  }
};

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

function goBack() {
  document.getElementById("album-list").classList.remove("hidden");
  document.getElementById("photo-container").classList.add("hidden");
}