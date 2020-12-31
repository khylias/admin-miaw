import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillsComponent } from './skills/skills.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    {
        path: 'competences',
        component: SkillsComponent
    },
    {
        path: 'connexion',
        component: LoginComponent
    },
    {
        path: 'clients',
        children: [
            {
                path: '',
                component: ClientsComponent
            },
            {
                path: 'nouveau',
                component: ClientFormComponent
            },
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
