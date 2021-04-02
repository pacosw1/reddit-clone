import bodyParser from 'body-parser';
import express from 'express';
// rest of the code remains same


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const PORT = 7000;



app.get('/', (req, res) => res.status(200).send("hello"));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});


const userRoute = require("./routes/users")

app.use("/users", userRoute)

