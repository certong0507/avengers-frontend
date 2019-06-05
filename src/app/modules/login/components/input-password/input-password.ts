import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'input-password',
    templateUrl: './input-password.html',
    styleUrls: ['./input-password.scss'],
})
export class InputPasswordComponent {
    @Input() form: FormControl;
    @Input() password: string;
}
