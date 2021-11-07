# HearphoneApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyChy16KhjospA3OrrT9e_10yma1IQTITHM",
authDomain: "headphone-project.firebaseapp.com",
projectId: "headphone-project",
storageBucket: "headphone-project.appspot.com",
messagingSenderId: "636300857082",
appId: "1:636300857082:web:ef583d1b5fc46fe5e38343",
measurementId: "G-JQRG3C8B9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

#### Project Setup

start up

eslint
doc - https://compodoc.github.io/compodoc/
e2e
formatter -- prettier

language @ngx-translate/core
core  
shared

layout

##### Rami Base compnent

import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription, Unsubscribable, Observable } from 'rxjs';

/\*\*

-   This class acts as a base component for all project components
    \*/
    @Component({
    template: ``
    })
    export abstract class BaseComponent implements OnDestroy {
    /\*\*
    -   Component loading
        \*/
        loading$!: Observable<boolean>;

/\*\*

-   It is used when we want to dispose of the subscription after the Observables
-   emits value or gets completed
    \*/
    private destroy$ = new Subject<void>();
    /\*\*
-   It is used when we want to register subscriptions to dispose them by unsubscribing
-   in component ngOnDestroy
    \*/
    private subscriptions$ = new Subscription();

/\*\*

-   It is used when we want to dispose of the subscription after the Observables
-   emits value or gets completed
-   @example
-   this.api.GetList().pipe(takeUntil(this.destory)).subscribe(res => { this.variableName = res; });
    \*/
    get destroy() {
    return this.destroy$;
    }

/\*\*

-   set subscription to register it
-   @example
-   this.subscription = this.api.GetList().subscribe(res => { this.variableName = res; });
    \*/
    protected set subscription(observable: Unsubscribable) {
    this.subscriptions$.add(observable);
    }

/\*\*

-   Action required to do on disposing a component
    \*/
    ngOnDestroy() {
    // complete the observable to dispose attached subscriptions
    this.destroy$.next();
    this.destroy$.complete();


    // Unsubscribe all subscriptions registered in the subscriptions variable
    this.subscriptions$.unsubscribe();

}
}
