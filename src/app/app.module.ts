import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputPasswordComponent } from '../app/modules/login/components/input-password/input-password';
import { InputTextComponent } from '../app/modules/login/components/input-text/input-text';
import { LoginPage } from './modules/login/login.page';
import { HomePage } from './modules/home/home.page';
import { DashboardPage } from './modules/dashboard/dashboard.page';
import { QRCodeGeneratorPage } from './modules/qr-code/qr-code-generator/qr-code-generator.page';
import { QRCodeReaderPage } from './modules/qr-code/qr-code-reader/qr-code-reader.page';
import { BarcodeReaderPage } from './modules/barcode/barcode-reader/barcode-reader.page';
import { PageNotFoundPage } from './modules/page-not-found/page-not-found.page';

@NgModule({
    declarations: [
        AppComponent,
        InputPasswordComponent,
        InputTextComponent,
        LoginPage,
        HomePage,
        DashboardPage,
        QRCodeGeneratorPage,
        QRCodeReaderPage,
        BarcodeReaderPage,
        PageNotFoundPage,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ClarityModule,
        ReactiveFormsModule,
        HttpClientModule,
        QRCodeModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY'
          })
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
