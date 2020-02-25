import express, { Application} from 'express';
import indexRoutes from './routes/index';
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(indexRoutes);

app.listen(3000);
console.log('Server on port', 3000);