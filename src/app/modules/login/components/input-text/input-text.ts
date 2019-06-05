import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'input-text',
    templateUrl: './input-text.html',
    styleUrls: ['./input-text.scss'],
})
export class InputTextComponent {
    @Input() form: FormControl;
    @Input() username: string;
}
