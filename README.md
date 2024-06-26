Wilson's Book Store Backend API - README
This is the backend API for Wilson's Book Store, an online bookstore application.

Tech Stack:

Node.js
Express.js
Mongoose
MongoDB
Project Description:

This API provides functionalities for managing books and authors in Wilson's Book Store. It allows users (through the frontend application) to:

Browse all books and authors.
Search for books by title, author, or description.
View details of individual books and authors.
(Potentially - functionality not implemented yet based on provided data) Add, edit, and delete books and authors (requires authentication and authorization).
Database:

The application uses MongoDB to store data. The current schema includes:

Authors:
authorName: (String) Name of the author.
image: (String) URL of the author's image.
details: (String) Optional description about the author.
Books:
bookName: (String) Title of the book.
bookAuthor: (String) Author's name.
bookImage: (String) URL of the book cover image.
authorId: (ObjectId) Reference to the author's document in the Authors collection.
description: (String) Description of the book.
price: (Number) Price of the book.

API Endpoints:

GET /books - Get a list of all books.
GET /books/:bookId - Get details of a specific book by its ID.
GET /authors - Get a list of all authors.
GET /authors/:authorId - Get details of a specific author by their ID.
