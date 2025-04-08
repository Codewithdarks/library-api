# Library API

A RESTful API for managing a library's book collection, built with Node.js, Express.js, and MongoDB.

## upate in package.json
I have updated "Scripts" in package.json where we added `start` and `seed` command

## Installation and Setup

### Prerequisites
- **Node.js**: v14 or higher
- **MongoDB**: Local instance or cloud service (e.g., MongoDB Atlas)
- **npm**: Node Package Manager

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Codewithdarks/library-api.git
   cd library-api

## Install Dependencies
npm install

## Set Up Environment Variables
PORT=3000
MONGODB_URI=mongodb://localhost:27017/library
JWT_SECRET=your-secret-key-here

## Start MongoDB
mongod

## Seed the Database (Optional)
npm run seed

## Start the Server
npm start
