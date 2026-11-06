import { inject, NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [
    MatIconModule,
  ],
  exports: [
    MatIconModule,
  ],
})

export class MaterialDesignIconsModule {
  constructor() {
    const matIconRegistry = inject(MatIconRegistry);
    const domSanitizer = inject(DomSanitizer);

    matIconRegistry.addSvgIcon('facebook', domSanitizer.bypassSecurityTrustResourceUrl('images/facebook.svg'));
    matIconRegistry.addSvgIcon('instagram', domSanitizer.bypassSecurityTrustResourceUrl('images/instagram.svg'));
    matIconRegistry.addSvgIcon('quotes-end', domSanitizer.bypassSecurityTrustResourceUrl('images/quotes-end.svg'));
    matIconRegistry.addSvgIcon('arrow-forward', domSanitizer.bypassSecurityTrustResourceUrl('images/arrow-forward.svg'));
    matIconRegistry.addSvgIcon('sacrament-baptism', domSanitizer.bypassSecurityTrustResourceUrl('images/sacrament-baptism.svg'));
    matIconRegistry.addSvgIcon('sacrament-eucharist', domSanitizer.bypassSecurityTrustResourceUrl('images/sacrament-eucharist.svg'));
    matIconRegistry.addSvgIcon('sacrament-confirmation', domSanitizer.bypassSecurityTrustResourceUrl('images/sacrament-confirmation.svg'));
    matIconRegistry.addSvgIcon('sacrament-marriage', domSanitizer.bypassSecurityTrustResourceUrl('images/sacrament-marriage.svg'));
  }
}
