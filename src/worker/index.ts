import { Hono } from "hono";
import { logger } from 'hono/logger';
import { createClient } from '@supabase/supabase-js';
import { env } from "cloudflare:workers";

const app = new Hono<{ Bindings: Env }>();

app.use(logger());

app.get("/api/", (c) => c.json({ name: "React-Ant Design-Vite-Honoooooooooooooo-CF-JMTT" }));
app.get("/products/", (c) => c.json({ name: "Products" }));
app.get("/productspec/", (c) => c.json({ name: "Product Details by ID" }));
app.get("/cart/", (c) => c.json({ name: "Shopping Cart" }));
app.get("/order/", (c) => c.json({ name: "Order" }));
app.get("/account/", (c) => c.json({ name: "Account" }));




// Create a single supabase client for interacting with your database
// Cloudflare workers environment, not hard coding here 
const projectUrl = env.PROJECT_URL;
const publishableKey = env.PUBLISHABLE_KEY;

const supabase = createClient(projectUrl, publishableKey);

console.log("supabase client created");

console.log("query users table -----------------------------------");
await supabase.from('users').select('id, fname, lname, email');

console.log("insert users table -----------------------------------");
await supabase.from('users').insert([
    { fname: 'littlewhite', lname: 'cat' },
  ]);

console.log("update users table -----------------------------------");
await supabase
  .from('users')
  .update({ fname: 'j10noodles' })
  .eq('id', 1);




export default app;
