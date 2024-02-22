# React---7
React Dashboard Application
---------------------------

This is a React dashboard application for managing user and book details. It allows users to perform CRUD (Create, Read, Update, Delete) operations on both users and books. The application is built using React, axios for API requests, react-router-dom for routing, and react-toastify for displaying toast notifications.

### Features

*   Add, edit, and delete user details
*   Add, edit, and delete book details
*   Navigation between different sections using a sidebar
*   Form validation for adding and editing user and book details
*   Display of loading spinner while data is being fetched

### Components

### 1\. Dashboard

*   **Functionality**: The Dashboard component serves as the main view of the application where users can see details of both users and books.
*   **Features**:
    *   Displays a table of user details including author name, title, ISBN, publication date, etc.
    *   Provides options to edit or delete each user's details.
    *   Displays a similar table for book details.
*   **Dependencies**: Utilizes Axios for making HTTP requests to fetch user and book data from the server.
*   **Integration**: Integrates with React Router DOM for navigation between different sections of the application.
*   **Styling**: Uses custom CSS classes for styling the tables and buttons.

### 2\. Add

*   **Functionality**: The Add component allows users to add new user and book details to the database.
*   **Features**:
    *   Presents a form with input fields for entering user and book details such as author name, title, ISBN, publication date, etc.
    *   Performs form validation to ensure that required fields are filled and data is in the correct format.
    *   Submits the form data to the server using Axios upon successful validation.
*   **Dependencies**: Depends on React Router DOM for navigation and Axios for making POST requests to the server.
*   **Integration**: Utilizes Formik for form management and validation, integrating with Yup for defining validation schemas.
*   **Styling**: Applies basic form styling using Bootstrap CSS classes.

### 3\. Edit

*   **Functionality**: The Edit component enables users to modify existing user and book details stored in the database.
*   **Features**:
    *   Fetches the details of the selected user/book from the server upon component initialization.
    *   Pre-populates the edit form with the fetched data for editing.
    *   Allows users to update the user/book details and submit the changes to the server.
*   **Dependencies**: Relies on Axios for making PUT requests to update data and React Router DOM for navigation.
*   **Integration**: Uses Formik for form management and validation, integrating with Yup for defining validation schemas.
*   **Styling**: Similar to the Add component, it applies basic form styling using Bootstrap CSS classes.

### 4\. Sidebar

*   **Functionality**: The Sidebar component provides navigation links for users to switch between different sections of the application.
*   **Features**:
    *   Contains links to the Dashboard, Add, and Edit components.
    *   Enhances user experience by providing easy access to different functionalities.
*   **Dependencies**: None, as it primarily consists of React Router DOM `<Link>` components.
*   **Integration**: Integrated with React Router DOM to ensure smooth navigation between different routes.
*   **Styling**: Uses Bootstrap CSS classes for basic styling of the sidebar and navigation links.

### 5\. Loading

*   **Functionality**: The Loading component displays a spinner animation to indicate to users that data is being fetched or processed.
*   **Features**:
    *   Appears when the application is loading data from the server.
    *   Provides visual feedback to users to indicate ongoing background processes.
*   **Dependencies**: None, as it's a simple React component without external dependencies.
*   **Integration**: Typically rendered conditionally based on loading states in other components.
*   **Styling**: Uses Bootstrap spinner classes to create the loading animation.

These components work together to create a cohesive and functional dashboard application for managing user and book details. Each component is responsible for a specific aspect of the application's functionality, contributing to an intuitive user experience.
    

### Setup Instructions

1.  Clone the repository to your local machine.
2.  Navigate to the project directory.
3.  Install dependencies using `npm install`.
4.  Start the development server using `npm start`.
5.  Access the application in your web browser at `http://localhost:3000`.

### Technologies Used

*   React.js
*   Axios
*   React Router DOM
*   React Toastify

### Usage

1.  Upon starting the application, you will be directed to the dashboard where you can view user and book details.
2.  Use the navigation sidebar to add new users/books, edit existing ones, or navigate to other sections.
3.  To add a new user/book, click on the "Add User" or "Add Book" link in the sidebar and fill out the form.
4.  To edit an existing user/book, click on the "Edit" button next to the user/book you want to edit and make the necessary changes in the form.
5.  To delete a user/book, click on the "Delete" button next to the user/book you want to delete.
