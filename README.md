# Todo App

A simple and intuitive full-stack Todo application built with Next.js, React, and TailwindCSS. This app allows users to manage their tasks efficiently by adding, updating, and deleting todos.

## Features

- **Add Todos**: Quickly add new tasks to your list.
- **Mark as Complete**: Toggle the completion status of tasks.
- **Delete Todos**: Remove tasks that are no longer needed.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, Next.js, TailwindCSS
- **Backend**: Next.js API routes
- **Icons**: React Icons
- **Database**: Prisma (if applicable)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo_app.git
   cd todo_app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## API Endpoints

- **GET /api/todo**: Fetch all todos.
- **POST /api/todo**: Add a new todo. Requires a JSON body with a `title` field.
- **PATCH /api/todo/:id**: Update the completion status of a todo.
- **DELETE /api/todo/:id**: Delete a todo by its ID.

## Usage

1. Enter a task in the input field and press the "Add" button or hit `Enter` to add it to the list.
2. Use the checkbox to mark tasks as complete or incomplete.
3. Click the trash icon to delete a task.

## Folder Structure

```
todo_app/
├── src/
│   ├── app/
│   │   ├── page.tsx       # Main page of the app
│   │   ├── api/
│   │   │   ├── todo/      # API routes for managing todos
│   │   │   │   ├── [id]/route.ts
│   │   │   │   ├── route.ts
├── .next/                 # Next.js build output
├── public/                # Static assets
├── package.json           # Project dependencies and scripts
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint to check for code quality.

## Deployment

The app can be deployed on platforms like [Vercel](https://vercel.com/) for seamless hosting. Follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Icons](https://react-icons.github.io/react-icons/)
- [TailwindCSS](https://tailwindcss.com/)

---
Happy Coding!
