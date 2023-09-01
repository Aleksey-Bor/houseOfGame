let container = document.getElementById("svg-container1");

let imageSources = [
  "/animation/assets/shield.svg",
  "/animation/assets/dollar.svg",
  "/animation/assets/soccer.svg",
  "/animation/assets/m.svg",
  "/animation/assets/shield.svg",
  "/animation/assets/dollar.svg",
  "/animation/assets/soccer.svg",
  "/animation/assets/m.svg",
];

let images = [];
let distance = 221;
let speed = 1;
let startY = 0;

imageSources.forEach((src) => {
  let image = document.createElement("img");
  image.src = src;
  image.classList.add("image_animated");
  image.style.position = "absolute";
  container.appendChild(image);
  images.push(image);
  image.addEventListener("load", () => {
    images.forEach((image, index) => {
      if (index > 0) {
        let previousImage = images[index - 1];
        image.style.top = previousImage.offsetTop - image.offsetHeight + "px";
      } else {
        image.style.top = startY + "px";
      }
    });
  });
});

function animateSVG() {
  images.forEach((image, index) => {
    let y = image.offsetTop + speed; // Добавляем скорость к текущей позиции
    console.log(y);

    if (y > container.offsetHeight + distance) {
      // Если изображение находится ниже контейнера, сбрасываем его позицию вверху
      y =
        image.offsetTop -
        container.offsetHeight -
        (index > 0 ? images[index - 1].offsetHeight : images.offsetHeight) - distance;
    }

    let maxDistance = container.offsetHeight;
    let darknessFactor = 0.7 - y / maxDistance;

    image.style.filter = `brightness(${darknessFactor})`;
    image.style.top = y + "px";
  });
}

// Запускаем цикл анимации
requestAnimationFrame(function loop() {
  animateSVG();
  requestAnimationFrame(loop);
});
