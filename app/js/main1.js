const abonements = [
  {
    type: "акционное",
    name: "Зона бикини и подмышечных впадин",
    description: "Лазерная эпиляция бикини и подмышечных впадин",
    count: 5,
    price: 10000,
    currency: "руб",
    priceDesc: "2500 руб — 1 процедура",
  },
  {
    type: "акционное",
    name: "Комплекс «Мальвина»",
    description:
      "Голени, тотальное бикини, подмышечные впадины, линия живота, пальчики ног",
    count: 5,
    price: 15990,
    currency: "руб",
    priceDesc: "3990 руб — 1 процедура",
  },
  {
    type: "акционное",
    name: "Комплекс «Лайт»",
    description:
      "Ноги полностью, тотальное бикини, подмышечные впадины, линия живота, пальчики ног",
    count: 3,
    price: 12500,
    currency: "руб",
    priceDesc: "4490 руб — 1 процедура",
  },
];

abonements.forEach((item) => {
  $(".abonements__Block_price").append(`
<div class="block__col">
<div class="first__item">
    <button class="sale_xs"><a href="#">${item.type}</a></button>
    <p class="p16_28b">
    ${item.name}
    </p>
    <p class="p14_24xs">${item.description}</p>

</div>
<div class="two__item">
    <span>${item.count} процедур</span>
</div>
<div class="three__item">
    <span>${item.price} ${item.currency}</span>
    <p class="p14_24xs">${item.priceDesc}</p>
</div>
<div class="four__item">
    <button class="button_S">
        <a href="#">записаться</a>
    </button>
</div>
</div>
`);
});

const servicesJS = [
  {
    discription: "Лазерная эпиляция",
    images: "images/services/1.jpg",
  },
  {
    discription: "Косметология",
    images: "images/services/2.jpg",
  },
  {
    discription: "Ногтевой сервис",
    images: "images/services/3.jpg",
  },
];

servicesJS.forEach((item) => {
  $(".wrapper__images__abonements__block").append(`

    <div class="images__abonements__block">
    <img src="${item.images}" alt="">
    <div class="inner__images__abonements__block">
    <img src="images/services/Vector.svg" alt="" class="vector">
    <p class="p18_32"><a href="#"> ${item.discription}</a></p>
</div>
</div>

`);
});

const instagrammJS = [
  {
    imagesInstagram: "images/instagram/1.jpg",
  },
  {
    imagesInstagram: "images/instagram/2.jpg",
  },
  {
    imagesInstagram: "images/instagram/3.jpg",
  },
];

instagrammJS.forEach((item) => {
  $(".gallery__instagram").append(`

    <div class="images__instagram">
    <img src="${item.imagesInstagram}" alt="">
</div>
    `);
});

const advantagesJS = [
  {
    imagesAdv: "images/advantages/1.svg",
    discription: "Инновационная методика",
  },
  {
    imagesAdv: "images/advantages/2.svg",
    discription: "Авторская техника удаления волос",
  },
  {
    imagesAdv: "images/advantages/3.svg",
    discription: " Врачи<br> дерматологи",
  },
  {
    imagesAdv: "images/advantages/4.svg",
    discription: "Новое оборудование (2018 года) ",
  },
  {
    imagesAdv: "images/advantages/5.svg",
    discription: "Стойкий результат после 1 процедуры",
  },
  {
    imagesAdv: "images/advantages/6.svg",
    discription: "Удаление волос на любом фототипе кожи",
  },
  {
    imagesAdv: "images/advantages/7.svg",
    discription: "Обработка всего тела за рекордноe время",
  },
  {
    imagesAdv: "images/advantages/8.svg",
    discription: "Фиксированная стоимость курса",
  },
];

advantagesJS.forEach((item) => {
  $(".wrapper__advantages_block").append(`

<div class="block__advantages">
<div class="logo__advantages">
<img src="${item.imagesAdv}" alt="">
</div>
<div class="text__advantages">
    <p class="p16_28" >
        ${item.discription}
    </p>
</div>
</div>
`);
});
const instagramJS = [
  {
    image: "images/staff/1.jpg",
    disctiption: "Косметолог-эстетист",
    person: "Маргарита Руслановна",
  },
  {
    image: "images/staff/2.jpg",
    disctiption: "Специалист лазерной эпиляции",
    person: "Юлия Константиновна",
  },
  {
    image: "images/staff/3.jpg",
    disctiption: "Специалист лазерной эпиляции",
    person: "Оксана Радифовна",
  },
  {
    image: "images/staff/4.jpg",
    disctiption: "Специалист лазерной эпиляции",
    person: "Надежда Яковлевна",
  },
];

