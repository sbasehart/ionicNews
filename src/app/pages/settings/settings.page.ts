import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private storage: Storage, private alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
  }

  async onClearFavorites() {
    const alert = await this.alertController.create({
      header: 'Please confirm',
      message: 'Delete All Favorites?',
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
            this.storage.remove('favorite')
            this.favoritesRemoved()
          }
        }
      ]
    });
    await alert.present();
  }

  async favoritesRemoved() {
    const toast = await this.toastController.create({
      message: `All Favorites Removed`,
      duration: 2000
    });
    toast.present();
  }

}
