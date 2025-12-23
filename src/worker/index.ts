import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "React-Ant Design-Vite-Honoooooooooooooo-CF-JMTT" }));
app.get("/products/", (c) => c.json({ name: "Products" }));
app.get("/productspec/", (c) => c.json({ name: "Product Details by ID" }));
app.get("/cart/", (c) => c.json({ name: "Shopping Cart" }));
app.get("/order/", (c) => c.json({ name: "Order" }));
app.get("/account/", (c) => c.json({ name: "Account" }));

export default app;
