
# Saf-T-Child

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [Git](https://git-scm.com/)

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

1. Clone the repository:
   ```
   git clone [repository URL]
   ```

2. Navigate to the project directory:
   ```
   cd [project directory]
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To run the application locally:

```
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Formatting with Prettier

For consistent code formatting, we use Prettier. It is recommended to install the Prettier extension in your code editor and set it as the default formatter.

### Setting up Prettier

1. Install Prettier globally:
   ```
   npm install --global prettier
   ```

2. In your editor settings, set Prettier as your default formatter.

3. Enable "Format On Save" to automatically format your code each time you save a file.

## Husky Pre-commit Hook

This project uses Husky to enforce code quality checks before commits. Husky is set up to run linters and other checks as a pre-commit hook.

### Using Husky

Husky is already configured in this project. To ensure it works properly, please do not bypass pre-commit hooks with commands like `git commit --no-verify`.

