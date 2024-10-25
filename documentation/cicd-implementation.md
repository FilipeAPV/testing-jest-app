# Continuous Integration/Continuous Delivery (CI/CD) Pipeline Setup for Automated Testing

## Task Description

To automate quality assurance processes, I designed a Continuous Integration/Continuous Delivery (CI/CD) pipeline. The pipeline triggers on developer actions, primarily upon a push request, which initiates both Unit and Integration Testing. This approach ensures that any code modifications are verified immediately, reducing the chance of introducing bugs into the codebase.

After these tests pass, the pipeline proceeds to deploy the changes automatically. I had initially planned to implement automated End-to-End (E2E) Testing to run post-deployment, allowing for more comprehensive QA by testing the application from the user’s perspective in a live environment. However, I encountered a limitation: Vercel’s webhook functionality, essential for detecting deployment completion and obtaining the deployment URL for feature branches, is restricted to paid users only. This limitation prevented the automation of E2E Testing in the deployment phase.

## CI/CD Workflow

[add img cicd_1.png]

## Workflow Demo

### Demo Description

1. **Developer Pushes Changes:**

   - The developer pushes updates to a branch in the repository.

2. **GitHub Actions Workflow:**

   - GitHub Actions detects the push request and initiates a CI/CD pipeline to ensure code quality and application functionality.

   1. **Unit Testing:**

      - Runs unit tests for both the React components and backend functions to validate that individual parts of the application are working correctly.

   2. **Integration Testing:**

      - Runs integration tests to ensure the interaction between various modules of the application, including connection to the database, work seamlessly.

   3. **Deployment Trigger:**
      - If all tests pass successfully, the pipeline triggers the deployment to Vercel, the hosting service.

3. **Vercel Deployment:**

   - Vercel pulls the latest version of the codebase from the repository and builds the application.
   - Once the build process is completed, Vercel automatically deploys the application to a live environment.

4. **Deployed Application:**

   - After deployment, the application becomes accessible via a provided URL.

   1. **Application Access:**

      - The user can access the application through the URL and interact with its features.

   2. **User Interaction:**

      - Upon interacting with the application, the front-end and back-end communicate with each other.

   3. **Database Verification:**
      - Data is stored in the connected database.

### Demo Visualization

[add img cicd_2.png]
