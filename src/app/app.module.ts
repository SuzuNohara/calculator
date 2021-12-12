import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { KatexModule } from 'ng-katex';
import { BasicComponent } from './modes/basic/basic.component';
import { CientificComponent } from './modes/cientific/cientific.component';
import { ProgrammerComponent } from './modes/programmer/programmer.component';

import { IonicStorageModule } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './modes/account/account.component';
import { AccalcComponent } from './modes/account/accalc/accalc.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    CientificComponent,
    ProgrammerComponent,
    AccountComponent,
    AccalcComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    KatexModule,
    IonicStorageModule.forRoot(),
    FormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
