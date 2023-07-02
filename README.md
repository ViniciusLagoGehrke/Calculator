# Calculator

![Desktop Preview](desktop-preview.jpg)
## Description

This is a basic calculator application that performs basic arithmetic operations (addition, subtraction, multiplication, and division).

## Features:

### 1. User Interface

- [x] A simple and intuitive user interface for the calculator including:
  - [x] Numbers (0-9) buttons
  - [x] Operators (+, -,  [ ], /) buttons
  - [x] Dot button to add decimals
  - [x] Change signal button to toggle between positive and negative values
  - [x] Backspace button to delete the last digit
  - [x] Clear button to reset to original
  - [x] Equal button to calculate the result
  - [x] Display a text field or area to show the entered numbers and the calculated result

### 2. Basic Arithmetic Operations
- [x] Perform addition, subtraction, multiplication, and division of two numbers
- [x] When the equal (=) button is pressed, the application calculates and display the result
- [x] When an operator button is pressed and there're already two number, the application display the result and sets the new operator

### 3. Error Handling
- [x] Handles basic input validation and error scenarios (e.g., division by zero, invalid input format)
- [x] Displays appropriate error messages or notifications when necessary

## Technical Requirements:
- [ ] Use of Kotlin with Spring Boot Framework and Angular
- [x] Use of other programming languages or framework (e.g., JavaScript, Python, Java, C#, etc.)
- [x] Next.js API to calculate all operations
- [x] An alternative server with Node.js and Express
- [x] Best practices in software engineering, including modular and well-organised code
- [x] Utilise appropriate data structures and algorithms to perform the arithmetic operations
- [x] Focus on functionality

This project uses many tools like:

- [ReactJS](https://reactjs.org)
- [NextJS](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Docker](https://www.docker.com/)

## Getting Started

For this project I used Node.js v18.15.0.
Alternatively you can run a container with the project in development mode using [Docker](https://docs.docker.com/)

### Install

Clone this project

```bash
git clone https://github.com/ViniciusLagoGehrke/Calculator.git
```

Access the project directory.

```bash
cd calculator/client
```

#### Running on your machine

Make sure you are using the same Node version.

```bash
node -v
```

Install dependencies. (I suggest using PNPM)

```bash
pnpm install
```

Serve with hot reload at <http://localhost:3000>.

```bash
pnpm run dev
```

#### Using Docker

Build a image from the dockerfile

```bash
docker build -t next-image .
```

Check if the image was created (optional)

```bash
docker images
```

Create a container from the image

```bash
docker run -it --name next-calc -p 8000:8000 --mount type=bind,source=$(pwd),target=/srv/app next-image
```

Check if the container is running (optional)

```bash
docker ps
```

Access the command line inside the container

```bash
docker exec -it next-calc sh
```

Install the dependencies and run the app

```bash
yarn && yarn dev
```

Open your browser at *http://localhost:8000/*
You can edit the app and it will update on the browser

Whenever you want to stop the app just stop the container

```bash
docker stop next-calc
```

### Lint

```bash
pnpm run lint
```

### Typecheck

```bash
pnpm run typecheck
```

### Build

```bash
pnpm run build
```

### Test

```bash
pnpm run test
```

## Deployment

I deployed this project in Vercel where you can Log in with GitHub, GitLab, Bitbucket, or email to deploy websites for free with zero configuration, automatic SSL, and global CDN.

You can check it live here: [Calculator](https://calculator-green-nine.vercel.app/)

[OnPortfolio](https://front-end-portfolio.vercel.app/)
