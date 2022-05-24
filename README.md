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
        Components
                    @Component({
                        selector:'',
                        templateUrl:'',
                        stylesheets:[],
                        providers:[]
                    })
                    class MyComponent {

                    }
        Directives
                    @Directive({
                        selector:'',
                        providers:[]
                    })
                    class MyDirective {

                    }
        Pipes
                    @Pipe({
                        name:''
                    })
                    class MyPipe {

                    }
        Services
                    @Injectable({
                        providedIn:''
                    })
                    class MyService{
                        
                    }