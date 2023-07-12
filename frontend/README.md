# Frontend app

This repository contains a ticket management React.js app implemented using styled-components and Material-UI. The app allows you to create, view, and manage tickets. You can create new tickets, generate random tickets, and view the existing tickets sorted by deadline in descending order. The application can be run locally either with or without Docker.

## Usage

### Running without Docker

To run the application without Docker, follow these steps:

- 1. Install all project dependencies by executing the following command:

```
npm install
```

- 2. Create a '.env' file in the root directory with the following attributes:

```
REACT_APP_API_BASE_URL=string
```

For example:

```
REACT_APP_API_BASE_URL=http://localhost:4000
```

- 3. Start the backend application.

- 4. Launch the application using the following command:

```
npm start
```

### Running with Docker

To run the application with Docker, follow these steps:

- 1. Install all project dependencies by executing the following command:

```
npm install
```

- 2. Create a '.env' file in the root directory with the following attributes:

```
REACT_APP_API_BASE_URL=string
```

For example:

```
REACT_APP_API_BASE_URL=http://localhost:4000
```

- 3. Run the following command to start the application and the database in Docker:

```
npm run dev:docker:up
```

This command will create the project container.

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

Here are some additional details about the app:

- 1. The application has a global style defined, allowing for the implementation of a theme context in the future.

- 2. When creating a new ticket, a Material-UI modal is displayed to enhance the user experience.

- 3. Each time a new ticket is created, it is added to the context and the tickets are sorted by deadline in descending order.

- 4. The application is divided into small components, which are then combined to create compound components.

- 5. The application contains a context that receives the tickets from the API and stores them.

- 6. Debounce functionality is used when creating a new ticket to optimize performance and prevent excessive API calls.

- 7. All components are thoroughly tested to ensure functionality and reliability.
