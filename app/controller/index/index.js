'usestrict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {
  async index() {
    const result = this.service.article.getArtilceList();
    console.log('index-result', result);
    await this.ctx.render('index/index.js', result);
  }

  async client() {
    const result = this.service.article.getArtilceList();
    await this.ctx.renderClient('index/index.js', result);
  }

  async list() {
    this.ctx.body = this.service.article.getArtilceList(this.ctx.query);
    console.log('list-this.ctx.body', this.ctx.body);
  }

  async detail() {
    const id = this.ctx.query.id;
  }
};