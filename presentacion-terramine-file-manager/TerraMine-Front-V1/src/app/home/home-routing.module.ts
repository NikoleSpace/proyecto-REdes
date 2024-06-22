// home-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'documents', loadChildren: () => import('./modules/documents/documents.module').then(m => m.DocumentsModule) },
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'task', loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule) },
      { path: 'audits', loadChildren: () => import('./modules/audits/audits.module').then(m => m.AuditsModule) },
      { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
