# RESTful API for Blog Management

A modern, scalable RESTful API for blog management built with NestJS. This application provides endpoints for managing users, posts, comments, and authentication with JWT.

## 🚀 Technologies

### Core Framework
- **NestJS** - Progressive Node.js framework for building efficient and scalable server-side applications
- **TypeScript** - Typed superset of JavaScript

### Database & ORM
- **TypeORM** - Object-Relational Mapping library for TypeScript and JavaScript
- **MySQL 8.0** - Relational database management system
- **Docker** - Containerization platform for database deployment

### Authentication & Security
- **Passport.js** - Authentication middleware for Node.js
- **JWT (JSON Web Tokens)** - Token-based authentication
- **bcryptjs** - Password hashing library

### Validation & Transformation
- **class-validator** - Decorator-based validation library
- **class-transformer** - Transformation library for plain objects to class instances

### Testing
- **Jest** - JavaScript testing framework
- **Supertest** - HTTP assertion library for end-to-end testing
- **better-sqlite3** - In-memory SQLite database for testing

### Development Tools
- **ESLint** - Linting utility for JavaScript and TypeScript
- **Prettier** - Code formatter
- **GitHub Actions** - CI/CD pipeline for automated testing and building
- **Swagger/OpenAPI** - API documentation and interactive testing

### Additional Libraries
- **RxJS** - Reactive programming library
- **reflect-metadata** - Metadata reflection API

## 📋 Prerequisites

- Node.js (20.x or 22.x)
- npm or yarn
- Docker and Docker Compose
- MySQL 8.0 (via Docker)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/gmaxsoft/BlogRESTfulAPI.git
cd BlogRESTfulAPI
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
PORT=3000
NODE_ENV=development
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=blog_db
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d
CORS_ORIGIN=http://localhost:3000
```

## 🐳 Docker Setup

Start the MySQL database using Docker Compose:

```bash
docker-compose up -d
```

This will:
- Start MySQL 8.0 container
- Create a persistent volume for database data
- Expose MySQL on port 3306

To stop the database:
```bash
docker-compose down
```

## 🏃 Running the Application

### Development Mode
```bash
npm run start:dev
```

The application will be available at `http://localhost:3000`

### Production Mode
```bash
npm run build
npm run start:prod
```

### Database Seeding
To populate the database with sample data:
```bash
npm run seed
```

This will create:
- Up to 10 users
- Up to 50 posts
- Up to 40 comments

## 📚 API Documentation (Swagger)

The API documentation is available via Swagger UI when the application is running:

**Swagger UI**: `http://localhost:3000/api`

The Swagger documentation includes:
- Interactive API explorer
- Request/response schemas
- Authentication support (JWT Bearer token)
- Try-it-out functionality for all endpoints

To access protected endpoints:
1. First, register or login via `/auth/register` or `/auth/login`
2. Copy the JWT token from the response
3. Click the "Authorize" button in Swagger UI
4. Enter: `Bearer <your-token>` (or just `<your-token>`)
5. Click "Authorize" and "Close"
6. Now you can test protected endpoints

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### Watch Mode
```bash
npm run test:watch
```

### Test Coverage
```bash
npm run test:cov
```

### End-to-End Tests
```bash
npm run test:e2e
```

## 📁 Project Structure

```
src/
├── auth/              # Authentication module
│   ├── dto/          # Data Transfer Objects
│   ├── guards/       # JWT authentication guards
│   ├── strategies/   # Passport JWT strategy
│   └── *.spec.ts     # Unit tests
├── users/            # Users module
│   ├── dto/          # User DTOs
│   ├── entities/     # User entity
│   └── *.spec.ts     # Unit tests
├── posts/            # Posts module
│   ├── dto/          # Post DTOs
│   ├── entities/     # Post entity
│   └── *.spec.ts     # Unit tests
├── comments/         # Comments module
│   ├── dto/          # Comment DTOs
│   ├── entities/     # Comment entity
│   └── *.spec.ts     # Unit tests
├── common/           # Shared utilities
│   ├── decorators/   # Custom decorators (e.g., @Public)
│   ├── interceptors/ # Response transformation interceptor
│   └── middleware/   # Request logging middleware
├── database/         # Database utilities
│   └── seed.ts       # Database seeding script
└── main.ts           # Application entry point
```

## 🔐 API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user and get JWT token

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create a new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Posts
- `GET /posts` - Get all posts
- `GET /posts/:id` - Get post by ID
- `POST /posts` - Create a new post
- `PUT /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post

### Comments
- `GET /comments` - Get all comments
- `GET /comments/:id` - Get comment by ID
- `POST /comments` - Create a new comment
- `PUT /comments/:id` - Update comment
- `DELETE /comments/:id` - Delete comment

## 🛡️ Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- CORS configuration
- Request validation with DTOs
- Global authentication guard (with public route decorator)
- Request logging middleware

## 🔄 CI/CD

The project uses GitHub Actions for continuous integration:
- Automated linting
- Unit tests execution
- End-to-end tests
- Build verification

Workflow runs on:
- Push to `main` and `develop` branches
- Pull requests to `main` and `develop` branches

## 📝 Code Quality

- ESLint for code linting
- Prettier for code formatting
- TypeScript strict mode
- Unit tests for all modules
- E2E tests for API endpoints

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Maxsoft. Created as part of a blog management system project.
