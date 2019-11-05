# My memo
npm install -g @angular/cli
ng new SmartBotWeb
ng gen module intent
ng serve --open

# Routing memo
https://www.youtube.com/watch?v=Nehk4tBxD4o
1. generate a project with routing option
2. Generate departmentLit and employeeList components
3. Configure the routes
4. Add buttons and use directives to navigate



# https://stackoverflow.com/questions/41140187/can-not-find-module-angular-material
npm install --save @angular/material
npm install --save @angular/animations
npm install --save @angular/cdk

# *******************
# https://www.youtube.com/watch?v=Q6qhzG7mObU
ng g @angular/material:material-nav --name=main-nav

# version ***
The version of angular/material 和 angular/cdk must both be 7.2.3
The version of angular/animations must be 7.2.15
Basically they must match the one of angular/core,
otherwise, we will come across version conflict
# https://stackoverflow.com/questions/56433781/export-%C9%B5%C9%B5inject-was-not-found-in-angular-core

