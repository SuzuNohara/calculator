import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public irken = 'assets/irken.png';

  public appPages = [
    { title: 'Basic', url: '/basic', icon: 'calculator' },
    //{ title: 'Cientific', url: '/cientific', icon: 'flask' },
    { title: 'Programmer', url: '/programmer', icon: 'code-working' },
    { title: 'Account', url: '/account', icon: 'fast-food' },
    /*{ title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },*/
  ];
  /*public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/
  constructor(private storage: StorageService) {
    this.storage.init();
  }
}
