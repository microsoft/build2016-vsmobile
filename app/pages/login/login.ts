import {Page, NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';
import {UserData} from '../../providers/user-data';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  constructor(private nav: NavController, private userData: UserData) {
      if (this.userData.loggedIn) {
        this.nav.push(TabsPage);    
      }
  }

  doLogin(provider:string){
      this.userData.login(provider);  
      this.nav.push(TabsPage);
  }
}
