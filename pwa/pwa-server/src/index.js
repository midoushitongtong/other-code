const Koa = require('koa');
const Router = require('koa-router');
const fetch = require('node-fetch');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

router.get('/api/theaterMovies', async (ctx, next) => {
  // 从豆瓣获取正在热映的 50 条电影数据
  let res = await fetch(
    'http://t.yushu.im/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&count=50'
  );

  res = await res.json();

  let theaters = [];

  // 过滤掉图片无法访问的数据
  await Promise.all(
    res.subjects.map((item) =>
      fetch(item.images.large).then((image) => {
        if (image.status === 200) {
          theaters.push({
            image: `https://images.weserv.nl/?url=${item.images.large}`,
            title: item.title,
          });
        }
      })
    )
  );

  // 随机截取 10 条返回
  theaters = theaters.sort(() => Math.random() - 0.5).slice(0, 10);

  ctx.body = theaters;

  next();
});

app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
