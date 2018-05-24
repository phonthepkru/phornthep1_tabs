import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BmiPage} from '../bmi/bmi';
import {BmrPage} from '../bmr/bmr';
import {TdeePage} from '../tdee/tdee';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 

  constructor(public navCtrl: NavController) {

  }
  bmipage(){
    this.navCtrl.push(BmiPage);
  }
  bmrpage(){
    this.navCtrl.push(BmrPage);
  }
  tdeepage(){
    this.navCtrl.push(TdeePage);
  }
  
}
