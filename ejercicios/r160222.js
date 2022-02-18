"use strict";
(function () {
    // Uso de Let y Const
    //  var nombre = 'Alex B';
    //  var edad = 23;
    //  var PERSONAJE = {
    //    nombre: nombre,
    //    edad: edad
    //  };
    const nombre = 'Alex B';
    const edad = 23;
    const personaje = {
        nombre: nombre,
        edad: edad
    };
    const alumno = {
        nombre: 'Jose Perez',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    // console.log(alumno);
    // Convertir esta funcion a una funcion de flecha
    // function resultadoDoble(a, b) {
    //     return (a + b) * 2
    // }
    const resultadoDoble = (a, b) => (a + b) * 2;
    // console.log(resultadoDoble(2, 1));
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       HABILIDAD  = opcional
    //       disciplina   = por defecto = 'karate'
    // function getSkill(nombre, habilidad, disciplina) {
    //     var mensaje;
    //     if (habilidad) {
    //         mensaje = nombre + ' tiene el habilidad de: ' + habilidad + ' y un arma: ' + arma;
    //     } else {
    //         mensaje = nombre + ' tiene un ' + habilidad
    //     }
    // };
    function getSkill(nombre, habilidad, disciplina = 'karate') {
        var mensaje;
        if (habilidad) {
            mensaje = `${nombre} practica ${disciplina} y tiene la habilidad de ${habilidad}`;
        }
        else {
            mensaje = `${nombre} practica ${disciplina}`;
        }
        console.log(mensaje);
    }
    ;
    // getSkill('Chris');
    // getSkill('Chris', 'Atacar a distacia');
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        getAltura() {
            return (this.base * this.altura) / 2;
        }
    }
    const rectangle = new Rectangulo(6, 3);
    console.log(rectangle);
    console.log(rectangle.getAltura());
})();
