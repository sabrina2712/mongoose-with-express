# Mongoose with Express

## Getting started

Make your self familiar with the what exists already in this repository. You got:

- A `dev` script
- A task route, controller, model **keep this structure**

Take a look at app.js (middleware and router used)

## Task

### 1 User

- create a user model and all CRUD routes
- user should have:
  - email (required)
  - name
  - lastName
  - age
  - address:
    - street
    - number
    - city
    - zip

Try to use mongoose validations:

- age min > 18

### 2 Comments

- create a comments model and all CRUD routes
- comments should have:
  - body
  - title
  - time

## Extra

Read about mongoose relations comments should have users! 🔥
