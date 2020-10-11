/*global page:true */

const expect = require("chai").expect;
const Homepage = require("../pageobjects/homepage");

describe("testing globals", function () {
  beforeEach(async function () {
    await page.goto(Homepage.url, { waitUntil: "networkidle" });
  });

  it("page Title", async function () {
    expect(await Homepage.pageTitle).equals("Home");
  });
});
