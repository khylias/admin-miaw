import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
    {
        path: 'competences',
        component: SkillsComponent
    },
    {
        path: 'clients',
        component: ClientsComponent
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
