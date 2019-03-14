### As of March 2019, this repo is no longer maintained by Microsoft. If you're interested in continuing this project, please feel free to fork it. As of March 2019, we will no longer monitor or respond to open issues. Thanks for your support!

---

﻿# Ionic 2 Conference Application

This is purely a demo of Ionic 2 with TypeScript. It is still in development.


## Important!
**There is not an actual Ionic Conference at this time.** This project is just to show off Ionic 2 components in a real-world application. Please go through the steps in [CONTRIBUTING.md](https://github.com/driftyco/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) before submitting an issue.


## Table of Contents
 - [Getting Started](#getting-started)
 - [Contributing](#contributing)
 - [Use Cases](#use-cases)
 - [App Preview](#app-preview)
 - [File Structure of App](#file-structure-of-app)

## Visual Studio Support

* Install Visual Studio 2015 Update 3, this will include Tools for Apache Cordova Update 10
* Open the file ionic-conference-app.jsproj 
* VS will restore all packages for you
* Use the task runner explorer to execute gulp tasks

## Getting Started

* Clone this repository.
* Want to use TypeScript? Both the `master` branch and the `typescript` branch now use TypeScript.
* Run `npm install` from the project root.
* Install the ionic CLI (`npm install -g ionic@beta`)
* Run `ionic serve` in a terminal from the project root.
* Profit

**Note:** Is your build slow? Update `npm` to 3.x: `npm install -g npm`.


## Contributing
See [CONTRIBUTING.md](https://github.com/driftyco/ionic-conference-app/blob/master/CONTRIBUTING.md) :tada::+1:


## Use Cases

* Action Sheet - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/speaker-list/speaker-list.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/speaker-list/speaker-list.ts) ]
* Alert - [ [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.ts) ]
* Cards - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/speaker-list/speaker-list.html) ]
* Datetime - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/about/about.html) ]
* Grid - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/login/login.html) ]
* Inputs - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/login/login.html) ]
* Items (Sliding) - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.ts) ]
* Menu - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/app.html) |
[code](https://github.com/driftyco/ionic-conference-app/blob/master/app/app.ts) ]
* Modal - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule-filter/schedule-filter.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.ts) ]
* Searchbar - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.ts) ]
* Segment - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.ts) ]
* Slides - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/tutorial/tutorial.html) |
* Sticky headers - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.html) ]
* Tabs - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/tabs/tabs.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/tabs/tabs.ts) ]
* Toggle - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule-filter/schedule-filter.html) ]
[code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/tutorial/tutorial.ts) ]
* Using Angular HTTP for JSON - [ [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/providers/conference-data.ts) | [usage](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.ts) ]
* Using Azure Mobile App. Authentication with social networks. Save favorites to EasyTables
* Using Code-Push to perform out of band updates

## Code of conduct
This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

