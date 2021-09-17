import { Component, OnInit } from '@angular/core';
import { FakeDataService } from './../../servicess/fake-data.service'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-malaysiastores',
  templateUrl: './malaysiastores.page.html',
  styleUrls: ['./malaysiastores.page.scss'],
})
export class MalaysiastoresPage implements OnInit {
  public restaurants: any[]  = [];

  public searchText: string = "";
  constructor(private navCtrl: NavController, public fds: FakeDataService) {
    const restaurants = this.fds.getData();

    this.restaurants = restaurants as any;
  }

  ngOnInit() {
  }

  goToRestaurant(restaurantId: number) {
    this.navCtrl.navigateForward('/restaurents/' + restaurantId);
  }
}