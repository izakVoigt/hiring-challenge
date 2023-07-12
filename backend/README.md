# Backend API

This repository contains a ticket API implemented in Node.js using Express.js, MongoDB, and Mongoose. The API allows you to manage tickets by providing endpoints for creating, updating, and retrieving ticket information. The application can be run locally either with or without Docker.

## Usage

### Running without Docker

To run the application without Docker, follow these steps:

- 1. Install all project dependencies by executing the following command:

```
npm install
```

- 2. Create a '.env' file in the root directory with the following attributes:

```
API_PORT=number
MONGODB_URI=string
```

For example:

```
API_PORT=3000
MONGODB_URI=mongodb://localhost:27017
```

- 3. Start your MongoDB server.

- 4. Launch the application using the following command:

```
npm run dev
```

### Running with Docker

To run the application with Docker, follow these steps:

- 1. Install all project dependencies by executing the following command:

```
npm install
```

- 2. Create a '.env' file in the root directory with the following attributes:

```
API_PORT=number
MONGODB_URI=string
```

For example:

```
API_PORT=4000
MONGODB_URI=mongodb://database:27017
```

Note: When running the application in Docker, use the service name instead of 'localhost' in the MONGODB_URI variable to enable communication between containers within the same network.

- 3. Run the following command to start the application and the database in Docker:

```
npm run dev:docker:up
```

This command will create the database container and the project container within the same network, allowing them to communicate with each other.

## Routes

The API provides the following routes:

#### GET /tickets

This endpoint retrieves a list of tickets sorted by deadline in descending order.

##### Return (200):

```
{
  "list": [
    {
      __v: number;
      _id: string;
      createdAt: date string;
      updatedAt: date string;
      client: string;
      deadline: date string;
      issue: string;
      status: string;
    }
  ]
}
```

#### POST /tickets

This endpoint creates a new ticket.

##### Request body:

```
{
  "client": string;
  "deadline": date string;
  "issue": string;
}
```

##### Return (201):

```
{
  "ticket": {
    __v: number;
    _id: string;
    createdAt: date string;
    updatedAt: date string;
    client: string;
    deadline: date string;
    issue: string;
    status: string;
  }
}
```

#### PUT /tickets/:id

This endpoint updates a ticket based on its ID.

##### Request parameters:

```
id: string;
```

##### Request body:

```
{
  "client"?: string;
  "deadline"?: date string;
  "issue"?: string;
  "status"?: string;
}
```

##### Return (200):

```
{
  "ticket": {
    __v: number;
    _id: string;
    createdAt: date string;
    updatedAt: date string;
    client: string;
    deadline: date string;
    issue: string;
    status: string;
  }
}
```

##### Return (404):

```
{
  "message": "Ticket not found"
}
```

## Tests

To run the application tests, follow these steps:

- 1. Install all project dependencies by executing the following command:

```
npm install
```

- 2. Execute the following command:

```
npm run test
```

## Details

Here are some additional details about the API:

- 1. Design pattern used: MVC (Model-View-Controller).

- 2. Variable loading and validation: The application validates environment variables and loads them into cache to reduce response time.

- 3. CORS usage: Cross-Origin Resource Sharing (CORS) is implemented to define allowed methods and origins for the API.

- 4. Helmet usage: Helmet is used to set security headers for the application.

- 5. Body validation middleware: A middleware is implemented to validate the request body against a predefined schema before interacting with the database, improving response time.

- 6. Not found middleware: A middleware filters non-existing routes and returns a 404 error.

- 7. Schema validation: Request bodies are validated against predefined schemas to ensure data integrity.

- 8. The ticket module are thoroughly tested to ensure functionality and reliability.
