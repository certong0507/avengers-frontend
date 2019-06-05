import { Component } from '@angular/core';
import moment from 'moment';

@Component({
   selector: 'qr-code-generator',
   templateUrl: './qr-code-generator.html',
   styleUrls: ['./qr-code-generator.scss']
})
export class QRCodeGeneratorPage {
   qrCodeData: string;

   constructor() {
      this.qrCodeData = '';
   }

   onGenerateQRCode() {
      this.qrCodeData = `Current time : ${moment().format('hh:mm:ss')}.`
   }
}