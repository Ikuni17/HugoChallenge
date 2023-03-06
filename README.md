# Hugo Full Stack Challenge

This project was built with

Frontend: [Create React App](https://github.com/facebook/create-react-app)
Backend: [NestJS TS Starter](https://github.com/nestjs/typescript-starter)
Database: [sqlite](https://sqlite.org/index.html)

## Running the project in production mode

The easiest way to start the project is with [Docker Compose](https://docs.docker.com/compose/install/). From the main directory run:

```bash
$ docker-compose up
```

This will build containers of both the frontend and backend and then start them locally. Then open [http://localhost:5000](http://localhost:5000) in your browser to interact with the application.

## Running the project in development mode
The `frontend` and `backend` directories each contain a `README.md` which describes running the project locally for development without Docker.

## Future Improvements
1. Proper monorepo setup to allow for sharing code, types, and packages between the frontend and backend.
2. Improved error handling around Promises in the frontend.
3. Improved form UI/UX with loading states, success/failure notifications, and backend validation messages.