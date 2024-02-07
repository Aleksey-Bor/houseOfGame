//Создаем массив с ссылками на изображения
let imageSources = [
  "/animation/assets/shield.svg",
  "/animation/assets/dollar.svg",
  "/animation/assets/soccer.svg",
  "/animation/assets/m.svg",
  "/animation/assets/crown.svg",
  "/animation/assets/timer.svg",
  "/animation/assets/world.svg",
  "/animation/assets/shield.svg",
  "/animation/assets/dollar.svg",
  "/animation/assets/soccer.svg",
  "/animation/assets/m.svg",
  "/animation/assets/crown.svg",
  "/animation/assets/timer.svg",
  "/animation/assets/world.svg",
  "/animation/assets/shield.svg",
  "/animation/assets/dollar.svg",
  "/animation/assets/soccer.svg",
  "/animation/assets/m.svg",
  "/animation/assets/crown.svg",
  "/animation/assets/timer.svg",
  "/animation/assets/world.svg",
];

//Находим контейнеры для изображений
const container1 = document.getElementById("svg-container1");
const container2 = document.getElementById("svg-container2");
const container3 = document.getElementById("svg-container3");
const shiftPositions = 400;
const paddingAdjustment = 55;

//Заполняем контейнеры изображениями
function fillContainer(container, images) {
  let checkArr = [];
  images.forEach((imageSrc) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    container.appendChild(img);

    img.addEventListener("load", () => {
      checkArr.push(img);
      if (checkArr.length == images.length) {
        setStartPosition();
      }
    });
  });
}

//Фиксируем старовое положение изображений
function setStartPosition() {
  const images1 = container1.getElementsByTagName("img");
  const images2 = container2.getElementsByTagName("img");
  const images3 = container3.getElementsByTagName("img");

  for (let i = images1.length - 1; i >= 0; i--) {
    let image = images1[i];
    let pos = image.offsetTop;
    image.style.top = pos - shiftPositions + "px";
    image.style.position = "absolute";
  }

  for (let i = images2.length - 1; i >= 0; i--) {
    let image = images2[i];
    let pos = image.offsetTop;
    image.style.bottom = pos - shiftPositions + "px";
    image.style.position = "absolute";
  }

  for (let i = images3.length - 1; i >= 0; i--) {
    let image = images3[i];
    let pos = image.offsetTop;
    image.style.top = pos - shiftPositions + "px";
    image.style.position = "absolute";
  }
  animateImages(images1, images2, images3);
}

//Двигаем изображения
function animateImages(images1, images2, images3) {
  let startPos1 = [];
  let startPos2 = [];
  let startPos3 = [];
  let fragmentHeight = 0;

  let arrImages1 = Array.from(images1);
  arrImages1.forEach((img) => {
    startPos1.push(img.offsetTop);
    fragmentHeight += img.offsetHeight;
  });

  let arrImages2 = Array.from(images2);
  arrImages2.forEach((img) => {
    startPos2.push(img.offsetTop);
  });

  let arrImages3 = Array.from(images3);
  arrImages3.forEach((img) => {
    startPos3.push(img.offsetTop);
  });

  function move() {
    for (let i = 0; i < images1.length; i++) {
      const image = images1[i];
      image.style.top = `${startPos1[i]}px`;
      startPos1[i] += 5;

      image.style.filter = `brightness(${0.5 - startPos1[i] / fragmentHeight})`;

      if (
        startPos1[i] >
        fragmentHeight - (shiftPositions - paddingAdjustment)
      ) {
        startPos1[i] = -shiftPositions;
      }
    }

    for (let i = 0; i < images2.length; i++) {
      const image = images2[i];
      image.style.bottom = `${startPos2[i]}px`;
      startPos2[i] += 4;

      image.style.filter = `brightness(${0.5 + startPos2[i] / fragmentHeight})`;

      if (
        startPos2[i] >
        fragmentHeight - (shiftPositions - paddingAdjustment)
      ) {
        startPos2[i] = -shiftPositions;
      }
    }

    for (let i = 0; i < images3.length; i++) {
      const image = images3[i];
      image.style.top = `${startPos3[i]}px`;
      startPos3[i] += 6;

      // image.style.filter = "brightness(0.7)";
      image.style.filter = `brightness(${0.7 - startPos3[i] / fragmentHeight})`;

      if (
        startPos3[i] >
        fragmentHeight - (shiftPositions - paddingAdjustment)
      ) {
        startPos3[i] = -shiftPositions;
      }
    }

    requestAnimationFrame(move);
  }
  requestAnimationFrame(move);
}

// Передаем  каждый контейнер изображения в произвольном порядке для каждого контейнера
function shuffleImages() {
  const shuffledImages1 = shuffleArray(imageSources);
  const shuffledImages2 = shuffleArray(imageSources);
  const shuffledImages3 = shuffleArray(imageSources);
  fillContainer(container1, shuffledImages1);
  fillContainer(container2, shuffledImages2);
  fillContainer(container3, shuffledImages3);
}

// Вспомогательная функция для перемешивания массива
function shuffleArray(array) {
  const newArray = [...array];
  return newArray.sort(() => Math.random() - 0.5);
}

// Запускаем анимацию
window.addEventListener("DOMContentLoaded", function () {
  shuffleImages();
});
