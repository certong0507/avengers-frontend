import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DashboardService } from './dashboard.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.scss'],
})
export class DashboardPage {
    newHeroForm = new FormGroup({
        heroName: new FormControl(''),
    });

    constructor(private dashboardService: DashboardService) {}

    handleAddHero() {
        this.dashboardService.addHero(this.newHeroForm.value.name).subscribe(
            //TODO: Handle backend response. Refer to login.page.ts
        )
    }
}
