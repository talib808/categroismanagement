const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const categoryRoutes = require('./routes/category.routes');
const subCategoryRoutes = require('./routes/subcategory.routes');

const app = express();

app.use(bodyParser.json());

app.use('/categories', categoryRoutes);
app.use('/subcategories', subCategoryRoutes);

db.sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch((err) => {
    console.error('Failed to sync database:', err.message);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
