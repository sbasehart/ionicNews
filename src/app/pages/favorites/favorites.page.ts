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
  @ViewChild('animation', {static: false}) 
  myElem;
  private animator: AnimationBuilder;
 
  sources = []

  constructor(private storage: Storage, private alertController: AlertController, private animationService: AnimationService) { 
    this.animator = animationService.builder();
  }

  ngOnInit() {
    this.getFavorites()
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
      header: 'Please confirm',
      message: 'Unfavorite this source?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Unfavorite cancelled');
          }
        }, {
          text: 'Okay',
          handler: () => {
            const index = this.sources.indexOf(source);
            this.sources.splice(index, 1);
            this.storage.set('favorite', JSON.stringify(this.sources))
          }
        }
      ]
    });

    await alert.present();
  }

  onRefresh() {
    this.getFavorites()
    this.animateElem()
  }

  animateElem() {
    this.animator.setType('spin').show(this.myElem.nativeElement);
  }

}
