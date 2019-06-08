import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';
import { async } from '@angular/core/testing';

@Component({
    selector: 'qr-code-generator',
    templateUrl: './qr-code-generator.html',
    styleUrls: ['./qr-code-generator.scss'],
})
export class QRCodeGeneratorPage {
    qrData: string;
    geolocationErrorMessage: string;
    qrCodeForm = new FormGroup({
        qrCodeText: new FormControl(''),
    });

    constructor() {}

    handleGenerateQRCode() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        } else {
            this.qrData = this.qrCodeForm.get('qrCodeText').value;
        }
    }

    showPosition = (position: any) => {
        console.log('suceess', position);
        this.qrData = this.qrCodeForm.get('qrCodeText').value + ':lat:' + position.coords.latitude + ':long:' + position.coords.longitude;
    };

    showError = (error: any) => {
        this.geolocationErrorMessage = error.message;
        console.log(this.geolocationErrorMessage)
    };
}
