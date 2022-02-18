"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function () {
    // const nombre = 'Chris';
    // const apellido = 'Vazquez';
    // const edad = 33;
    // console.log(`${nombre} ${apellido} (Edad: ${edad})`);
    // function make(actividad: string, herramienta?: string, lugar:string = 'Casa') {
    //     if (herramienta) {
    //         console.log(`Actividad es ${actividad} con la herramienta: ${herramienta} en el lugar ${lugar}`);
    //     } else {
    //         console.log(`Actividad de ${actividad} en el lugar ${lugar}`);
    //     }
    // }
    // make('angular', 'window', 'oficina');
    // const miFuncion = function (a: string) {
    //     return a.toUpperCase();
    // }
    // Funcion definida tipo string
    // const miFuncion = function (a: string): string {
    //     return a.toUpperCase();
    // }
    // const funcionF = (a:string) => {
    //     return a.toUpperCase();
    // }
    // Funcion flecha 
    // const funcionF = (a: string) => a.toUpperCase();
    // console.log(funcionF('hola'));
    // const sumar = function (a: number, b: number): number {
    //     return a + b;
    // }
    // const sumarF = (a: number, b: number): number => a + b;
    // console.log(sumarF(2, 2));
    // const persona = {
    //     nombre: 'chris',
    //     saludar() {
    //         setTimeout(() => {
    //             console.log(`Hello ${this.nombre}`);
    //         }, 1000);
    //     }
    // }
    // persona.saludar();
    // const persona = {
    //     nombre: 'chris',
    //     edad: 33,
    //     apellido: 'vazquez'
    // }
    // const { nombre, edad, apellido } = persona;
    // console.log(apellido);
    // const datosF = ({ nombre, apellido }: any) => {
    //     console.log(nombre);
    //     console.log(apellido);
    // }
    // datosF(persona);
    // const personas: string[] = ['juan', 'Pancho', 'Jose'];
    // const [juan, jose, pancho] = personas;
    // console.log(jose);
    // const extArreglo = ([juan, jose, pancho]: string[]) => {
    //     console.log(jose);
    // }
    // extArreglo(personas);
    // const retirarDinero = (monto: number): Promise<number> => {
    //     let dineroActual = 1000;
    //     return new Promise((resolve, reject) => {
    //         if (monto > dineroActual) {
    //             reject('no hay dinero suficiente');
    //         } else {
    //             dineroActual -= monto;
    //             resolve(dineroActual);
    //         }
    //     })
    // }
    // retirarDinero(500)
    //     .then(montoActual => console.log(`Me queda ${montoActual}`))
    //     .catch(err => console.log(err));
    // Interface 
    // interface SerHumarno {
    //     nombre: string;
    //     apellido: string;
    //     edad: number;
    //     cargo: string;
    //     ciudad?: string;
    //     saludar: () => void;
    // }
    // const persona: SerHumarno = {
    //     nombre: 'chris',
    //     apellido: 'Vazquez',
    //     edad: 33,
    //     cargo: 'Coordinador',
    //     saludar() {
    //         console.log(`Hola soy ${this.nombre}`);
    //     }
    // }
    // persona.ciudad = 'Guadalajara';
    // console.table(persona);
    // persona.saludar();
    // Ejercicio interfaces que cumplean con lo siguiente
    // interface Equipamento {
    //     estereo?: string;
    //     rines?: string;
    //     aa?: boolean;
    //     spoiler?: boolean;
    //     vidrioselectricos?: boolean;
    // }
    // interface Vehiculo {
    //     marca: string;
    //     modelo: string;
    //     version: string;
    //     anio: number;
    //     color: string;
    //     equipamento?: Equipamento;
    //     encenderVehiculo: () => void;
    //     observaciones?: String;
    // }
    // Classe definida 
    // class Animal {
    //     private especie: string = 'Mamimero';
    //     public nombre: string = 'leon';
    //     static color: string = 'Amarilo';
    // }
    // const animal = new Animal();
    // console.table(animal);
    // class Animal {
    //     especie: string;
    //     nombre: string;
    //     color: string;
    //     constructor(especie: string, nombre: string, color: string) {
    //         this.especie = especie;
    //         this.nombre = nombre;
    //         this.color = color;
    //     }
    // }
    // const animal = new Animal('Mamifero', 'Leon', 'Rojo');
    // console.table(animal);
    // class Animal {
    //     constructor(
    //         public especie: string,
    //         public nombre: string,
    //         public color: string) {
    //     }
    // }
    // const animal = new Animal('Mamifero', 'Leon', 'Rojo');
    // console.table(animal);
    // class Perro extends Animal {
    //     constructor(
    //         public nombre: string,
    //         public raza: string
    //     ) {
    //         super('Mamifero', 'Leon', 'Rojo')
    //     }
    // }
    // const perro = new Perro('Milo', 'PAstor');
    // console.table(perro);
    // function adivina<T>(argumento: T) {
    //     return argumento;
    // }
    // const soyString = adivina<string>('Soy una cadena');
    // const SoyNumber = adivina<number>(1234);
    // const soyBooleano = adivina<boolean>(true);
    // const soyObjeto = adivina<{ nombre: string }>({
    //     nombre: 'chris'
    // });
    function impirmirClaseConsola(constructorClase) {
        console.log(constructorClase);
    }
    let Animal = class Animal {
        constructor(especie, nombre, color) {
            this.especie = especie;
            this.nombre = nombre;
            this.color = color;
        }
        imprimirDatos() {
            console.log(`${this.especie}, ${this.nombre}, ${this.color}`);
        }
    };
    Animal = __decorate([
        impirmirClaseConsola
    ], Animal);
})();
