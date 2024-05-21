import { app } from "./app.js";

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT || 9000, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
