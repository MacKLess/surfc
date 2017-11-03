# Surfc

### _Epicodus Solo Coding Project in Angular, November 3, 2017_

### L. Devin MacKrell

## Description

_This is a tracking website for the Seattle University Women's Rugby Football Club for the academic year 2014-15. This information contained is no longer current but in use for a project model._

## Setup/Installation Requirements

* Clone this repository from: [github.com/MacKLess/surfc](https://github.com/MacKLess/surfc.git).
* In order to run this app, you will need to set up a Firebase Database:
  * First, make a free Firebase account [here](https://firebase.google.com/).
  * Then, create a project from the [Firebase console](https://console.firebase.google.com/).
  * Create a file in the project directory at ```src/app/api-keys.ts```.
  * Once the Firebase project is created, select "Add Firebase to your web app."
    * Copy the information from the pop-up window into ```api-keys.ts``` as follows:
    ```typescript
    export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };
    ```
  * Add ```/src/app/api-keys.ts``` to your ```.gitignore``` file.
  * Return to the [Firebase console](https://console.firebase.google.com/) and select your database, then select "Database" from the left-hand navbar.
  * Select the "Rules" option from the blue navbar reading "Realtime Database" at the top of the page.
  * Change both the ```".read"``` and ```".write"``` properties to ```"true"```.
  * To upload a starter set of projects:
    * Find your project in the [Firebase console](https://console.firebase.google.com/).
    * Select the "Database" option from the left navbar.
    * Select the 3 dots on the right of the grey bar with the database url.
    * From that menu, select "Import JSON".
    * Upload ```projects.json``` from the project root directory.
* Make sure you have Node.js installed. Instructions for doing so can be found [here](https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js).
* From the project root directory, run the following commands in the terminal:
  ```
  npm install
  bower install
  ng serve
  ```
* You can now open the site in your web browser at ```localhost:4200```.

## Specifications

* _User can see list of team members_
* _User can click on a team member and see her profile page with information on: name, type of position, position and alternate, and seniority._
* _User can learn more about the club via the About page._
* _Administrator can add team members to the club._
* _Administrator can edit team members profiles to correct errors or update their profiles._
* _Administrator can delete a team member if she leaves the team._
* __
* __
* __


## Support and contact details

_Please contact [ldmackrell@gmail.com](mailto:ldmackrell@gmail.com) with questions, comments, or issues._

## Technologies Used

* Angular
* Firebase
* JavaScript
* TypeScript
* Node.js
* Bootstrap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

Copyright (c) 2017 ** L. Devin MacKrell**

*Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*
