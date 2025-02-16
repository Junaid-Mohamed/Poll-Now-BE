# Poll Now Backend

## Overview
This is a Node.js Express-based backend for a polling application. It allows users to create polls, vote on polls, and view poll results. Poll data is stored in MongoDB.

## Features
- Create a new poll with a question and multiple options.
- Vote on a poll.
- Fetch all polls with real-time vote counts.
- Submit multiple votes in a single API call.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Setup and Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Junaid-Mohamed/Poll-Now-BE.git
   cd polling-app/backend

2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create a `.env` file:**
   ```sh
   touch .env
   ```
   Add the following variables:
   ```env
   PORT=8080
   MONGO_URI=your-mongo-uri
   ```
4. **Start the server:**
   ```sh
   node index.js
   ```
   The app should now be running on `http://localhost:8080`.

## Databse Schema (MongoDB)

### The databse stores polls in the following format: 
`{
  "_id": "65fabcde1234567890123456",
  "question": "Which programming language is best for web development?",
  "options": [
    { "option": "JavaScript", "votes": 10 },
    { "option": "Python", "votes": 5 },
    { "option": "Java", "votes": 3 },
    { "option": "C#", "votes": 2 }
  ]
}`


## API Endpoints

### 1. Create poll
**POST** `/api/create`
```json
{
  "question": "Which programming language is best for web development?",
  "options": ["JavaScript", "Python", "Java", "C#"]
}

```
_Response:_
```json
{
  "_id": "65fabcde1234567890123456",
  "question": "Which programming language is best for web development?",
  "options": [
    { "option": "JavaScript", "votes": 0 },
    { "option": "Python", "votes": 0 },
    { "option": "Java", "votes": 0 },
    { "option": "C#", "votes": 0 }
  ]
}

```

### 2. Get all polls
**GET** `/api/polls`
_Response:_
```json
[
  {
    "_id": "65fabcde1234567890123456",
    "question": "Which programming language is best for web development?",
    "options": [
      { "option": "JavaScript", "votes": 10 },
      { "option": "Python", "votes": 5 },
      { "option": "Java", "votes": 3 },
      { "option": "C#", "votes": 2 }
    ]
  }
]
```

### 3. Submit the votes
**GET** `/api/votes`
```json
{
  "votes": {
    "65fabcde1234567890123456": 1,
    "65f987654321012345678901": 2
  }
}
```
_Response:_
```json
{
  "message": "Votes submitted successfully"
}
```

