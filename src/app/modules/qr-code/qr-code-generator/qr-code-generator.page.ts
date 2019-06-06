import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';

@Component({
    selector: 'qr-code-generator',
    templateUrl: './qr-code-generator.html',
    styleUrls: ['./qr-code-generator.scss'],
})
export class QRCodeGeneratorPage {
    qrData: string;
    qrCodeForm = new FormGroup({
        qrCodeText: new FormControl(''),
    });

    constructor() {}

    onGenerateQRCode() {
      this.qrData = this.qrCodeForm.get('qrCodeText').value
    }
}
