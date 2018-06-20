import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '/user/login', pathMatch: 'full' },
    { path: 'user', loadChildren: './domain/user-management/user-management.module#UserManagementModule' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
