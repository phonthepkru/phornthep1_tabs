import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TdeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tdee',
  templateUrl: 'tdee.html',
})
export class TdeePage {
  numberA;
  numberB;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TdeePage');
  }
  performFunction(type){
    var a = parseFloat(this.numberA);
    
    console.log(type);

    if( type == 'a'){
      
      alert(1.2*a)
    }else if(type == 'b'){
      alert(1.375*a)
    }else if (type == 'c'){
      alert(1.55*a)
    }else if( type == 'd'){
      alert(1.7*a)
    }else if( type == 'e'){
      alert(1.9*a)
    }

  }
}
