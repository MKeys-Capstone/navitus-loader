import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { PREP_STATUS_VALUES, PrepStatus } from './util/constants';
@Component({
  selector: 'app-root',
  imports: [LoaderComponent],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  allSteps: PrepStatus[] = PREP_STATUS_VALUES;
  index: number = 0;
  currentStepName: PrepStatus = this.allSteps[this.index];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'custom-pdf', // Icon name
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/pdf.svg') // Path to your SVG
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.index++;
      this.currentStepName = this.allSteps[this.index];
    }, 2000);
    setTimeout(() => {
      this.index++;
      this.currentStepName = this.allSteps[this.index];
    }, 4000);
  }
}
