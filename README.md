# Real Estate Marketplace Platform (REMP)
  REMP is a web-based application designed to bridge the gap between property buyers, sellers, and real estate agents. The platform provides a seamless and efficient way for sellers and agents to list properties, while buyers can easily browse and inquire about available listings. With a focus on user-friendly interaction and robust features, REMP offers comprehensive functionalities for property listing management, secure communication, transaction tracking, and real-time notifications.

## Key Features:
  1. User Authentication: Secure JWT-based login and registration for three user roles: Admin, Buyers, and Sellers/Agents. Password reset functionality via email.
  2. Property Listings: Sellers and agents can create, manage, and delete property listings, including details such as price, location, type, images, and availability status.
  3. Property Browsing & Inquiries: Buyers can search for properties by various criteria, view detailed listings, save favorites, and contact sellers or agents directly through the platform.
  4. Admin Dashboard: A comprehensive dashboard for managing user registrations, monitoring listings and transactions, generating reports, and moderating content.
  5. Notifications: Email and push notifications for property inquiries, transaction confirmations, price updates, and new listing alerts.
  6. Reviews & Ratings: A review system where buyers can rate and review sellers/agents based on their transaction experience, and sellers/agents can respond to feedback.
  7. Analytics & Reports: Detailed property and user statistics, with monthly reports for admins, sellers, and agents, to track platform activity and sales performance.

## Technologies Used:
  - Frontend: Angular 19, TypeScript, Angular Material, responsive user interface.
  - Backend: Laravel 10, PHP 8, using Eloquent ORM and RESTful API development.
  - Database: MySQL/PostgreSQL for reliable data management.
  - Authentication: JWT for secure user authentication with Laravel Sanctum.
  - Payment Integration: Stripe/PayPal (optional)

## Deployment & DevOps:
  - Version-controlled with Git and hosted on GitHub for easy collaboration and contribution.


<!-- 
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
-->