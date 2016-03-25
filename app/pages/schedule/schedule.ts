import {IonicApp, Page, Modal, Alert, NavController, ItemSliding, Events} from 'ionic-angular';
import {ConferenceData} from '../../providers/conference-data';
import {UserData} from '../../providers/user-data';
import {ScheduleFilterPage} from '../schedule-filter/schedule-filter';
import {SessionDetailPage} from '../session-detail/session-detail';


@Page({
  templateUrl: 'build/pages/schedule/schedule.html'
})
export class SchedulePage {
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks = [];
  shownSessions = [];
  groups = [];

  constructor(
    private app: IonicApp,
    private nav: NavController,
    private confData: ConferenceData,
    private user: UserData,
    private events: Events
  ) {      
      this.listenToFavsEvents();
      this.updateSchedule();
  }

  onPageDidEnter() {
    this.app.setTitle('Schedule');
  }

  doRefresh(refresher) {
      console.log('Begin async operation', refresher);
      
      this.user.syncFavorites();

      setTimeout(() => {
          console.log('Async operation has ended');
          refresher.complete();
      }, 2000);
  }



  updateSchedule() {
    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).then(data => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }

  presentFilter() {
    let modal = Modal.create(ScheduleFilterPage, this.excludeTracks);
    this.nav.present(modal);

    modal.onDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
        this.updateSchedule();
      }
    });

  }

  goToSessionDetail(sessionData) {
    // go to the session detail page
    // and pass in the session data
    this.nav.push(SessionDetailPage, sessionData);
  }

  addFavorite(slidingItem: ItemSliding, sessionData) {
      sessionData.favorite = true;
      this.user.addFavorite(sessionData.name);      
      let alert = Alert.create({
        title: 'Favorite Added',
        buttons: [{
          text: 'OK',
          handler: () => {      
            slidingItem.close();
          }
        }]
      });
      
      this.nav.present(alert);   
  }
  
  removeFavorite(slidingItem: ItemSliding, sessionData) {
        let alert = Alert.create({
            title: 'Remove Favorite',
            message: 'Would you like to remove this session from your favorites?',
            buttons: [
            {
                text: 'Cancel',
                handler: () => {                
                    slidingItem.close();
                }
            },
            {
                text: 'Remove',
                handler: () => {      
                    this.user.removeFavorite(sessionData.name);
                    sessionData.favorite = false;      
                    slidingItem.close();
                    this.updateSchedule();
                }
            }
            ]
      });      
      this.nav.present(alert);
  }
  listenToFavsEvents() {
      this.events.subscribe("favs:sync", () => {
          console.log("updating favs");
          this.updateSchedule(); 
      });
  }
}
