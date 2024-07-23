import express from "express";
import router from "./route";

const app = express();
const PORT = 3000;

// Middleware untuk logging
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
