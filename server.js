// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
/**
 * @type {Server} app
 */
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const cache = {};

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const pathname = parsedUrl.pathname;

      if (!pathname?.startsWith("/p/")) {
        await handle(req, res, parsedUrl);
        return;
      }

      const [, _, id, slug] = pathname.split("/");

      console.log("cached", cache[pathname]);
      console.log('id, slug', id, slug)
      if (pathname in cache) {
        console.log("HIT Response");
        res.setHeader("x-cache", "HIT");
        res.end(cache[pathname]);
      } else {
        res.setHeader("x-cache", "MISS");
        const _resEnd = res.end.bind(res)
        res.end =  payload => {
          if (res.statusCode === 200) {
            cache[pathname] = res.body;
            console.log("MISS Response", res.body);
          }
          return _resEnd(payload)
        }
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("my internal server error");
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
