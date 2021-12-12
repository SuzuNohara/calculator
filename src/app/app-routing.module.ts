import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './modes/account/account.component';
import { BasicComponent } from './modes/basic/basic.component';
import { CientificComponent } from './modes/cientific/cientific.component';
import { ProgrammerComponent } from './modes/programmer/programmer.component';
import { AccalcComponent } from './modes/account/accalc/accalc.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full'
  },
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'cientific',
    component: CientificComponent
  },
  {
    path: 'programmer',
    component: ProgrammerComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'accalc',
    component: AccalcComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
