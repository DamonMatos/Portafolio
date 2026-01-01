import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  ListaProyectos: any[]= [
      {
        nombre: 'Proyecto de Gestion de Procesos',
        descripcion: 'Desarrollo de aplicación web enfocada en mejorar procesos mediante una interfaz moderna, responsiva y fácil de usar. Sistema web diseñado para la gestión eficiente de información, aplicando buenas prácticas de desarrollo frontend.Aplicación de software orientada a resolver una necesidad específica mediante soluciones tecnológicas actuales.',
        imagen: 'assets/background/1.png',
        enlace: '<link>'
      },
      {
        nombre: 'Sistema Web con Angular para Accesos',
        descripcion: 'Aplicación web desarrollada con Angular, enfocada en una experiencia de usuario clara, rápida y responsiva.Proyecto frontend con diseño adaptable y componentes reutilizables, siguiendo estándares modernos de desarrollo web. Interfaz web interactiva creada para optimizar la navegación y usabilidad del sistema.',
        imagen: 'assets/background/2.png',
        enlace: '<link>'
      },
      {
        nombre: 'Proyecto de Software de Formación Académica',
        descripcion: 'Proyecto de software desarrollado como parte de formación académica, aplicando conocimientos de desarrollo web. Aplicación web educativa orientada al aprendizaje y la gestión de información.',
        imagen: 'assets/background/3.png',
        enlace: '<link>'
      }
  ]
    

}
