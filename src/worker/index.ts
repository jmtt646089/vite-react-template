import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "React-Ant Design-Vite-Hono-CF-JMTT" }));

export default app;
