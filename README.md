

```markdown
# API Documentation

Welcome to the API documentation for [Your Project Name].



## Introduction

This API provides endpoints for managing users, organization posts, student posts, and student messages.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account and connection string

### Installation

1. Clone the repository:

   ```bash
   git clone [repository_url]
   cd [project_directory]
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB Atlas connection string in `src/app.js`.

4. Start the server:

   ```bash
   npm start
   ```

The server will be running at `http://localhost:3000`.

## Usage

### User Endpoints

#### Create User

- **Endpoint:** `POST /api/users`
- **Payload:** `{ "name": "John Doe", "phoneno": "123-456-7890" }`

#### Get All Users

- **Endpoint:** `GET /api/users`

#### Get User by ID

- **Endpoint:** `GET /api/users/:id`

#### Update User by ID

- **Endpoint:** `PUT /api/users/:id`
- **Payload:** `{ "name": "Updated Name", "phoneno": "987-654-3210" }`

#### Delete User by ID

- **Endpoint:** `DELETE /api/users/:id`

### Organization Post Endpoints

#### Create Organization Post

- **Endpoint:** `POST /api/orgposts`
- **Payload:** `{ "userName": "User123", "userRole": "Admin", "postImg": "https://example.com/image.jpg", "userProfileImg": "https://example.com/profile.jpg", "likesNo": 10, "commentNo": 5, "shareNo": 3, "dislikeNo": 2 }`

#### Get All Organization Posts

- **Endpoint:** `GET /api/orgposts`

#### Get Organization Post by ID

- **Endpoint:** `GET /api/orgposts/:id`

#### Update Organization Post by ID

- **Endpoint:** `PUT /api/orgposts/:id`
- **Payload:** `{ "likesNo": 15, "commentNo": 8 }`

#### Delete Organization Post by ID

- **Endpoint:** `DELETE /api/orgposts/:id`

### Student Post Endpoints

#### Create Student Post

- **Endpoint:** `POST /api/studentposts`
- **Payload:** `{ "userName": "Student456", "userRole": "Student", "userProfileImg": "https://example.com/student.jpg", "description": "This is a student post.", "likesNo": 5, "commentNo": 2, "shareNo": 1, "dislikeNo": 0 }`

#### Get All Student Posts

- **Endpoint:** `GET /api/studentposts`

#### Get Student Post by ID

- **Endpoint:** `GET /api/studentposts/:id`

#### Update Student Post by ID

- **Endpoint:** `PUT /api/studentposts/:id`
- **Payload:** `{ "description": "Updated student post." }`

#### Delete Student Post by ID

- **Endpoint:** `DELETE /api/studentposts/:id`

### Student Message Endpoints

#### Create Student Message

- **Endpoint:** `POST /api/studentmsgs`
- **Payload:** `{ "userName": "Student789", "userRole": "Student", "userProfileImg": "https://example.com/student789.jpg", "message": "Hello, everyone!" }`

#### Get All Student Messages

- **Endpoint:** `GET /api/studentmsgs`

#### Get Student Message by ID

- **Endpoint:** `GET /api/studentmsgs/:id`

#### Update Student Message by ID

- **Endpoint:** `PUT /api/studentmsgs/:id`
- **Payload:** `{ "message": "Updated message." }`

#### Delete Student Message by ID

- **Endpoint:** `DELETE /api/studentmsgs/:id`

## Examples

### Creating a User

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "phoneno": "123-456-7890"}' http://localhost:3000/api/users
```

### Getting All Organization Posts

```bash
curl http://localhost:3000/api/orgposts
```

### Updating a Student Post

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"description": "Updated description."}' http://localhost:3000/api/studentposts/1
```



Feel free to replace `[Your Project Name]` with the actual name of your project and customize the content as needed.
