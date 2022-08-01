let imgs = [
  "./img/fer.jpg",
  "./img/bug.jpg",
  "./img/lam.jpg",
  "./img/mac.jpg",
  "./img/pag.jpg",
];
let caunt = 0;
let slider = document.querySelector(".slider");
let prew = document.querySelector(".prew");
let next = document.querySelector(".next");
slider.style.backgroundImage = `url(${imgs[caunt]})`;
prew.addEventListener("click", function () {
  if (caunt >= imgs.length-1) {
    caunt = 0;
  }
  caunt +=1;
  slider.style.backgroundImage = `url(${imgs[caunt]})`;
  console.log(caunt);
});
next.addEventListener("click", function () {
  if (caunt <= 0) {
    caunt = imgs.length;
  }
  caunt -= 1;
  slider.style.backgroundImage = `url(${imgs[caunt]})`;
  console.log(caunt);
});
