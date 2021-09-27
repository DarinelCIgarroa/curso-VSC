import { batman } from './extra/classes';

/*
    Objetivo:
        Cambiar únicamente la refencia de SuperHeroe a Heroe
        OJO!: Pero no reemplazar los strings

    Tips:
        Replace Symbol
        F2
*/


const wolverine = new batman();
const ironman   = new batman();
const spiderman = new batman();

function saludar() {
    return 'El SuperHeroe Wolverine es genial!';
}

function gritar() {
    return 'El SuperHeroe en este string no se debe de cambiar';
}

