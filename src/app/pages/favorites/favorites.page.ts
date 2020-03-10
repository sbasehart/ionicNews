import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { AnimationService, AnimationBuilder } from 'css-animator';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  @ViewChild('myElement', {static: false}) 
  myElem;
  private animator: AnimationBuilder;
 
  sources = []

  constructor(private storage: Storage, private alertController: AlertController, private animationService: AnimationService) { 
    this.animator = animationService.builder();
  }

  ngOnInit() {
    this.getFavorites()
  }

  onRefresh() {
    this.getFavorites()
    this.animateElem()
  }

  getFavorites() {
    this.storage.get('favorite').then(val => {
      if (val != null) {
        this.sources = JSON.parse(val)

      }
      console.log('FETCHED FAVORITES:', this.sources)
    })
  }

  async presentAlertConfirm(source) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Unfavorite this source?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.remove(source);
          }
        }
      ]
    });

    await alert.present();
  }

  remove(source) {
    this.getFavorites()
  }

  animateElem() {
    this.animator.setType('spin').show(this.myElem);
  }

}
