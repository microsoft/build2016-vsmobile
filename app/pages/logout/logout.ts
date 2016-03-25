import {Page, NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {UserData} from '../../providers/user-data';

@Page({
  templateUrl: 'build/pages/logout/logout.html'
})
export class LogOutPage {
  
  constructor(private nav: NavController, private userData: UserData) {
      this.userData.logout();     
      this.nav.push(TabsPage);
  }
}