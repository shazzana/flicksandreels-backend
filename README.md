# About this repository

This repository is the backend portion of a project called Flicks & Reels. The frontend repository can be found here: https://github.com/oceantrout/flicksandreels-frontend

# About this project

Our team intended for Flicks & Reels to be an app where discerning movie lovers can look through synopses of current top movies (without login access) and join a community of movie reviewers (with login access).

# About the backend

- Built using Mongoose (local database), MongoDB Atlas (online database) and Cyclic (database host), Express and Node.js, with data from https://imdb-api.com

## Controllers:
- auth-controller.js: Inputs for user sign-up, sign-in and sign-out
- review-controller.js: Inputs for CRUD operations of reviews
- title-controller.js: Inputs for CRUD operations of titles

## Database (db):
- conn.js: To establish connection to MongoDB Atlas

## Models;
- index.js: To establish the connection of all models to MongoDB
- review.js: Inputs for schema of reviews
- title.js: Inputs for schema of titles

## Routers:
- index.js: To manage all routes
- auth-router.js: To route sign-up, sign-in and sign-out operations
- review-router.js: To route review CRUD operations
- title-router.js: To route title CRUD operations

## Services:
- user-services.js: To connect app to Firebase for sign-up, sign-in and sign-out operations

# Completing the backend

## Running the files locally:
- .env variables needed: MONGO_URL (from connection string below), FIREBASE_API_KEY, PORT
- Once a cluster has been created on MongoDB Atlas, click on the 'Connect' button and choose 'Connect with the MongoDB shell' (ensure that you have MongoDB shell installed). This will provide you a connection string to type in your command line to enable you to add collections/documents to your database locally and automatically update it in MongoDB Atlas
- Local host will display the relevant information according to the routes stated (i.e. http://localhost:3000/review, http://localhost:3000/title)

## Hosting the database on cyclic.sh:
- Connect the backend repo to cyclic.sh to host the database from which the front end can make an API call
- This project's Cyclic links are as follows:
https://graceful-hoodie-deer.cyclic.app/title,
https://graceful-hoodie-deer.cyclic.app/review

## Future Directions
- Improved UI
- More efficient data management process

## Reflections from repo owner
I appreciate anyone who has taken the time to look through repo, which is a part of my course project. My teammate worked on the authentication portions and I worked on the rest, with a lot of help from my teammate and my instructor (and of course, Google). This project is a work in progress and I welcome any constructive criticisms from anyone. Thank you!



