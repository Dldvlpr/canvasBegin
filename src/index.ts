import * as Express from 'express';
import * as path from 'path';

const PORT: Number = 3000;
const app = Express();

app.use(Express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const start = async () => {
    app.listen(PORT, () => console.log("server start on PORT: " + PORT));
}

start();