instagramJS.forEach((item) => {
  $(".gallery__instagram_comp").append(`
    <div class="images__instagram">
    <img src=${item.image}>
    <div class="text__images">
    <p class="p12_20">${item.disctiption}</p>
    <p class="p16_28">${item.person}</p>
    </div>
</div>
    `);
});

$(".faq-question").on("click", function () {
  if ($(this).parent().hasClass("active")) {
    $(this).parent().removeClass("active");
    $(this).next().slideUp();
  } else {
    $(".faq-singular").removeClass("active");
    $(".faq-answer").slideUp();
    $(this).parent().addClass("active");
    $(this).next().slideDown();
  }
});

const salesJS = [
  {
    image: "images/sales/1.jpg",
    date: "до 13 Января",
    percent: "-40%",
    name: "Верхняя губа",
    price: 500,
    oldPrice: 1000,
  },
  {
    image: "images/sales/2.jpg",
    date: "до 13 Января",
    percent: "-40%",
    name: "Подмышечные впадины",
    price: 1000,
    oldPrice: 1500,
  },
  {
    image: "images/sales/3.jpg",
    date: "до 13 Января",
    percent: "-40%",
    name: "Зона бикини и подмышечных впадин",
    price: 2500,
    oldPrice: 4000,
  },
  {
    image: "images/sales/4.jpg",
    date: "до 13 Января",
    percent: "-40%",
    name: "Лицо",
    price: 3000,
    oldPrice: 5500,
  },
  {
    image: "images/sales/5.jpg",
    date: "до 13 Января",
    percent: "-40%",
    name: "Ноги и подмышечные впадины",
    price: 4000,
    oldPrice: 6500,
  },
  {
    image: "images/sales/6.jpg",
    date: "до 13 Января",
    percent: "-40%",
    name: 'Комплекс "Malvina"',
    price: 4000,
    oldPrice: 7000,
  },
  {
    image: "images/sales/7.jpg",
    date: "до 13 Января",
    percent: "-40%",
    name: "Ноги и зона бикини",
    price: 4500,
    oldPrice: 8000,
  },
  {
    image: "images/sales/8.jpg",
    date: "до 13 Января",
    percent: "-40%",
    name: 'Комплекс "Лайт"',
    price: 5000,
    oldPrice: 10000,
  },
  {
    image: "images/sales/9.jpg",
    date: "до 13 Января",
    percent: "-40%",
    name: 'Комплекс "New"',
    price: 5500,
    oldPrice: 10000,
  },
  {
    image: "images/sales/10.jpg",
    date: "до 13 Января",
    percent: "-40%",
    name: 'Комплекс "Медиум"',
    price: 8000,
    oldPrice: 13500,
  },
  {
    image: "images/sales/11.jpg",
    date: "до 13 Января",
    percent: "-40%",
    name: 'Комплекс "Премиум"',
    price: 12500,
    oldPrice: 31000,
  },
];

const upPrice = (number) => {
  if (number) {
    const withPercent = (number / 100) * 10 + number;
    return withPercent;
  }
  return 0;
};

//!!!!!!!!! повторение материала
const test = [
  "Dima",
  33,
  {
    ford: "blue",
    lastName: [
      "vasya",
      44,
      {
        red: "yellow",
        go: (name) => {
          return name + 10;
        },
      },
    ],
  },
  () => {
    return "hy";
  },
  55,
];

const test2 = [
  "Dima",
  28,
  {
    cars: "subaru",
    wife: "lilya",
    children: 3,
    house: "one house  and country house",
    go: (name) => {
      return name + 20;
    },
  },
];
const itsBig = "это много";

const computer = [
  "keywords",
  "display",
  123232534646,
  {
    mouse: 1,
    alphabet: "32 words",
    powerOf: 1,
  },
  {
    love: (number) => {
      return number + number + number;
    },
    wife: (item) => {
      return item + " Love" + " Dima";
    },
  },
];

const myName = [
  {
    name: "Dmitriy",
    lastName: "Shevchenko",
    age: 28,
    wife: "dont have",
    children: "dont have",
    job: "programmer",
    time: (time) => {
      return time * 0.5 + " glad too see you and good luck";
    },
  },
];

