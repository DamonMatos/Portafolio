import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {

    skills = [
      'HTML',
      'CSS',
      'JavaScript',
      'Angular 20',
      'GIT',
      'Github',
      '.NET Core',
      'C#',
      'SQL Server',
    ];

}
