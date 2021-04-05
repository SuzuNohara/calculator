import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './modes/basic/basic.component';
import { CientificComponent } from './modes/cientific/cientific.component';
import { ProgrammerComponent } from './modes/programmer/programmer.component';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
