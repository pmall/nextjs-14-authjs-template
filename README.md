# Next.js 14 Authentication Template with Auth.js

This repository is a template for setting up authentication with Auth.js in a Next.js 14 project using the app router and server actions.

### Key Features

- **Directory structure**: All authentication-related files are located in the `/auth` directory.
- **Authentication methods**:
  - Magic link via email
  - OAuth (Google and GitHub)
  - Additional OAuth providers can be added by modifying the `/auth/index.ts` file.
- **Custom URL endpoints**: You can configure app-specific URL endpoints in `/auth/config.ts`.
- **Database adapter**: The `/auth/config.ts` file must export an Auth.js database adapter (in this template, we use Drizzle ORM with PostgreSQL).

### Email Authentication

Please note that the email sending functionality needs to be implemented according to your setup. In this template, the login link is printed in the console (see `/auth/index.ts`). You can replace this with your preferred email delivery method.

### Components

Default components are provided in the `/auth/components` directory. The template uses **Tailwind CSS**, so if you plan to use these components, remember to include `"./auth/components/*.tsx"` in the `content` array of your `/tailwind.config.ts` file.
