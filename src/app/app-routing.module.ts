import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LoginPage } from './modules/login/login.page';
import { HomePage } from './modules/home/home.page';
import { DashboardPage } from './modules/dashboard/dashboard.page';
import { QRCodeGeneratorPage } from './modules/qr-code/qr-code-generator/qr-code-generator.page';
import { QRCodeReaderPage } from './modules/qr-code/qr-code-reader/qr-code-reader.page';
import { BarcodeReaderPage } from './modules/barcode/barcode-reader/barcode-reader.page';
import { PageNotFoundPage } from './modules/page-not-found/page-not-found.page';

const routes: Routes = [
    {
        path: '',
        // canActivate: [AuthGuard],
        component: HomePage,
        children: [
            { path: 'dashboard', component: DashboardPage },
            { path: 'qrcode/generator', component: QRCodeGeneratorPage },
            { path: 'qrcode/reader', component: QRCodeReaderPage },
            { path: 'barcode/reader', component: BarcodeReaderPage },
        ],
    },

    { path: 'login', component: LoginPage },
    { path: '**', component: PageNotFoundPage },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
