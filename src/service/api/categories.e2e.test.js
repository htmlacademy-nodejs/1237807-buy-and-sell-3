'use strict';

const express = require(`express`);
const request = require(`supertest`);

const categories = require(`./categories`);
const DataService = require(`../data-service/category`);

const {mockData} = require(`./categories.test-data`);
const {HttpCode} = require(`../../const`);

const app = express();
app.use(express.json());
categories(app, new DataService(mockData));

describe(`API returns category list`, () => {

  let response;

  beforeAll(async () => {
    response = await request(app).get(`/categories`);
  });

  test(`Status code 200`, () => expect(response.statusCode).toBe(HttpCode.OK));
  test(`Returns list of 8 categories`, () => expect(response.body.length).toBe(7));

  test(`Category names are "Животные", "Журналы", "Цветы", "Книги", "Разное", "Игры", "Марки"`,
      () => expect(response.body).toEqual(
          expect.arrayContaining([`Животные`, `Журналы`, `Цветы`, `Книги`, `Разное`, `Игры`, `Марки`])
      )
  );

});
