'use strict';

module.exports.mockCategories = [
  `Книги`,
  `Разное`,
  `Марки`,
  `Животные`,
  `Посуда`,
  `Журналы`,
  `Цветы`,
  `Игры`
];

module.exports.mockOffers = [
  {
    type: `OFFER`,
    title: `Куплю антиквариат.`,
    description: `Если найдёте дешевле — сброшу цену. Не пытайтесь торговаться. Цену вещам я знаю. Кому нужен этот новый телефон, если тут такое... Мой дед не мог её сломать. Если товар не понравится — верну всё до последней копейки.`,
    sum: 4667,
    picture: `item09.jpg`,
    categories: [
      `Книги`,
      `Разное`
    ],
    comments: [
      {
        text: `Вы что?! В магазине дешевле. Оплата наличными или перевод на карту? Неплохо, но дорого.`
      },
      {
        text: `А сколько игр в комплекте? Совсем немного...`
      },
      {
        text: `Оплата наличными или перевод на карту?`
      }
    ]
  },
  {
    type: `OFFER`,
    title: `Продам отличную подборку фильмов на VHS.`,
    description: `Если товар не понравится — верну всё до последней копейки. Пользовались бережно и только по большим праздникам., Это настоящая находка для коллекционера!`,
    sum: 57380,
    picture: `item05.jpg`,
    categories: [
      `Марки`,
      `Животные`,
      `Посуда`,
      `Книги`,
      `Журналы`,
      `Цветы`
    ],
    comments: [
      {
        text: `Почему в таком ужасном состоянии? Совсем немного...`
      }
    ]
  },
  {
    type: `OFFER`,
    title: `Отдам в хорошие руки подшивку «Мурзилка».`,
    description: `Две страницы заляпаны свежим кофе. При покупке с меня бесплатная доставка в черте города. Если найдёте дешевле — сброшу цену. Кому нужен этот новый телефон, если тут такое... Таких предложений больше нет!`,
    sum: 49682,
    picture: `item010.jpg`,
    categories: [
      `Посуда`,
      `Разное`,
      `Игры`
    ],
    comments: [
      {
        text: `Совсем немного... Оплата наличными или перевод на карту? Вы что?! В магазине дешевле.`
      },
      {
        text: `Неплохо, но дорого. Продаю в связи с переездом. Отрываю от сердца. Оплата наличными или перевод на карту?`
      },
      {
        text: `Вы что?! В магазине дешевле. Совсем немного... Неплохо, но дорого.`
      }
    ]
  },
  {
    type: `SALE`,
    title: `Продам советскую посуду. Почти не разбита.`,
    description: `Бонусом отдам все аксессуары.`,
    sum: 48971,
    picture: `item16.jpg`,
    categories: [
      `Животные`,
      `Посуда`,
      `Журналы`,
      `Игры`,
      `Марки`,
      `Цветы`
    ],
    comments: [
      {
        text: `Совсем немного... С чем связана продажа? Почему так дешёво?`
      },
      {
        text: `А где блок питания? А сколько игр в комплекте? Вы что?! В магазине дешевле.`
      },
      {
        text: `Оплата наличными или перевод на карту? С чем связана продажа? Почему так дешёво? А сколько игр в комплекте?`
      }
    ]
  }
];

module.exports.mockOffer = {
  categories: [1, 2],
  title: `Дам погладить котика`,
  description: `Дам погладить котика. Дорого. Не гербалайф`,
  picture: `cat.jpg`,
  type: `OFFER`,
  sum: 100500
};
