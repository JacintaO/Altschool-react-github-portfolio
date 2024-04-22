## React + Vite - A Web App using GitHub API to fetch repositories

[View Live](#)

This is a React application that fetches a user's GitHub repositories, displays them with pagination and search functionality, and allows navigation to a detailed view of each individual repository.

**Features:**
-   Lists all repositories for a specified user.
-   Implements pagination to navigate through a large number of repositories (set at 3 per page).
-   Provides a search bar to filter repositories by name.
-   Clicking on a repository in the list takes you to a dedicated page showing details of that specific repository.
-   Error handling with a generic error boundary component.

**Technologies Used:**
-   React: JavaScript library for building user interfaces.
-   React Router DOM: Routing library for navigation within the React application.
-   Tailwind CSS (optional): Utility-first CSS framework for rapid styling.
-   Vite (optional): Build tool for modern JavaScript projects.
-   pnpm (optional): Package manager for managing dependencies.

**Setup Instructions:**

1.  **Prerequisites:**
    -   Node.js and pnpm installed on your system.
    -   A GitHub account.
2.  **Clone the Repository:**
Bash
```
git clone https://github.com/JacintaO/Altschool-react-github-portfolio.git
```

3.  **Install Dependencies:**
Bash
```
pnpm install # Assuming you're using pnpm 
# OR 
npm install # If using npm
```

4.  **Start the Development Server:**
Bash
```
pnpm run ev  # Assuming you're using pnpm
# OR
npm run dev  # If using npm
```

This will start the development server, typically accessible at `http://localhost:5173/` in your browser.

**Usage:**
The application fetches repositories for a user named (Mine by default). You can modify the fetching logic to accept a username as a parameter if desired.

-   The home page displays the list of repositories with pagination and search functionality.
-   Clicking on a repository name navigates you to a page displaying details of that specific repository.

**Error Handling:**
The application includes an error boundary component that catches errors and displays a generic error message to the user.

**Further Development:**
-   Implement additional filtering options beyond name search.
-   Integrate error handling for specific scenarios (e.g., failed API requests).
-   Add styling and visual enhancements to the application.
-   Explore user authentication to allow fetching repositories for the currently logged-in user.