const myTest = [
  1,
  2,
  4,
  "hello",

  {
    name1: (number) => {
      return (number / 100) * 5 + number;
    },
    name: "vasya",
    love: "lilya",
  },
];

/*
test[2].lastName
(3) ["vasya", 44, {…}]0: "vasya"1: 442: {red: "yellow", go: ƒ}length: 3__proto__: Array(0)
test[2].lastName[2]
{red: "yellow", go: ƒ}
test[2].lastName[2].go
e=>e+10
test[2].lastName[2].red
"yellow"
*/

salesJS.forEach((item) => {
  const itemHtml = `
    <div class="content__right__wrapper__home">
    <img src="${item.image}" alt="">
    <div class="sale">
        <span class="date">${item.date}</span>
        <span class="percent">${item.percent}</span>
    </div>
    <div class="text__sales">
        <p class="p18_32">
        ${item.name}
        </p>
        <div class="span">
            <span class="new">${upPrice(item.price)} Руб. </span>
            <span class="old"> ${upPrice(item.oldPrice)}</span>
        </div>
    </div>
</div>
    `;

  $(".saleWrapper").append(itemHtml);
});

// создать массив чисел
// получить новый массив в котором все числа будут выше на 15 %

//но если одно из чисел равна 120 или 222 вместо них
//записать 1000

const num = [1, 222, 6, 446, 5, 768, 79, 87, 94, 120];

const num1 = num.map((item) => {
  const withPercent = (item / 100) * 15 + item;
  if (item === 120 || item === 222) {
    return 1000;
  }
  return withPercent;
});

//
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const number11 = number.map((item) => {
  const withPercent = (item / 100) * 15 + item;
  if (item === 1 || item === 2) {
    return 1000;
  }
  return withPercent;
});

const wordsBase = ["aaa", "www", "ccc"];

const fff = "ggff ddd ccc dddss www hello world aaa";

const together = fff.split(" ");

const newArray = together.map((word) => {
  const isFind = wordsBase.find((item) => item === word);
  if (isFind) {
    return "***";
  }
  return word;
});

const sss = newArray.join(", ").toString();

const getCarInfo = (car, country) => {
  if (country === "EU" && car.region === "EU") {
    return `Name: ${car.name}, power: ${car.hp}hp, speed: ${car.maxSpeed}km/h`;
  }

  if (country === "US" && car.region === "EU") {
    return `Name: ${car.name}, power: ${car.hp * 0.74}kw, speed: ${
      car.maxSpeed * 0.62
    }ml/h`;
  }

  if (car.region === "FR" && country) {
    return "французов не обслуживаем";
  }

  if (country === "JP") {
    return "произведенов Японии";
  }

  if (country === 100) {
    return car.hp + 100;
  }

  return "не верные данные";
};

///дз
// километры в мили и хорс повер в киловаты

const array55 = ["hello", "hy", "see"];

const notAarray55 = "hello my name is see and say hy";

const wrapperNotAarray = notAarray55.split(" ");

const newArrayofThis = wrapperNotAarray.map((word) => {
  const ifFindthis = array55.find((item) => item === word);
  if (ifFindthis) {
    return "***";
  }
  return word;
});

const course11 = {
  usd: 27.4,
  eur: 32.7,
};

const getCurrency11 = (grivna) => {
  const changeDollar = grivna / course.usd;
  const changeEuro = grivna / course.eur;
  return `${grivna.toFixed(2)} гривен равняется ${changeDollar.toFixed(
    2
  )}долларов,${changeEuro.toFixed(2)} евро`;
};

const course = {
  usd: 27.32,
  eur: 32.4,
  rub: 0.36,
  zl: 7.05,
};

const getCurrency = (grivna) => {
  const changeDollar = grivna / course.usd;
  const changeEuro = grivna / course.eur;
  const changeRub = grivna / course.rub;
  const changeZl = grivna / course.zl;
  return `на текущий момент ${grivna} гривен равно ${changeDollar.toFixed(
    2
  )} долларов,
${changeEuro.toFixed(2)} евро,
${changeRub.toFixed(2)} рублей,
${changeZl.toFixed(2)} злотых`;
};

// до двух значений

//дана строка сделайте заглавным первый символ не используя цикл
//нvar str = 'hello';

// var str = '123456'
// var result = str.split('').reverse().join('')
// alert(result)
