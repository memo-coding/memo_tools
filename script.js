// ==================[Aside Menu]=====================
let menu = document.getElementById("menu");
let open = document.getElementById("open-nav");
let close = document.getElementById("close-nav");
let change = document.getElementById("change-mode");
let btn = document.querySelector("span.to-top");

open.addEventListener("click", function () {
  menu.classList.add("open");
});

close.addEventListener("click", function () {
  menu.classList.remove("open");
});

// ==================[Scroll To Top Btn]=====================
window.onscroll = function () {
  if (window.scrollY >= 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// ==================[Loder]=====================
let bgLoading = document.getElementById("bgLoading");
let bgLoadingCont = document.querySelector("#bgLoading .loading-container");
window.onload = () => {
  setTimeout(function () {
    bgLoadingCont.style.opacity = "0";
    bgLoading.style.pointerEvents = "none";
    bgLoading.style.backdropFilter = "blur(0px)";
    setTimeout(function () {
      bgLoadingCont.style.display = "none";
      bgLoading.style.display = "none";
    }, 1000);
  }, 1000);
};
