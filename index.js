const express = require('express');
const userRouter = require('./routes/user');
const categoryRouter = require('./routes/category');
const loginRouter = require('./routes/login');
const errorMiddleware = require('./helpers/error');
const authMiddleware = require('./helpers/auth');

const app = express();
app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/login', loginRouter);
app.use(authMiddleware);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(errorMiddleware);
