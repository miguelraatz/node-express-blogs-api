const express = require('express');

// ...

const loginRoutes = require('./routes/loginRoute');
const userRoutes = require('./routes/userRoute');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/user', userRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
