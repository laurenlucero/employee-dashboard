# Employee Dashboard Web App

This is a simple web application that retrieves employee data from an API and displays it in a dashboard format.
This project is part of an interview exercise and is intended to showcase my ability to integrate API requests and display data in a table view.
The provided data and API endpoint are fictional and do not represent real-world data.

## Features

- Fetches employee data from an API and processes it to calculate HSA eligibility and maximum contributions.
- Displays the processed employee data in a table format.
- Provides basic CSS styling for improved visual presentation.

## Getting Started

1. Clone this repository to your local machine.
2. Open `index.html` in a web browser to view the employee dashboard.

## Usage

- The application will automatically fetch employee data and display it in the table format.
- The table columns include Name, Plan Type, Deductible, Age, HSA Eligible, and Max Contribution.

## Next steps

To make this app more production-ready, here are a few steps I would take to enhance its robustness, maintainability, and user experience:

Error Handling and User Feedback:
Implement comprehensive error handling throughout the application, such as handling network errors, API request failures, and unexpected data formats. Provide meaningful error messages to users, helping them understand what went wrong and how to potentially resolve the issue. Implement loading spinners or placeholders to improve user experience during data retrieval.

Data Validation and Sanitization:
Ensure that the data retrieved from the API is thoroughly validated and sanitized before being displayed. Validate the response's structure, check for missing fields, and verify the integrity of any data processed within the app.

Code Modularization and Structure:
Organize codebase into modular components or functions, adhering to best practices such as the separation of concerns. Consider using a frontend framework (e.g., React or Vue.js) for more structured and scalable development.

Security Measures:
Ensure that sensitive information (such as API keys) is securely managed. Consider using environment variables, configuration files, or backend services to manage such information securely.

Performance Optimization:
Evaluate the app's performance and identify potential bottlenecks. Optimize code execution, and minify CSS and JavaScript files to improve loading times.

Testing:
Develop a suite of automated tests to ensure that the app functions as expected. Test different scenarios, including valid and invalid inputs, edge cases, and various user interactions. This helps catch bugs and regressions early in the development process.

Accessibility (a11y):
Ensure the application is accessible to all users, including those with disabilities. I have implemented semantic HTML. I would also use appropriate ARIA attributes, and follow accessibility guidelines to make the app usable for everyone.

Deployment and CI/CD:
Set up a streamlined deployment process with continuous integration and continuous deployment pipelines. Automate the build, testing, and deployment processes to ensure that code changes are thoroughly tested and deployed to production with minimal manual intervention.

## License

This project is licensed under the [MIT License](LICENSE).
