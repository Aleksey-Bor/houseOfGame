// Получение ссылки на контейнер SVG
let container = document.getElementById("svg-container1");

// Создание и добавление изображений SVG в контейнер
let image1 = document.createElement("img");
image1.src = "/animation/assets/shield.svg";
container.appendChild(image1);

let image2 = document.createElement("img");
image2.src = "/animation//assets/dollar.svg";
container.appendChild(image2);

let image3 = document.createElement("img");
image3.src = "/animation//assets/soccer.svg";
container.appendChild(image3);

let image4 = document.createElement("img");
image4.src = "/animation//assets/m.svg";
container.appendChild(image4);

let image5 = document.createElement("img");
image5.src = "/animation/assets/shield.svg";
container.appendChild(image5);

let image6 = document.createElement("img");
image6.src = "/animation//assets/dollar.svg";
container.appendChild(image6);

let image7 = document.createElement("img");
image7.src = "/animation//assets/soccer.svg";
container.appendChild(image7);

// Настройка анимации
let speed = 2; // Скорость движения изображений
let distance = 100; // Расстояние между фишками. Подобрано по размеру чуть меньше самой высокой фишки

function animateSVG() {
  // Получение текущих координат изображений
  let y1 = image1.offsetTop;
  let y2 = parseFloat(y1 + image1.offsetHeight);
  let y3 = parseFloat(y2 + image2.offsetHeight);
  let y4 = parseFloat(y3 + image3.offsetHeight);
  let y5 = parseFloat(y4 + image4.offsetHeight);
  let y6 = parseFloat(y5 + image5.offsetHeight);
  let y7 = parseFloat(y6 + image6.offsetHeight);

  // Движение изображений вниз
  y1 += speed;
  y2 += speed;
  y3 += speed;
  y4 += speed;
  y5 += speed;
  y6 += speed;
  y7 += speed;

  // Проверка, достигли ли изображения нижней границы контейнера
  if (y1 > container.offsetHeight + distance) {
    y1 = -image1.offsetHeight - distance;
  }

  if (y2 > container.offsetHeight + distance) {
    y2 = -image2.offsetHeight;
  }

  if (y3 > container.offsetHeight + distance) {
    y3 = -image3.offsetHeight - distance;
  }

  if (y4 > container.offsetHeight + distance) {
    y4 = -image4.offsetHeight - distance;
  }

  if (y5 > container.offsetHeight + distance) {
    y5 = -image5.offsetHeight - distance;
  }

  if (y6 > container.offsetHeight + distance) {
    y6 = -image6.offsetHeight - distance;
  }

  if (y7 > container.offsetHeight + distance) {
    y7 = -image7.offsetHeight - distance;
  }

  let maxDistance = container.offsetHeight; // Максимальное расстояние до нижней границы контейнера
  let darknessFactor = 0.7 - (y1 - image1.offsetHeight * 2) / maxDistance; // Фактор затемнения, основанный на текущей позиции

  image1.style.filter = `brightness(${darknessFactor})`; // Применение затемнения
  image2.style.filter = `brightness(${darknessFactor})`;
  image3.style.filter = `brightness(${darknessFactor})`;
  image4.style.filter = `brightness(${darknessFactor})`;
  image5.style.filter = `brightness(${darknessFactor})`;
  image6.style.filter = `brightness(${darknessFactor})`;
  image7.style.filter = `brightness(${darknessFactor})`;

  // Обновление позиции изображений
  image1.style.top = y1 + "px";
  image2.style.top = y2 + "px";
  image3.style.top = y3 + "px";
  image4.style.top = y4 + "px";
  image5.style.top = y5 + "px";
  image6.style.top = y6 + "px";
  image7.style.top = y7 + "px";

  // Рекурсивный вызов функции для непрерывной анимации
  requestAnimationFrame(animateSVG);
}

// Запуск анимации
animateSVG();
