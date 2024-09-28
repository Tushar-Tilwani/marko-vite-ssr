import express from "express";
import { createServer as createViteServer } from "vite";
import routes from "./routes.json" assert { type: "json" };

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  for (const [route, component] of Object.entries(routes)) {
    app.get(route, async (req, res) => {
      try {
        const { default: Page } = await vite.ssrLoadModule(
          `./src/pages/${component}/index.marko`
        );
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        const output = await Page.render({});
        res.send(output.toString());
      } catch (error) {
        vite.ssrFixStacktrace(error);
        console.error(error);
        res.status(500).send("Internal Server Error");
      }
    });
  }

  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}

createServer();
