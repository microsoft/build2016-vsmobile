import {Page, Alert, NavController} from 'ionic-angular';
import {CodePushUpdate} from '../../providers/codepush-update';

@Page({
    templateUrl: 'build/pages/about/about.html',
    providers : [CodePushUpdate]  
})
export class AboutPage {
    loggedIn: boolean = false;
    isWindows: boolean;
    constructor(
        private nav: NavController, 
        private updater: CodePushUpdate) {
            this.isWindows = window.cordova.platformId === 'windows';        
    }

    checkAndInstallUpdates() {
        this.updater.checkForUpdate().then((remotePackage) => {
            if (!remotePackage) {
                let alert = Alert.create({
                    title: 'No update available!',
                    subTitle: 'We could not find any update.',
                    buttons: ['Ok']
                });
                this.nav.present(alert);
            } else {
                console.log("update available: " + remotePackage.appVersion);
                let alert = Alert.create({
                    title: 'Update ' + remotePackage.appVersion + ' available',
                    message: 'Would you like to update your app?',
                    buttons: [
                        {
                            text: 'Yes',
                            handler: () => {
                                this.updater.installPackage(remotePackage)
                            }
                        },
                        {
                            text: 'No',
                            handler: () => {

                            }
                        }
                    ]
                });
                this.nav.present(alert);
            }

        });
    }
}
