const express = require('express');
const userRouter = require('./routers/user.routes');
const loginRouter = require('./routers/login.routes');
const categoriesRouter = require('./routers/postsCategories.routes');
const blogPostRouter = require('./routers/blogPosts.routes');
const errorMiddleware = require('./helpers/error');
const authMiddleware = require('./helpers/auth');

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use(authMiddleware);
app.use('/categories', categoriesRouter);
app.use('/post', blogPostRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(errorMiddleware);
