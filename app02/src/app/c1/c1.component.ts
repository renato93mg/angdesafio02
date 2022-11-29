import { Component } from '@angular/core';

interface Alumno{
  id:number;
  nombre:string;
  apellido:string;
}

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
  nombre:string='Listado de alumnos';
  hayError:boolean=true;

  arreglo:Alumno[]=[
    {id:1,nombre:'Kevin',apellido:'De Bruyne'},
    {id:2,nombre:'Kylian',apellido:'Mbappe'},
    {id:3,nombre:'Lionel',apellido:'Messi'},
  ]
}
