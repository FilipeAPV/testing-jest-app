# Continuous Integration/Continuous Delivery (CI/CD) Pipeline Setup for Automated Testing

## Task Description

To automate quality assurance processes, I designed a Continuous Integration/Continuous Delivery (CI/CD) pipeline. The pipeline triggers on developer actions, primarily upon a push request, which initiates both Unit and Integration Testing. This approach ensures that any code modifications are verified immediately, reducing the chance of introducing bugs into the codebase.

After these tests pass, the pipeline proceeds to deploy the changes automatically. I had initially planned to implement automated End-to-End (E2E) Testing to run post-deployment, allowing for more comprehensive QA by testing the application from the user’s perspective in a live environment. However, I encountered a limitation: Vercel’s webhook functionality, essential for detecting deployment completion and obtaining the deployment URL for feature branches, is restricted to paid users only. This limitation prevented the automation of E2E Testing in the deployment phase.

## CI/CD Workflow

[add img cicd_1.png]
