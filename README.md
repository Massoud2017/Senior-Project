# Senior Project (Fall 2021 - Spring 2022) - Team Energy

**Team Energy:** Massoud Bakhtyari, Zoha Alvi, Misba Tabassum, Naba Riaz, Nam Tran, Duc Nguyen  

### Instructors:

  - Fall 2021: prof. Chris Grove  
  - Spring 2022: prof. Kenneth Elliot

### Lab Advisors:

  - Fall 2021: prof. Yongwan Lim  
  - Spring 2022: prof. Swayam Pati

### Description: 

Our project is to build a new website for Pho Ru restaurant. This website will have a modern and aesthetic look, user friendly and allow more interaction from the customers.

![alt text][phoru-logo]

**Git Repository:**

> https://github.com/Massoud2017/Senior-Project

**Try it live:**

> https://626883441640c715162ae8f9--thriving-creponne-382db8.netlify.app/
>   
> ![alt text][phoru-intro]



## Setting up Backend:

### Packages:

Use ```npm install``` command to install these packages

| Package | Version | Purpose |
|---------|---------|---------|
|`bcrypt`|5.0.1|to implement string hashing|
|`cors`|2.8.5|to make the connection between the frontend (ReactJS) and the server (NodeJS)|
|`dotenv`|16.0.0|to load environment variables from .env file|
|`express`|4.17.3|the framework we use for creating Rest API in NodeJS|
|`jsonwebtoken`|8.5.1|to generate token for authentication mechanism|
|`mysql`|2.18.1|to connect to the database and serve SQL queries|
|`mysql2`|2.3.3|to connect to the database and serve SQL queries|
|`react-router`|6.0.2|to create route for React app|
|`react-router-dom`|6.0.2|client and server-side routing library for React|
|`sequelize`|6.19.0|to query and manipulate data from a database|
|`sequelize-cli`|6.4.1|to query and manipulate data from a database|
|`stripe`|8.219.0|to implment Stripe payment system|
||||

## Setting up Frontend:

### Packages:

Use ```npm install``` command to install these packages

| Package | Version | Purpose |
|---------|---------|---------|
|`emailjs/browser`|3.6.2|to implement emailjs|
|`stripe`|8.219.0|to implment Stripe payment system|
|`stripe/react-stripe-js`|1.7.2|to implment Stripe payment system|
|`stripe/stripe-js`|1.29.0|to implment Stripe payment system|
|`axios`|0.24.0|to make API requests|
|`formik`|2.2.9|to build and control form|
|`yup`|0.32.11|to parse value and perform user input validation to the form|
|`react-router`|6.0.2|to create route for React app|
|`react-router-dom`|6.0.2|to create different routes and urls for our app|
||||

### Setting up whitelist for the localhost

When running 'npm start' in client folder, we will see this error:

> Access to XMLHttpRequest at 'http://localhost:3001/posts' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

To fix this, set the whitelist for CORS. So in the index.js in server folder.

```javascript
-- Import cors package  
const cors = require('cors');

-- Use cors as the middleware  
app.use(cors());
```

### Notes:

To add google map to the contact page, we use embeded google map

> https://www.embedgooglemap.net/

# The Project

## Frontend:

- ReactJS - https://reactjs.org/docs/getting-started.html
- HTML - https://developer.mozilla.org/en-US/docs/Web/HTML 
- CSS - https://developer.mozilla.org/en-US/docs/Web/CSS

## Backend:

- NodeJS - https://nodejs.org/en/
- Express - https://expressjs.com/en/starter/installing.html

## Databases:
- Sequelize - https://sequelize.org/docs/v6/getting-started/
- MySQL - https://docs.oracle.com/en-us/iaas/mysql-database/doc/getting-started.html

## Other tools:

- VS Code as development environment - https://code.visualstudio.com/
- GitHub for version control repository - https://github.com
- PostMan and Isomnia for APIs testing - https://learning.postman.com/docs/getting-started/introduction/
- Selenium for automation testing (see `automation-testing` folder) - https://www.selenium.dev/documentation/webdriver/getting_started/

## Deployment:

- Frontend: Netlify - https://www.netlify.com
- Backend: Heroku - https://www.heroku.com
- Email: EmailJS - https://www.emailjs.com/
- Payment: Stripe - https://stripe.com/


## Documentation:

Checkout our documentation here:

- [User Manual](documentation/User-Manual_TeamEnergy.pdf)
- [Maintenance Manual](documentation/Maintenance-Manual_TeamEnergy.pdf)
- [System Test Report](documentation/System-Test-Report_TeamEnergy.pdf)


[phoru-logo]: /img/phoru-logo.png "Pho Ru Logo img"
[phoru-intro]: /img/phoru-intro-shots.JPG "Pho Ru intro img"
[energy-logo]: /img/team-energy-logo.JPG "Team Energy Logo img"
