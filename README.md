# SapeXLauchApplication 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Development Notes

Used HTML5/CSS3/Angular to implement the complete application in responsive layout form without using any external framework or packages to meet the requirements.

Mobile view(width,<700px) has the filter menu and cards container stacked one below the other).
Tablet view (width<1023px and width>=700px) has the filter menu and the cards container inline with 2 cards per row(maximum).
Desktop view (width>1024px) has the filter menu and the cards container inline with 4 cards per row(maximum).

The root componnent([AppComponent]) has a fixed filter menu and the cards container is been configured to have the <router-outlet></router-outlet>. The default routing is set to [HomeComponent] which has the initial data without any filters applied. There are 3 set of filters : Filter by launch year, Filter by launch status, Filter by land status.

All the API calls definition is in a service file ([WebappService]) using HttpClient along with Observables.

Each filter menu in the HomeComponent has a parameterized routerLink which navigates to respective filter view components ([LaunchYearViewComponent] / [LaunchStatusViewComponent] / [LandStatusViewComponent]). The routing parameters for these componenets are used as the input parameter for the API calls.

Since all the views (initial data view or the filtered views) have the same UI, there is a reusable component added([SpacexProgramList]) to load the cards in each view. This child component accepts an input parameter named [program-list] which accepts the list of spacex launch program list.

## Notes to the code reviewer

The url given in the  'mission_patch' field of the API response is not loading. 
Example : "mission_patch":"[https://images2.imgbox.com/40/e3/GypSkayF_o.png]". 
So for the time being, I have added an image in the assets/images folder to load the same image for all the cards. You can uncomment line 6 and comment line 4 in [spacex-program-list.component.html] file.

It is nice to show a loading icon as a mask when a server call is made to avoid showing a blank right cards container, but due to time constraints I am not including it.



