
const socket = io();

socket.on('connect',()=>{

  console.log('Conectado');

})

socket.on('bienvenida',(mensaje)=>{
  console.log(mensaje);
})



btnIngresar.addEventListener('click',()=>{
    socket.emit("saludar", textinput.value,    (  mensaje  )=>{
        console.log(mensaje);
    })
})



console.log('Escritorio HTML');