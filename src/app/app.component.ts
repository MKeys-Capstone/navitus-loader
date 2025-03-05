import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
@Component({
  selector: 'app-root',
  imports: [LoaderComponent],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'custom-pdf', // Icon name
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/pdf.svg') // Path to your SVG
    );
  }

  ngOnInit(): void {}
}
