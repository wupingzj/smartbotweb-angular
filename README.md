# SAAS tool to create a smart chatbot

This project aims to create a web tool for user to create a chatbot with smarts instead of a dumb chatbot.

Angular Material is used as the main UI compenent library in this project.

This project demonstrates 
- routing/navigation
- query parameter passing
- parent/child page data passing
- UI component composing
- service call to backend
- usage of Angular Material

`To Do`: add a screenshot here

`Note:` to allow this web site run standalone as a demo without the prerequisite of the backend services running, the data of service calls are mocked.

# Getting started

- Clone the repository
```
git clone --depth=1 https://github.com/wupingzj/smartbotweb-angular.git
```
- Install dependencies
```
cd smartbotweb-angular
npm install
```
- Test

```
ng test

```
- End-to-end test

```
ng e2e
```
- Run

```
ng serve --open
```

Note: The web site page will automatically launch at http://localhost:4200/.
The web site by dafult gets the list of intents from the embedded [mock intents.json](https://github.com/wupingzj/smartbotweb-angular/blob/master/src/assets/intents.json) file to run standalone without dependency on a server.

If you wish to get real list of intents from a server, please change the value of production field to be true in [environment](https://github.com/wupingzj/smartbotweb-angular/blob/master/src/environments/environment.ts) file. For example:

```
export const environment = {
  production: true,
  serverURL: 'http://MyProductionServer.com:80'
};
```
I will push the server project to Github soon later.


## Contact
Email: KevinPingSydney@gmail.com
