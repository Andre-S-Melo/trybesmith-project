import express from 'express';
import errorHandler from './middlewares/errorHandler';
import userRouter from './routes/user.routes';
import orderRouter from './routes/order.routes';
import productRouter from './routes/product.routes';

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(orderRouter);
app.use(productRouter);

app.use(errorHandler);

export default app;
