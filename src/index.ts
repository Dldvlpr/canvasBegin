import express, {Express, Request, Response} from 'express';
import * as path from 'path';

const PORT: Number = 3000;
const app: Express = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const start = async () => {
    app.listen(PORT, () => console.log("server start on PORT: " + PORT));
}

start();
