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
 **Clone the repository:** 
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
- **Register a new user:**<br>
   &nbsp;&nbsp;Send a POST request to /api/users/register with the following JSON body:
   <br>
     &nbsp;&nbsp;{ <br>
     &nbsp;&nbsp;&nbsp;&nbsp;"username": "your_username", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;"password": "your_password", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;"email": "your_email" <br>
     &nbsp;&nbsp;} <br>

   - **Login as an existing user:** <br>
      &nbsp;&nbsp;Send a POST request to /api/users/login with the following JSON body: <br>
     &nbsp;&nbsp;{ <br>
      &nbsp;&nbsp;&nbsp;&nbsp;"username": "your_username", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;"password": "your_password" <br>
     &nbsp;&nbsp;} <br>
   &nbsp;&nbsp;This will return a JWT token to be used for authenticated requests. <br>

  Authenticated Requests: <br>
   &nbsp;&nbsp;Include the JWT token in the Authorization header of your requests, prefixed with Bearer . <br>

## API Documentation
 ## User Authentication <br>
   - **Register** <br>
     &nbsp;&nbsp;**Endpoint:** /api/users/register<br>
     &nbsp;&nbsp;**Method:** POST<br>
     &nbsp;&nbsp;**Request Body:** <br>
      &nbsp;&nbsp;{ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;"username": "string", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"password": "string", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"email": "string" <br>
      &nbsp;&nbsp;}
      <br>
      &nbsp;&nbsp;**Response:** <br>
     &nbsp;&nbsp; { <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"message": "User registered successfully", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"token": "JWT token" <br>
      &nbsp;&nbsp;}  <br>

   - **Login**  <br>
      &nbsp;&nbsp;**Endpoint:** /api/users/login<br>
      &nbsp;&nbsp;**Method:** POST<br>
      &nbsp;&nbsp;**Request Body:**<br>
      &nbsp;&nbsp;{ <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"username": "string", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"password": "string" <br>
      &nbsp;&nbsp;} <br>
      &nbsp;&nbsp;**Response:** <br>
      &nbsp;&nbsp;{ <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"message": "Login successfully", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"token": "JWT token" <br>
      &nbsp;&nbsp;} <br>

## Books CRUD Operations (Secured with JWT)
   - **Create** <br>
      &nbsp;&nbsp;**Endpoint:** /api/books <br>
      &nbsp;&nbsp;**Method:** POST <br>
     &nbsp;&nbsp;**Request Headers:** <br>
      &nbsp;&nbsp;**Authorization:** Bearer JWT token <br>
      &nbsp;&nbsp;**Request Body:** <br>
      &nbsp;&nbsp;{ <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"Title": "string", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"Author": "string", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"Genre": "string", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"PublishedYear": "number", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"Requirements": "string" <br>
      &nbsp;&nbsp;} <br>
      &nbsp;&nbsp;**Response:** <br>
     &nbsp;&nbsp; { <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"message": "Book created successfully", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"book": { ... } <br>
      &nbsp;&nbsp;} <br>

   - **Read** <br>
      &nbsp;&nbsp;**Get all books** <br>
      <br>
      &nbsp;&nbsp;**Endpoint:** /api/books<br>
      &nbsp;&nbsp;**Method:** GET<br>
      &nbsp;&nbsp;**Request Headers:**<br>
      &nbsp;&nbsp;**Authorization:** Bearer JWT token
      &nbsp;&nbsp;**Response:**
      <br>
      &nbsp;&nbsp;{ <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"books": [ ... ] <br>
      &nbsp;&nbsp;} <br>
   
   - **Get a book by ID** <br>
      &nbsp;&nbsp;**Endpoint:** /api/books/:id<br>
      &nbsp;&nbsp;**Method:** GET<br>
      &nbsp;&nbsp;**Request Headers:** <br>
      &nbsp;&nbsp;**Authorization:** Bearer JWT token <br>
      &nbsp;&nbsp;**Response:**
      <br>
      &nbsp;&nbsp;{ <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"book": { ... } <br>
      &nbsp;&nbsp;} <br>
      
   - **Search books by title or author** <br>
    <br>
      &nbsp;&nbsp;**Endpoint:** /api/books/search<br>
      &nbsp;&nbsp;**Method:** GET<br>
      &nbsp;&nbsp;**Request Headers:**<br>
      &nbsp;&nbsp;**Authorization:** Bearer JWT token <br>
      &nbsp;&nbsp;**Query Parameters:**
      <br>
      &nbsp;&nbsp;**query:** searchTerm<br>
      &nbsp;&nbsp;**Response:** 
      <br>
      &nbsp;&nbsp;{ <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"books": [ ... ] <br>
      &nbsp;&nbsp;} <br>
   
   - **Update** <br>
      &nbsp;&nbsp;**Endpoint:** /api/books/:id<br>
      &nbsp;&nbsp;**Method:** PUT<br>
      &nbsp;&nbsp;**Request Headers:**
      <br>
      &nbsp;&nbsp;**Authorization:** Bearer JWT token <br>
      &nbsp;&nbsp;**Request Body:** <br>
      &nbsp;&nbsp;{ <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"Title": "string", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"Author": "string", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"Genre": "string", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"PublishedYear": "number", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"Requirements": "string" <br>
      &nbsp;&nbsp;} <br>
      &nbsp;&nbsp;**Response:** <br>
      &nbsp;&nbsp;{ <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"message": "Book updated successfully", <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"book": { ... } <br>
      &nbsp;&nbsp;} <br>
   
   - **Delete** <br>
      &nbsp;&nbsp;**Endpoint:** /api/books/:id <br>
      &nbsp;&nbsp;**Method:** DELETE <br>
      &nbsp;&nbsp;**Request Headers:** <br>
      &nbsp;&nbsp;**Authorization:** Bearer JWT token <br>
      &nbsp;&nbsp;**Response:** <br>
      &nbsp;&nbsp;{ <br>
         &nbsp;&nbsp;&nbsp;&nbsp;"message": "Book deleted successfully" <br>
      &nbsp;&nbsp;} <br>
