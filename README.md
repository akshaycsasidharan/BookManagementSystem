Book Management System API
Project Title
Book Management System API

Project Description
This project is a RESTful API server that allows authenticated users to manage a collection of books. The API supports CRUD (Create, Read, Update, Delete) operations on books, search functionality by book title or author, and user authentication via registration and login. It is built using Node.js, Express, MongoDB, and JWT tokens.

Table of Contents
 1.Project Title
 2.Project Description
 3.Table of Contents
 4.How to Install and Run the Project
 5.How to Use the Project
 6.API Documentation

How to Install and Run the Project
Clone the repository:
git clone https://github.com/yourusername/BookManagementSystem.git
cd BookManagementSystem

Install the dependencies:
npm install

Set up environment variables:
Create a .env file in the root directory and add the following environment variables:<br>
MONGO_URI=your_mongodb_uri<br>
JWT_SECRET=your_jwt_secret<br>

Run the project:
npm start

How to Use the Project
Register a new user:
Send a POST request to /api/users/register with the following JSON body:
<br>
{
  "username": "your_username",
  "password": "your_password",
  "email": "your_email"
}

Login as an existing user:
Send a POST request to /api/users/login with the following JSON body:
<br>
{
  "username": "your_username",
  "password": "your_password"
}
This will return a JWT token to be used for authenticated requests.

Authenticated Requests:
Include the JWT token in the Authorization header of your requests, prefixed with Bearer .

API Documentation
User Authentication
Register

Endpoint: /api/users/register<br>
Method: POST<br>
Request Body:
<br>
{
  "username": "string",
  "password": "string",
  "email": "string"
}
Response:
<br>
{
  "message": "User registered successfully",
  "token": "JWT token"
}
Login

Endpoint: /api/users/login<br>
Method: POST<br>
Request Body:<br>

{
  "username": "string",
  "password": "string"
}
Response:
<br>
{
  "message": "Login successfully",
  "token": "JWT token"
}
Books CRUD Operations (Secured with JWT)
Create

Endpoint: /api/books
Method: POST
Request Headers:
makefile
Copy code
Authorization: Bearer JWT token
Request Body:
<br>
{
  "Title": "string",
  "Author": "string",
  "Genre": "string",
  "PublishedYear": "number",
  "Requirements": "string"
}
Response:
<br>
{
  "message": "Book created successfully",
  "book": { ... }
}
Read

Get all books
<br>
Endpoint: /api/books<br>
Method: GET<br>
Request Headers:<br>
Authorization: Bearer JWT token
Response:
<br>
{
  "books": [ ... ]
}
Get a book by ID

Endpoint: /api/books/:id<br>
Method: GET<br>
Request Headers:
<br>
Authorization: Bearer JWT token
Response:
<br>
{
  "book": { ... }
}
Search books by title or author

Endpoint: /api/books/search<br>
Method: GET<br>
Request Headers:<br>

Authorization: Bearer JWT token
Query Parameters:
<br>
query: searchTerm<br>
Response:
<br>
{
  "books": [ ... ]
}
Update

Endpoint: /api/books/:id<br>
Method: PUT<br>
Request Headers:
<br>
Authorization: Bearer JWT token
Request Body:
<br>
{
  "Title": "string",
  "Author": "string",
  "Genre": "string",
  "PublishedYear": "number",
  "Requirements": "string"
}
Response:
<br>
{
  "message": "Book updated successfully",
  "book": { ... }
}
Delete

Endpoint: /api/books/:id
Method: DELETE
Request Headers:
<br>
Authorization: Bearer JWT token
Response:
<br>
{
  "message": "Book deleted successfully"
}
