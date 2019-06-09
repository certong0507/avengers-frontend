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
    targetLat: number = 3.225948;
    targetLong: number = 101.635496;
    myLat: number;
    myLong: number;
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
        this.qrData = this.qrCodeForm.get('qrCodeText').value + ':myLat:' + position.coords.latitude + ':myLong:' + position.coords.longitude;
        this.myLat = position.coords.latitude;
        this.myLong = position.coords.longitude;

        const distance = this.calculateDistance(this.targetLat, this.targetLong, this.myLat, this.myLong);
        console.log('g: ', this.targetLat, this.targetLong, this.myLat, this.myLong);
        console.log('d: (meters) ', distance);
    };

    showError = (error: any) => {
        this.geolocationErrorMessage = error.message;
        console.log(this.geolocationErrorMessage);
    };

    // 2*asin(sqrt((sin((lat1-lat2)/2))^2 +
    // cos(lat1)*cos(lat2)*(sin((lon1-lon2)/2))^2))

    // acos(sin(lat1)*sin(lat2)+cos(lat1)*cos(lat2)*cos(lon1-lon2))

    calculateDistance = (lat1: number, long1: number, lat2: number, long2: number) => {
        // Translate to a distance
        var distance =
            // Math.sin(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI/ 180) +
            // Math.cos(lat1 * Math.PI/ 180) * Math.cos(lat2 * Math.PI/ 180) * Math.cos((Math.abs(long1 - long2) * Math.PI) / 180);
            Math.sin(lat1) * Math.sin(lat2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.cos(Math.abs(long1 - long2));

        // Return the distance in miles
        //return Math.acos(distance) * 3958.754;

        // Return the distance in meters
        // return Math.acos(distance) * 6370981.162;
        return 6371 * Math.acos(
            Math.sin(lat1) * Math.sin(lat2)
            + Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1));
    };
}
