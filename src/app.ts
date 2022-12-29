import express from 'express';
import { json, urlencoded } from 'body-parser';
import todoRoutes from './routes/todos';
import connection from './db/config';

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use('/todos', todoRoutes);

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,

) => {
    res.status(500).json({ message: err.message });
})

connection.sync().then(() => {
    console.log('Database synced successfully');
}).catch(err => {
    console.log('Error', err)
})

app.listen(3009, () => {
    console.log('Server listening on port 3009');
})

