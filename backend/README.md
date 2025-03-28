# LOCAL SETUP

## Prerequisites

MAKE SURE YOU ARE IN THE backend FOLDER FOR THESE COMMANDS

### Node.js

If you haven't already install node and npm:
https://nodejs.org/en/download

### MySQL

If you haven't already install mysql locally

```bash
  brew install mysql
```

Start the mysql server

```bash
  brew services start mysql
```

Connect to the mysql shell as the root user

```bash
  mysql -u root
```

Create initial database

```sql
  CREATE DATABASE lets-talk-about-x;
```

Exit the mysql shell

```sql
  exit
```

Run db script (run this any time you want to reset your db)

```bash
  mysql -h localhost -u root lets-talk-about-x < ./setup/setupDB.sql
```

## Setup

Install packages (only first time and when new packages are added)

```bash
  npm install
```

## Start

Run the server

```bash
  npm start
```

Verify the server is running by visiting [http://localhost:3001/user](http://localhost:3001/user)
