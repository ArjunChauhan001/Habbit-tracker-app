# Habit Tracker API

## Objective
Build a backend API using **Node.js** and **MongoDB** for user authentication, habit management, and habit tracking.

## Features
### 1. User Authentication
- **JWT-based Authentication**: Secure login and registration using JSON Web Tokens (JWT).
- **User Registration**: Create a new account with a unique username and password.
- **Login**: Authenticate users to provide access to their habit data.

### 2. Habit Management
- **CRUD Endpoints**: 
  - Create, update, delete, and view habits.
  - Store details like habit streaks, daily progress, and frequency settings.
- **Habit Data**: Store user-specific habit data such as:
  - **Streaks**: Track the number of consecutive days a habit has been completed.
  - **Daily Progress**: Record whether a habit is completed on a given day.
  - **Frequency**: Set how often (e.g., daily, weekly) the habit should be tracked.

### 3. Reminders & Notifications
- **Daily Notifications**: Set up a daily notification system using a cron job to remind users of their pending habits.
- **Custom Reminders**: Users can set reminders for specific habits.

### 4. Admin Controls
- **View All Users**: Admins can view a list of all users and their habit completion stats.
- **Create Habit Templates**: Admins can create habit templates that users can adopt as their own.

## Tech Stack
- **Node.js**: Backend runtime environment.
- **Express**: Framework for building the API.
- **MongoDB**: NoSQL database for storing user and habit data.
- **Mongoose**: ODM for MongoDB to manage schemas and models.
- **JWT**: For secure user authentication.
- **Nodemailer**: To handle email notifications (if needed).
- **Node-cron**: For scheduling daily habit reminders.

## Getting Started

### Prerequisites
- **Node.js** (v14+)
- **MongoDB** (local or cloud-based)
- **Postman** or any API client for testing API endpoints

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ArjunChauhan001/Habbit-tracker-app.git
   cd habit-tracker-api

### APP RUN

- npm run dev

- npm start


### .env

PORT=5000

MONGO_URI=mongodb+srv://arjunchauhan2755:Uene6XdAe46EtZyE@cluster0.pwebv.mongodb.net/Habbit-tracker

MONGO_PASS=Uene6XdAe46EtZyE

JWT_SECRET=real_to_hard

