import { When, Then } from '@cucumber/cucumber';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { expect } from 'chai';
import * as consts from '../../commons/const.json';
import * as payloads from '../../commons/payload.json'
import * as responses from '../../commons/response.json'
chai.use(chaiHttp);

let response, responseObj;

When(/^I call GET on "([^"]*)"$/, async function (pathParam: string) {
  response = await chai.request(consts.baseUrl).get(pathParam);
})

Then(/^I expect status code as "([^"]*)"$/, async function (statusCode: string) {
  expect(response.statusCode).to.equal(parseInt(statusCode));
})

Then(/^I call POST on "([^"]*)" with payload "([^"]*)"$/, async function (pathParam: string, payload: string) {
  response = await chai.request(consts.baseUrl).post(pathParam).send(payloads[payload]);
})

Then(/^I verify the response to be "([^"]*)"$/, async function (responseString: string) {
  responseObj = responses[responseString];
  expect(response.body.name).to.equal(responseObj.name);
  expect(response.body.job).to.equal(responseObj.job);
  expect(response.body).to.have.any.keys('id', 'createdAt');
})