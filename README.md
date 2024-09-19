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

- Get All Categories

- GET /categories: Returns all categories.
- Description: Retrieves a list of all categories.
```
[
    {
        "id": 2,
        "name": "Books Category",
        "createdAt": "2024-09-19T03:22:48.000Z",
        "updatedAt": "2024-09-19T03:37:12.000Z",
        "subCategories": [
            {
                "id": 10,
                "name": "NextJS Book",
                "categoryId": 2,
                "createdAt": "2024-09-19T03:36:12.000Z",
                "updatedAt": "2024-09-19T03:36:12.000Z",
                "CategoryId": 2
            }
        ]
    }
]

```
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
- Get All Subcategories
- Route: /subcategories

- Description: Retrieves a list of all subcategories, optionally with their associated categories.
- GET /subcategories: Returns all subcategories, optionally including associated category data.
```
[
    {
        "id": 10,
        "name": "Nexts and NestJs",
        "categoryId": 2,
        "createdAt": "2024-09-19T03:36:12.000Z",
        "updatedAt": "2024-09-19T03:38:47.000Z",
        "CategoryId": 2,
        "category": {
            "id": 2,
            "name": "Books Category",
            "createdAt": "2024-09-19T03:22:48.000Z",
            "updatedAt": "2024-09-19T03:37:12.000Z"
        }
    },
    {
        "id": 12,
        "name": "Bootsstap",
        "categoryId": 2,
        "createdAt": "2024-09-19T03:54:46.000Z",
        "updatedAt": "2024-09-19T03:54:46.000Z",
        "CategoryId": 2,
        "category": {
            "id": 2,
            "name": "Books Category",
            "createdAt": "2024-09-19T03:22:48.000Z",
            "updatedAt": "2024-09-19T03:37:12.000Z"
        }
    }
]

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