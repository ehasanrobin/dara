var slider = tns({
  container: ".my-slider",
  items: 3,
  nav: false,
  controls: false,
  mouseDrag: true,
  responsive: {
    640: {
      edgePadding: 5,
      gutter: 30,
      items: 3,
    },
    700: {
      gutter: 30,
      items: 4,
    },
    900: {
      items: 6,
    },
  },
});

document.querySelector(".search-btn").addEventListener("click", () => {
  const navmenu = document.querySelector(".nav-menu");
  document.querySelector(".input-box").classList.remove("none");
  document.querySelector(".searchInput").focus();
  navmenu.classList.add("none");
});

document.querySelector(".searchInput").addEventListener("blur", () => {
  const navmenu = document.querySelector(".nav-menu");
  document.querySelector(".input-box").classList.add("none");
  navmenu.classList.remove("none");
});

// It is so that once the container is gone, the entire preloader section is deleted

setTimeout(() => {
  document.querySelector("#preloader").style.display = "none";
  console.log("time out");
}, 1500);
