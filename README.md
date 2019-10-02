# PaypayFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## Application launch

In order to launch an application, follow these steps:

1. Clone the project by running this command `git clone project_name`
2. Run this command in order to install all dependencies `npm install`. All dependencies are in file `package.json`
3. Run this command `ng serve` in order to launch front-end. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
4. P.S. There might be some global dependencies which may be required to launch front-end. 

## Project description
The front-end uses **Angular 7+** framework. This framework was chosen because of its project structure simplicity and capability to be scaled smoothly. Basically, 
it consist of components which are building blocks of an application. There is a also developed ecosystem which includes a lot of useful modules. 
For example, this project uses **Material UI** which helps to build nice user interface which also is adapted to any screen resolution. 
I also used **FlexBox** to dynamically move elements of UI depending screen resolution. In general, these technologies imporive UX.
To correctly and dynamically validate data I used **ReactiveFormsModule**. For example, it ensures that user enters numeric value in necessary input box. 
I also added command from **WebPack** to set production environment. So far, there is no need to use these settings. In order to run in production environment,
type **npm run build-prod**. It is also worth mentioning that I used **ngx-toastr** for better UX. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
