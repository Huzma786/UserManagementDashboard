Objective
Develop a simple web application where users can view, add, edit, and delete user details from a mock backend API.


User Interface:
Display a list of users with details such as ID, First Name, Last Name, Email, and Department.
Provide buttons or links to "Add", "Edit", and "Delete" users.
A form to input details of a new user or edit details of an existing user.
Backend Interaction:
Use JSONPlaceholder, a free online REST API that you can use for demonstration and test purposes.
Specifically, use the '/users' endpoint to fetch and manipulate user data.


Functionality:
View: Display all users by fetching data from the '/users' endpoint.
Add: Allow adding a new user by posting to the '/users' endpoint. (Note: JSONPlaceholder won't actually add the user, but will simulate a successful response.)
Edit: Allow editing an existing user. This should involve fetching the current data for a user, allowing for edits, and then putting the updated data back via the API.
Delete: Allow users to be deleted, by sending a delete request to the API.
Error Handling:
Handle scenarios where the API request might fail - show an error message to the user in such cases.

Challenges Faced

1. Mock API Limitations:

The JSONPlaceholder API does not persist changes. Any added, edited, or deleted data is not saved. This required maintaining the local UI state separately to simulate real-time updates.



2. Dynamic Form Handling:

Managing the form logic for both "Add" and "Edit" operations within the same component was challenging. This was solved by pre-filling the form for "Edit" and resetting it for "Add."



3. Error Handling:

Implementing robust error handling for API requests was essential to provide a better user experience. Edge cases such as API downtime or invalid data required additional attention.



4. Limited Timeframe:

The tight timeline restricted the addition of advanced features such as pagination, responsive design, or comprehensive unit testing.

Improvements to Consider

If given more time, the following enhancements could be implemented:

1. Persistent Backend:

Replace JSONPlaceholder with a real backend (e.g., Node.js + Express + MongoDB) for actual data persistence.



2. Pagination:

Use server-side pagination by sending _page and _limit query parameters to the API.



3. Form Validation:

Add client-side validation for input fields using libraries like Formik or React Hook Form.
