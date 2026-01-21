import { Hono } from "hono";
import { logger } from 'hono/logger';
import { createClient } from '@supabase/supabase-js';


async function user_ops(url:string,key:string) {
  
  const supabase = createClient(url, key);
  console.log('db url is ' + url.substring(0,15));
  console.log('pub key is ' + key.substring(0,15));  
  console.log("supabase client created");
  //console.log(supabase);
  
  console.log("query users table -----------------------------------");
  const {data, error} = await supabase.from('users').select('id, fname, lname, email');
  if (error) {
    console.error(error);
  } else {
    console.log(data); // 'data' is now available and properly typed
  }

  
  //console.log("insert users table -----------------------------------");
  //supabase.from('users').insert([
  //    { fname: 'littlewhite', lname: 'cat' },
  //  ]);
  
  console.log("update users table -----------------------------------");
  supabase
    .from('users')
    .update({ fname: 'j10noodles' })
    .eq('id', 1);

}


type Environ = {
  PROJECT_URL: string;
  PUBLISHABLE_KEY: string;
}

const app = new Hono<{ Bindings: Environ}>();
//const app = new Hono<{ Bindings: Env }>();

app.use(logger());

app.get("/api/", (c) => c.json({ name: "React-Ant Design-Vite-Honoooooooooooooo-CF-JMTT" }));
app.get("/products/", (c) => c.json({ name: "Products" }));
app.get("/productspec/", (c) => c.json({ name: "Product Details by ID" }));
app.get("/cart/", (c) => c.json({ name: "Shopping Cart" }));
app.get("/order/", (c) => c.json({ name: "Order" }));
app.get("/account/", (c) => c.json({ name: "Account" }));
app.get("/users/", (c) => {
                              user_ops(c.env.PROJECT_URL, c.env.PUBLISHABLE_KEY);
                              //return  c.text("query users run ---------------- finished ");
                              return c.json({ name: "supabase table - users - Updated" });
                          }
       );


export default app;
