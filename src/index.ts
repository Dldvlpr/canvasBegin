import * as Express from 'express';
import * as path from 'path';

const PORT: number = 3000;
const app = Express();

app.use(Express.static(path.join(__dirname, '../public')));
app.use('/build', Express.static(path.join(__dirname, '../build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const start = async () => {
    app.listen(PORT, () => console.log("Server started on PORT: " + PORT));
}

start();
