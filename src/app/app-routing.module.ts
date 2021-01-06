import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './guards/authentication.guard';

import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillsComponent } from './skills/skills.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
    {
        path: 'competences',
        canActivate: [AuthenticationGuard],
        component: SkillsComponent
    },
    {
        path: 'connexion',
        component: LoginComponent
    },
    {
        path: 'clients',
        canActivate: [AuthenticationGuard],
        children: [
            {
                path: '',
                component: ClientsComponent
            },
            {
                path: 'nouveau',
                component: ClientFormComponent
            },
            {
                path: ':id',
                component: ClientComponent,
            },
            {
                path: ':id/edit',
                component: ClientFormComponent,
                data: {
                    edit: true
                }
            },
        ]
    },
    {
        path: 'dashboard',
        canActivate: [AuthenticationGuard],
        component: DashboardComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
