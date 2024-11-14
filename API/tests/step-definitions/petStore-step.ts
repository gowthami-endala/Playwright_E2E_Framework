import { Given, When, Then } from '@cucumber/cucumber';
import { Page, request } from 'playwright';
import { expect } from '@playwright/test';


When('I send a GET request to the endpoint', async function () {
  const apiContext = await request.newContext();
  this.response = await apiContext.get('https://petstore.swagger.io/v2/user/7878');

});

Then('the response status code should be {int}', async function (int) {
  expect(this.response.status()).toBe(404);
  const responseBody = await this.response.json();
  expect(responseBody).toHaveProperty('message', 'User not found');
});
Given('I send a POST  request to the endpoint', async function () {
  const apiContext = await request.newContext();
  const body = [
    {
      "id": 1001,
      "username": "test123",
      "firstName": "John1",
      "lastName": "Ramantsevich1",
      "email": "d.ramantsevich1@gmail.com",
      "password": "123",
      "phone": "257183470",
      "userStatus": 1
    },
    {
      "id": 1002,
      "username": "test12345",
      "firstName": "John2",
      "lastName": "Ramantsevich2",
      "email": "d.ramantsevich2@gmail.com",
      "password": "123",
      "phone": "257182440",
      "userStatus": 1
    },
    {
      "id": 1003,
      "username": "test123456",
      "firstName": "John3",
      "lastName": "Ramantsevich3",
      "email": "d.ramantsevich3@gmail.com",
      "password": "123",
      "phone": "254182470",
      "userStatus": 1
    }
  ]

  this.response = await apiContext.post("https://petstore.swagger.io/v2/user/createWithArray", { data: body });


});
Then('the response status code should be successful', async function () {
  const response = await this.response.json();
  expect(this.response.status()).toBe(200);
});

Given('I send a PUT request to update the existing user', async function () {
  const apiContext = await request.newContext();
  const body = {
    "id": 1,
    "username": "test123",
    "firstName": "asdas",
    "lastName": "fasdfas",
    "email": "fasdfasd@gmail.com",
    "password": "fasd",
    "phone": "12354325",
    "userStatus": 1
  }


  this.response = await apiContext.put("https://petstore.swagger.io/v2/user/test123", { data: body });
});

Then('I should receive a response status code {int}', async function (int) {
  const response = await this.response.json();
  expect(this.response.status()).toBe(200);
});

Given('I send a POST request with Null input to the endpoint', async function () {
  const apiContext = await request.newContext();
  const body = {
  }
  this.response = await apiContext.post("https://petstore.swagger.io/pet/{petId}", {
    data: body,
    headers: { "Content-Type": "application/json" }
  });

});
Then('the response status code should be {int} invalid output response', async function (int) {
  const responseBody = await this.response.json();
  expect(responseBody).toHaveProperty('message', "For 'petId': Required field is not provided.");
});

Given('I send a DELETE request to the endpoint', async function () {
  const apiContext = await request.newContext();
  this.response = await apiContext.delete("https://petstore.swagger.io/v2/user/test123", { headers: { "Content-Type": "application/json" } });

});
Then('the response status code should be {int} success', async function (int) {
  expect(this.response.status()).toBe(200);
});

Given('I send a POST request with Null data to the endpoint', async function () {
  const apiContext = await request.newContext();
  const body = {};
  this.response = await apiContext.post('https://petstore.swagger.io/v2/pet/{petId}', {
    data: body,
    headers: { 'Content-Type': 'application/json' }
  });
});

Then('the response status code should be invalid output response', async function () {
  expect(this.response.status()).toBe(415);
  
});


