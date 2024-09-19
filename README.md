# Categories Management API
- This is a Node.js application for managing categories and subcategories using Express and MySQL. It  allows you to create, read, update, and delete categories and subcategories, as well as retrieve category counts with their associated subcategories.

## Features

 - Create, read, update, and delete categories and subcategories
- Retrieve a list of categories with the count of associated subcategories
- Structured database schema with foreign key relationships


## Technologies
- Node.js
- Express.js
- MySQL
- Sequelize (ORM)
- Nodemon (for development)
- Postman (for testing the API)


## Installation
- Clone the repository:

- git clone <repository-url>
- cd categories-management
- Install the required packages:
```
npm install
```
## Set up your MySQL database:

- Create a database named categories_management.
- Update the database configuration in config/config.json.
- Run the migrations to set up the tables:


- npx sequelize-cli db:migrate
- Start the server:
- npx nodemon server.js

### The server will run on http://localhost:3000.

- API Endpoints
- Categories
- GET /categories/categories/count

- Description: Retrieve a list of categories with their associated subcategory count.
Response:
```
[
  {
    "name": "Category Name",
    "subCategoryCount": 2
  },
]
```

- POST /categories

-Description: Create a new category.
-Request Body:
```
{
  "name": "New Category"
}
```
PUT /categories/

- Description: Update an existing category by ID.
- Request Body:
```
{
  "name": "Updated Category"
}
```

- DELETE /categories/

- Description: Delete a category by ID.
- Subcategories
- POST /subcategories

- Description: Create a new subcategory.
- Request Body:
```
{
  "name": "New Subcategory",
  "categoryId": 1 // ID of the associated category
}
```
- PUT /subcategories/

- Description: Update an existing subcategory by ID.
-Request Body:
```
{
  "name": "Updated Subcategory",
  "categoryId": 1
}
```
- DELETE /subcategories/

- Description: Delete a subcategory by ID.