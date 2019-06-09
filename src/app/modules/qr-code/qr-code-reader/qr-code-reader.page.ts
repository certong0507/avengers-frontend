import { Component } from '@angular/core';
import jsQR, { QRCode } from 'jsqr';

import FakeUser from '../../../constant/fake-user.json';

@Component({
    selector: 'qr-code-reader',
    templateUrl: './qr-code-reader.html',
    styleUrls: ['./qr-code-reader.scss'],
})
export class QRCodeReaderPage {
    canvasElement: HTMLCanvasElement;
    canvasContext: CanvasRenderingContext2D;
    // outputContainer: HTMLDivElement;
    // outputMessage: HTMLDivElement;
    outputData: HTMLDivElement;
    video: HTMLVideoElement;

    validUser: boolean;
    qrcodeResult: string = 'No QR code detected.';

    constructor() {
        console.log('constructor()...');
    }

    ngOnInit(): void {
        console.log('ngOnInit()...');

        this.canvasElement = <HTMLCanvasElement>document.getElementById('scan-canvas');
        this.canvasContext = this.canvasElement.getContext('2d');
        // this.outputContainer = <HTMLDivElement>document.getElementById('output');
        // this.outputMessage = <HTMLDivElement>document.getElementById('outputMessage');
        this.outputData = <HTMLDivElement>document.getElementById('outputData');
        this.video = <HTMLVideoElement>document.createElement('video');
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(async (stream: MediaStream) => {
            this.video.srcObject = stream;
            this.video.setAttribute('playsinline', 'true'); // required to tell iOS safari we don't want fullscreen
            await this.video.play();
            requestAnimationFrame(this.tick.bind(this));
        });
    }

    drawLine(begin: any, end: any, color: string): void {
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(begin.x, begin.y);
        this.canvasContext.lineTo(end.x, end.y);
        this.canvasContext.lineWidth = 4;
        this.canvasContext.strokeStyle = color;
        this.canvasContext.stroke();
    }

    tick(): void {
        if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
            this.canvasElement.hidden = false;
            // this.outputContainer.hidden = false;

            this.canvasElement.height = this.video.videoHeight;
            this.canvasElement.width = this.video.videoWidth;
            this.canvasContext.drawImage(this.video, 0, 0, this.canvasElement.width, this.canvasElement.height);
            const imageData: ImageData = this.canvasContext.getImageData(0, 0, this.canvasElement.width, this.canvasElement.height);
            const code: QRCode = jsQR(imageData.data, imageData.width, imageData.height);
            if (code) {
                this.drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58');
                this.drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58');
                this.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58');
                this.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58');
                this.qrcodeResult = code.data;

                for (let i = 0; i < FakeUser.length; i++) {
                    if (FakeUser[i].name === code.data) {
                        this.validUser = true;
                        break;
                    }
                }
            }
        }
        requestAnimationFrame(this.tick.bind(this));
    }
}
