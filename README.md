# Book Management System API


## Project Title
   Book Management System API

## Project Description
   This project is a RESTful API server that allows authenticated users to manage a collection of books. The API supports CRUD (Create, Read, Update, Delete) operations on books, search functionality by book        title or author, and user authentication via registration and login. It is built using Node.js, Express, MongoDB, and JWT tokens.

## Table of Contents
1. [Project Title](#project-title)
2. [Project Description](#project-description)
3. [Table of Contents](#table-of-contents)
4. [How to Install and Run the Project](#how-to-install-and-run-the-project)
5. [How to Use the Project](#how-to-use-the-project)
6. [API Documentation](#api-documentation)


## How to Install and Run the Project
1. **Clone the repository:** 
  git clone https://github.com/yourusername/BookManagementSystem.git
  cd BookManagementSystem

## Install the dependencies:
  npm install

## Set up environment variables:
  Create a .env file in the root directory and add the following environment variables:<br>
  MONGO_URI=your_mongodb_uri <br>
  DB=your_database_name <br>
  JWT_SECRET=your_jwt_secret

## Run the project:
   npm start

## How to Use the Project
   Register a new user:<br>
   &nbsp;&nbsp;Send a POST request to /api/users/register with the following JSON body:
   <br>
     &nbsp;&nbsp;{ <br>
     &nbsp;&nbsp;"username": "your_username", <br>
      &nbsp;&nbsp;"password": "your_password", <br>
      &nbsp;&nbsp;"email": "your_email" <br>
     &nbsp;&nbsp;} <br>

   **Login as an existing user:** <br>
      &nbsp;&nbsp;Send a POST request to /api/users/login with the following JSON body: <br>
    { <br>
      &nbsp;&nbsp;"username": "your_username", <br>
      &nbsp;&nbsp;"password": "your_password" <br>
    } <br>
   This will return a JWT token to be used for authenticated requests. <br>

  Authenticated Requests: <br>
   &nbsp;&nbsp;Include the JWT token in the Authorization header of your requests, prefixed with Bearer . <br>

## API Documentation
 ## User Authentication <br>
   Register <br>
      Endpoint: /api/users/register<br>
      Method: POST<br>
      Request Body: <br>
      { <br>
        "username": "string", <br>
        "password": "string", <br>
        "email": "string" <br>
      }
      <br>
      Response: <br>
      { <br>
        "message": "User registered successfully", <br>
        "token": "JWT token" <br>
      }  <br>

   Login  <br>
      Endpoint: /api/users/login<br>
      Method: POST<br>
      Request Body:<br>
      { <br>
        "username": "string", <br>
        "password": "string" <br>
      } <br>
      Response: <br>
      { <br>
        "message": "Login successfully", <br>
        "token": "JWT token" <br>
      } <br>

## Books CRUD Operations (Secured with JWT)
   Create <br>
      Endpoint: /api/books <br>
      Method: POST <br>
      Request Headers: <br>
      Authorization: Bearer JWT token <br>
      Request Body: <br>
      { <br>
        "Title": "string", <br>
        "Author": "string", <br>
        "Genre": "string", <br>
        "PublishedYear": "number", <br>
        "Requirements": "string" <br>
      } <br>
      Response: <br>
      { <br>
        "message": "Book created successfully", <br>
        "book": { ... } <br>
      } <br>

   Read <br>
      Get all books <br>
      <br>
      Endpoint: /api/books<br>
      Method: GET<br>
      Request Headers:<br>
      Authorization: Bearer JWT token
      Response:
      <br>
      { <br>
        "books": [ ... ] <br>
      } <br>
   
   Get a book by ID <br>
      Endpoint: /api/books/:id<br>
      Method: GET<br>
      Request Headers: <br>
      Authorization: Bearer JWT token <br>
      Response:
      <br>
      { <br>
        "book": { ... } <br>
      } <br>
      
   Search books by title or author <br>
    <br>
      Endpoint: /api/books/search<br>
      Method: GET<br>
      Request Headers:<br>
      Authorization: Bearer JWT token <br>
      Query Parameters:
      <br>
      query: searchTerm<br>
      Response: 
      <br>
      { <br>
        "books": [ ... ] <br>
      } <br>
   
   Update <br>
      Endpoint: /api/books/:id<br>
      Method: PUT<br>
      Request Headers:
      <br>
      Authorization: Bearer JWT token <br>
      Request Body: <br>
      { <br>
        "Title": "string", <br>
        "Author": "string", <br>
        "Genre": "string", <br>
        "PublishedYear": "number", <br>
        "Requirements": "string" <br>
      } <br>
      Response: <br>
      { <br>
        "message": "Book updated successfully", <br>
        "book": { ... } <br>
      } <br>
   
   Delete <br>
      Endpoint: /api/books/:id <br>
      Method: DELETE <br>
      Request Headers: <br>
      Authorization: Bearer JWT token <br>
      Response: <br>
      { <br>
        "message": "Book deleted successfully" <br>
      } <br>
