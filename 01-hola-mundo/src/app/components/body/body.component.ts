import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html' 
})

export class BodyComponent {

    mostrar= true;

    pelicula: any = {
        nombre: 'Spider - Man',
        descripcion: 'Spider-Man, traducido en ocasiones como el Hombre Araña, ​​es un personaje creado por los estadounidenses Stan Lee y Steve Ditko, ​​e introducido en el cómic Amazing Fantasy n.° 15, publicado por Marvel Comics en agosto de 1962.'
    };

    personajes: string[] = ['Peter Parker', 'Mary Jane', 'Norman Osborn', 'May Parker', 'Tio Ben']

}