/*global page:true */

class Homepage {
  constructor() {
    this.url = "https://www.tesena.com";
  }

  get pageTitle() {
    return page
      .title()
      .then(function (title) {
        return title;
      })
      .catch(function (error) {
        console.log(`Error: ${error}`);
      });
  }
}
module.exports = new Homepage();
