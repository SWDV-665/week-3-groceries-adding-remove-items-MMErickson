import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ToastController } from 'ionic-angular'; // For popup toast messages

import { AlertController } from 'ionic-angular'; // For prompt alert

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Title displayed at the top of the home page
  title = 'Grocery List';

  // Array of grocery items
  items = [
    {
      name: 'Milk',
      quantity: 2
    },
    {
      name: 'Bread',
      quantity: 1
    },
    {
      name: 'Eggs',
      quantity: 1
    },
    {
      name: 'Apples',
      quantity: 2
    },
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  // Removes an item from the items array
  removeItem(item, index) {

    console.log('Item being removed: ', item, index);

    const toast = this.toastCtrl.create({
      message: 'This item was removed:  ' + item.name,
      duration: 3000
    });
    toast.present();

    this.items.splice(index, 1); 

  }

  // Adds an item to the items array
  addItem() {

    console.log('Adding an item');
    this.addItemPrompt();
  }

  // Displays a prompt for the user to enter a new item and quantity
  addItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add New Item',
      message: "Please enter your new item: ",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: item => {
            console.log('Canceled adding new item:  ', item);
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved new item:  ', item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }
}


