const contactos = [{id: 1, nombreCompleto:"pepito perez", telefono:"3195195819"}, 
{id: 2, nombreCompleto:"pepita perez", telefono:"3195874854"}, 
{id: 3, nombreCompleto:"yoli osorio", telefono:"3216547895"}, 
{id: 4, nombreCompleto:"fer osorio", telefono:"3257894564"}, 
{id: 5, nombreCompleto:"daniel osorio", telefono:"3187894562"}, 
{id: 6, nombreCompleto:"manyu osorio", telefono:"3257894561"}]
window.alert("añadir nuevo contacto");
const nuevoContacto = (contactos.push = {id: window.prompt("ingrese la posición del contacto"), 
nombre: window.prompt("ingrese el nombre"), 
apellido: window.prompt("ingrese el apellido completo"),
telefono: window.prompt ("ingrese numer de telefono"),
ubicaciones: window.prompt("ingrese el lugar y la dirección"),});
console.log(contactos);
contactos.splice( 1, 1);
const eliminados = contactos.splice(0, 1);
console.log("Eliminado: ", eliminados);
