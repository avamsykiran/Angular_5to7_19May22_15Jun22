Angular 
-----------------------------------------------------------------------

    Pre-Requisite Skills
    --------------------------
        HTML 5
            Standard Html elements and attributes
            Tables, lists, media, links
            Form elements and validation attribues
            HTML 5 api - drag and drop, geolocation, webStorage

        CSS 3
            Selectors and Selector Operators
            Css-properties, box model properties, text properties, image properties, lsit properties
            Responsuive Web Design

        Javascript ES6
            Standards Classes and Objects
            Arrays and Array Prototype methods
            Function - closure, call back, arrow method, IIFE
            String, Math, Date and JavaScript tiem api
            Spread operator, rest params, default params
            async and await and Promise 
            ES6 Modules

        Bootstrap
        NodeJS

    Lab Setup
    -----------------
        Chrome 
        VSCode 
        NodeJS  > 14.x
        Angular CLI > 12.x

    Angular Introduction
    ------------------------
        What?
            is a javascript framework for developing SPA (Single Page Application)    

        What Else?
            AngularJS
            Angular
            VueJS
            ReactJS

        Web Evolution
            Static Web      a published folder of static html documents.

            Dynamic Web Application

                Web Server                                                           Web Client

                    Server Side Programs                <----------REQ-----------------
                        (JSP/Servlets/ASP/PHP...etc)
                                                            receive data from the req
                                                            and generate html content
                                                            dynamically.

                                                        ---(generated html) RESP------------>

            Single Page App

                Web Server                                                           Web Client (browser)
                    
                    spa-bundle          <----------First REQ----------------------
                    (index.html + JS)   -----------(spa-bundle)--------------------> index.html is loaded and
                                                                                    the linked JS is invoked.

                                                                                    this JS will execute on the client
                                                                                    and will generate required posrtions
                                                                                    of html and will manage the contnet
                                                                                    of the index.html page without
                                                                                    having to unload or reload any page.

                    rest-api            <------storing and retriving data------->   spa-bundle JS
                                                    xml/json

        Why NodeJS - when spa-bundle JS runs in a browser ?

            In the process of creating an SPA.....
                1. Compose the code                       an IDE is used       
                2. Bundle the code                        tools like babel,webpack are used
                3. Test the code                          tools like jasmine , karma are used
                4. Hard Test (run on dev mode)            tools like development server is needed.

            These tools babel, webpack, jasmine, karma, development server ...etc., are executed on the 
            developmer machine in a stand-alone, and thats where we need the 'NodeJS'

    Angular Evolution
    ---------------------------------------

        AngularJS                               javascirpt is used as a scripting language
    
        Angular 2                               typescript is used as a scripting language
        Angular 4
        Angular 5,6,7,8,9,10,11,12,13

    Typescript
    ---------------------------------------

        Typescript = javascript + type-safety

        babel or tsc (typescript-compiler) are used to transpell .ts into .js

        types :
                string
                number
                boolean
                any
                unknown
                void
                undefined
                null

        let var:type;

        class ClassName{

            field1:type;
            private field2:type;
            public field3:type;

            constructor(private field4:type,private field5:type,arg:type) {

            }

            method1(arg:type) : returnType {

            }
        }

        interface MyInterface{
            field1:type;
            method1(arg:type) : returnType ;
        }


        interface Emp {
            id:number;
            name:string;
            sal:number;
            desg?:string;
        }

        {id:101,name:'Vamsy',sal:7890}  is an object of the Emp
        {id:102,name:'Srinivas',sal:7890,mail:'srinu@gmail.com'}  is not an object of Emp
        {id:103,name:'Sagar'}   is not an object of Emp
        {id:104,name:'Suseela',sal:7890,desg:'HR-Manager'}  is an object of the Emp
        
        ? and ! associated with field declares indicating that they can hold null/undefiend, or
        the initialization is not mandatory.

    Angular CLI
    ---------------------------------------
        Command Line Interface - offers tools to create and manage the project structure and also
        to compile, build, package and test

        ng new proj-nmae

        cd proj-name

        proj-name> ng g c component-name --skip-tests
        proj-name> ng g directive directive-name --skip-tests
        proj-name> ng g module module-name
        proj-name> ng g service service-name --skip-tests
        proj-name> ng g pipe pipe-name --skip-tests
        proj-name> ng g interface interface-name 
        proj-name> ng g class class-name --skip-tests

        proj-name> ng build
        proj-name> ng serve
        proj-name> ng test


    Angular Archetecture
    ---------------------------------------

        Each building-block is a typescript class.
        Each of that is marked with a decorator to indicate what type of buidling block it is.
        These decorators accept a json object, definign the configuaration of a building block, and those
        json objects are called meta-data.

        Modules

                    1. An angular module is a logical group of components, pipes, directive, services and sub-modules.
                    2. Each angular application must have one and only one top-level module called ROOT MODULE
                    3. Each sub-module of a ROOT MODULE is called a FEATURE MODULE

                        EmployeeManagementSystem
                                AppModule                           root module
                                    HRModule                        feature module
                                    ProjectsMappingModule           feature module
                                    AccountModule                   feature module
                                    TimeSheetModule                 feature module
                    
                    @NgModule({
                        declarations:[],
                        imports:[],
                        exports:[],
                        providers:[],
                        bootstrap:[]
                    })
                    class MyModule{

                    }


                    declarations:[]         list of components, pipes and directives that belong to the current module
                    
                    imports:[]              list of sub-modules to the current module
                    
                    exports:[]              list of components, pipes and directives that belong to the current module
                                            and to be accessed outside the current module
                                            this 'exports' property never appears for a ROOT-MODULE
                    
                    providers:[]            list of services that belong to the current module

                    bootstrap:[]            is used to give the list of components that has to be instantiated
                                            after loading the ROOT-MODULE.

        Components

                    welcome.component.ts
                    ------------------------------
                    @Component({
                        selector:'app-welcome',
                        templateUrl:'welcoem.component.html',
                        stylesheets:[],
                        providers:[]
                    })
                    class Welcome {
                        
                        welcomeText:string;

                        constructor(){
                            this.welcomeText="Hello everybody! Welcoem to my angular app";
                        }
                    }

                    welcome.component.html
                    ----------------------------
                        <h3>{{welcomeText}}</h3>


                    <app-welcome /> -----------------------------> <h3>Hello everybody! Welcoem to my angular app</h3>

                    a component is a angular defined html-element.

                    Component = Component Class + Component Template

                    Data Binding
                    ------------------
                        consuming the fields of component class in the component template

                        whenever a field is bound inside a template and if the field value gets
                        modified, the relevent dom of the template also gets updated automatically.

                        1. Interpolation
                                {{angular-expression}}

                        2. Two-Way Data Binding
                                is used to load the value of a field into a form-element and vice-versa.

                                'ngModel' attribute directive from 'FormsModule' is used for two-way data bidning

                                <input type="number" name="n" [(ngModel)]="operand1" />

                        3. One-Way Data Binding
                                is used to load the value of a field into any attribute of an element.

                                A) attribute binding
                                    [attribute]="field"

                                    <img [src]="logo" />

                                B) event binding
                                    (event)="method()"

                                    <button (click)="sayHello()">Click Me </button>

                                C) style binding
                                    [style.cssProperty]="field"
                                    
                                    <img [style.width.px]="logoWidth" />

                                D) css-class binding

                                    [class.class-name]="booleanField"
                                    
                    Child / Nested Components
                    -------------------------------------
                       we can use a component inside another component

                       ng-template
                       ng-content
                       ng-container
                       @Input()
                       @Output()
                       @HostListener()
                       ViewChild

        Directives
                    is a html attribute developed in angular.

                    @Directive({
                        selector:'',
                        providers:[]
                    })
                    class MyDirective {

                    }

                    1. Attribute Directives
                        ngModel, ngForm, ...etc

                    2. Event Directives
                        click,dblclick,blur,focus,change,ngSubmit

                    3. Structural Directives

                        used to control the apperence of an element

                        *ngIf
                        *ngFor
                        ngSwitch - *ngSwitchCase
                        
        Pipes

                    is a piece of logic executed to tranform a given value into another just before rendering.

                    inbuilt-pipes
                        lowercase
                        uppercase
                        titlecase
                        number
                        currency
                        date
                        json
                        async

                    @Pipe({
                        name:''
                    })
                    class MyPipe {

                    }

        Services

                    a service is expected hold reusable bussienss logic or
                    rest-api calls.

                    @Injectable({
                        providedIn:''
                    })
                    class MyService{
                        
                    }

    BudgetTracker - CaseStudy
    ---------------------------------------------------------------

        1. Each user has a UserAccount
        2. Each user can register and login
        3. a logged in user can 
            a. Add a transaction
            b. Edit a transaction
            c. remove a transaction
            Where each transaction shall have an id,txnAmount,txnDate,txnType (CREDIT/DEBIT)
        4. a logged in user shall be able to generate a monthly statmenet displaying
                all the txns made in that month along wiht the total credit, total debit and 
                statement balance.


        Persistence     MySQL
        BackEnd         SpringBoot based rest-api
        FrontEnd(UX)    Angular 12

    Integrating Bootstrap 5
    -----------------------------------------------------------------

        npm install bootstrap --save

        angular.json
            "styles":[
                "node_modules/bootstrap/dist/css/bootstrap.min.css",
                "src/styles.css"
            ],
            "scripts":[
                "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]

    Inter-Component Communication
    -----------------------------------------------------------------

        A parent component can share data with a child component 
        through attributes.

        The field of a component, if marked with @Input() decorator, acts like attribute.

        Tranfering an event from child to parent is also possible.We use an object of
        'EventEmitter' class from @angular/core pacakge. This EventEmitter can
        raise our own event and we can use it to raise an event from the child and 
        handle it from in parent. But for parent to access the EventEmitter object, that
        object must be exposed using @Output() decorator.


    Angular Forms
    ------------------------------------------------------------------

        Template Driven Forms               Model Driven Forms / ReactiveForms

            FormsModule                             ReactiveFormsModule
            
 the form is completly written in template  the form is modeled in the component class
                                            and is written in the component template

 these forms are difficult to test as it is these form are easy to test as major of its
 completly writtne in html                  model is written in typescript.

 supports simple senarios where the form    supports complicated forms and also nested forms
 has no more than two ore three controls

 ngModel and ngForm directives are used         formControlName and formGroup directives are
 to map the form with the underlying object.       used to map the form with its model.

    both ngModel directive object and formControl object have the below boolean propeties
    to detect validation error:

        touched     untouched
        dirty       prestine
        invalid     valid