import { Inject, OnInit } from '@angular/core';
import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren,PLATFORM_ID } from '@angular/core';
//import { isPlatformBrowser } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from "../projects/projects.component";
@Component({
  selector: 'app-home',
  imports: [AboutComponent, ContactComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  //@ViewChildren('reveal') reveals!: QueryList<ElementRef>;
  
  //constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


  fullText = "HOLA, SOY VICTOR MATOS";
  displayedText = '';
  private index = 0;
  
  ngOnInit(): void {
    this.typeWriter();
  }

  // ngAfterViewInit(): void {

  //   if (!isPlatformBrowser(this.platformId)) {
  //     return;
  //   }

  //   const observer = new IntersectionObserver(
  //     entries => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add(
  //             'opacity-100',
  //             'translate-x-0'
  //           );
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     { threshold: 0.2 }
  //   );

  //   this.reveals.forEach(el =>
  //     observer.observe(el.nativeElement)
  //   );
  // }

  typeWriter() {
    if (this.index < this.fullText.length) {
        this.displayedText += this.fullText.charAt(this.index);
        this.index++;
        setTimeout(() => this.typeWriter(), 100); 
    }
  }


}
