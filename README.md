
# RichPredict - Football Prediction Platform

## Project info

A football prediction platform with premium and free predictions.

## Installation Instructions

### Setting up on Namecheap or other hosting providers

1. Upload the contents of the `dist` folder to your hosting provider's web root directory.
2. Create a MySQL database through your hosting control panel.
3. Make a note of your database credentials (host, database name, username, password).
4. **Important for Single Page Applications (SPA):** Create a `.htaccess` file in your web root with the following content to support client-side routing:
   ```
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
5. Navigate to your website and access the `/install` page (e.g., https://yourwebsite.com/install).
6. Enter your database credentials in the installation form.
7. Once installation is complete, you'll be provided with admin login credentials.

### Default Admin Credentials

- Username: `admin`
- Password: `admin123`

**IMPORTANT:** Change these default credentials after your first login for security.

### Accessing the Admin Panel

Navigate to `/admin/login` (e.g., https://yourwebsite.com/admin/login) and enter your admin credentials.

## Manual Database Setup (if automatic installation fails)

If the automatic installation doesn't work, you can manually set up the database:

1. Access your database through phpMyAdmin or a similar tool.
2. Import the SQL file located in `/src/utils/database-schema.sql`.
3. After importing the SQL file, you can log in with the default admin credentials.

## Local Development

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://ultraconverter.org)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Building for Production

To create a production build:

```sh
npm run build
```

The output will be in the `dist` directory, which you can upload to your hosting provider.

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
