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

    matIconRegistry.addSvgIcon('facebook', domSanitizer.bypassSecurityTrustResourceUrl('/images/facebook.svg'));
    matIconRegistry.addSvgIcon('instagram', domSanitizer.bypassSecurityTrustResourceUrl('/images/instagram.svg'));
    matIconRegistry.addSvgIcon('quotes-end', domSanitizer.bypassSecurityTrustResourceUrl('/images/quotes-end.svg'));
    matIconRegistry.addSvgIcon('arrow-forward', domSanitizer.bypassSecurityTrustResourceUrl('/images/arrow-forward.svg'));
  }
}
