const contactos = [{id: 1, nombreCompleto:"pepito perez", telefono:"3195195819"}, {id: 2, nombreCompleto:"pepita perez", telefon:"3195874854"}, {id: 3, nombreCompleto:"yoli osorio", telefon:"3216547895"}, {id: 4, nombreCompleto:"fer osorio", telefon:"3257894564"}, {id: 5, nombreCompleto:"daniel osorio", telefon:"3187894562"}, {id: 6, nombreCompleto:"manyu osorio", telefon:"3257894561"}]
window.alert("añadir nuevo contacto");
const nuevoContacto = (contactos.push = {id: 7, nombreCompleto: window.prompt("ingresa el nombre completo"), telefono: window.prompt ("ingrese numer de telefono")});
console.log(contactos),
contactos.splice( 1, 1);
const eliminados = contactos.splice(0, 1)
console.log("Eliminido: ", eliminados)
