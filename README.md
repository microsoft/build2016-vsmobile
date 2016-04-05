# MS Build Conference Application

![vsts build status](https://rido.visualstudio.com/DefaultCollection/_apis/public/build/definitions/41d7a42c-12ae-4d66-aa47-f7c63ea5ef34/14/badge)

This is purely a demo application built with Ionic 2 and Azure App services for the 2016 Microsoft build conference.

## Important!
Here is the link to the [conference](https://build.microsoft.com/). This project is just to show off Ionic v2.0 components with Azure app service in a real-world application.
To learn more about Tools for Apache Cordova, visit this [link](https://taco.visualstudio.com/).


## Table of Contents
 - [Getting Started](#getting-started)
 - [Contributing](#contributing)
 - [App Preview](#app-preview)
  - [iPhone 6](#iphone-6)
  - [Samsung Galaxy S5](#samsung-galaxy-s5)
 - [Use Cases](#use-cases)
 - [File Structure of App](#file-structure-of-app)


## Getting Started

With VS Code:
* Clone this repository.
* Run `npm install` from the project root.
* Install ionic-CLI and taco-CLI (`npm install -g cordova ionic@beta taco-cli`)
* Add android / iOS / windows platform to your project by running `taco platform add <platform name>` in a terminal from your project root.
* Build the project by running gulp build and then `taco build <platform name>`
* Deploy to device or emulator by running `taco run <platform name>` or `taco emulate <platform name>`
* Success

With Visual Studio:
* Clone this repository.
* Open the build2016-vsmobile.sln in Visual Studio.
* Install npm packages by going to your Solution Explorer -> Dependencies -> npm and clicking on 'Restore Packages'. 
* Once packages are restored, build the project and deploy it on an android emulator. 
* Success


## Contributing
See [CONTRIBUTING.md](https://github.com/driftyco/ionic-conference-app/blob/master/CONTRIBUTING.md) :tada::+1:


## Use Cases

* Menu - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/app.html#L3-L21) |
[code](https://github.com/driftyco/ionic-conference-app/blob/master/app/app.js#L27-L32) ]
* Tabs - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/tabs/tabs.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/tabs/tabs.js) ]
* Segments - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.html#L6-L13) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.js#L24) ]
* Search bar - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.html#L24-L29) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.js#L36-L41) ]
* Sliding items with buttons - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.html#L38-L55) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.js#L60-L90) ]
* Modals - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule-filter/schedule-filter.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.js#L43-L52) ]
* Action Sheet - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/speaker-list/speaker-list.html#L32) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/speaker-list/speaker-list.js#L34-L55) ]
* Toggle / switches - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule-filter/schedule-filter.html#L22-L25) ]
* Slides - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/tutorial/tutorial.html#L2-L14) |
[code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/tutorial/tutorial.js#L14-L39) ]
* Cards - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/speaker-list/speaker-list.html#L9-L42) ]
* Sticky headers - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.html#L34-L36) ]
* Grid - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/login/login.html#L26-L33) ]
* Using Angular HTTP for JSON - [ [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/providers/conference-data.js#L25-L30) | [usage](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.js#L36-L41) ]


## App Preview

### iPhone 6


<!-- images of iOS app -->
<img src="resources/screenshots/iphone/1.png"  width="425">
<img src="resources/screenshots/iphone/2.png"  width="425">
<img src="resources/screenshots/iphone/3.png"  width="425">
<img src="resources/screenshots/iphone/4.png"  width="425">
<img src="resources/screenshots/iphone/5.png"  width="425">
<img src="resources/screenshots/iphone/6.png"  width="425">


### Samsung Galaxy S5

<!-- GIF of MD app -->
<img src="resources/screenshots/samsung/1.png"  width="425">
<img src="resources/screenshots/samsung/2.png"  width="425">
<img src="resources/screenshots/samsung/3.png"  width="425">
<img src="resources/screenshots/samsung/4.png"  width="425">
<img src="resources/screenshots/samsung/5.png"  width="425">
<img src="resources/screenshots/samsung/6.png"  width="425">



