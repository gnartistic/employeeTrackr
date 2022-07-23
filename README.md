# employeeTrackr
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  deployment:  
  ## Description
  
  This is a node.js application that utilizes multiple npm packages (mysql2, dotenv, express, console.table, inquirer, and save) as well as mySQL and good ole JavaScript to capture and track data from a company database. The data that can be viewed, altered, and added includes employee names, ids, roles, departments, and budgets. Some of the key features include the ability to delete employees, roles, and departments, as well as the abulity to update employee's manager, and views employees based on department and assigned managers.
  
  ## Table of Contents
  
  [Installation Instructions](#installation-instructions)  
  [Usage Information](#usage-information)  
  [Contribution Guidelines](#contribution-guidelines)  
  [Test Instructions](#test-instructions)  
  [Questions](#questions)  
  
  ## Installation-Instructions
  
  this application requires a couple npm package dependencies. Please enter this code in the terminal of the root directory before trying to use application:  
  ```npm intsall express mysql2 inquirer console.table dotenv ```
  
  ## Usage-Information
  
  To start the application run the following code:  
  ```npm start```
  
  ## License
  
  MIT License
  
  ## Contribution-Guidelines
  
  I am acception no contributions at this time.
  
  ## Test-Instructions
  start your mySQL server.
  ```mysql -u <username> -p```
  You should then be prompted for your password.

  I have included a schema.sql and seeds.sql file for testing purpose that can be sourced with: ```source db/schema.sql``` and ```source db/seeds.sql``` prior to starting application.
  
  
  ## Questions
  
  GitHub Username: [@gnartistic](https://github.com/gnartistic)  
  
  Please feel free to reach out to me at [gn4rtistic@gmail.com](mailto:gn4rtistic@gmail.com) for questions

