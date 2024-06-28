
const socketController =(socket)=>{
    //  console.log(socket.client.id);

     socket.on("saludar",( nombre ,callback  )=>{
        callback(`Bienvenid@ ${nombre}`)
        socket.broadcast.emit("bienvenida",`${nombre} se ha unido a la conversacion`)
     })

}

export {socketController}




// const socketController = (socket) => {
    
//     console.log('Cliente conectado', socket.id );

//     socket.on('disconnect', () => {
//         console.log('Cliente desconectado', socket.id );
//     });

//     socket.on('enviar-mensaje', ( payload, callback ) => {
//         //se recibe el callback para responder en el 
//         //ejemplo de bd, solo el cliente que pidio, recibe
//         const id = 123456789;
//         callback( id );//primero sin estas dos lineas
//         //es como un feedback de que que todo se ejecuta correctamente

//         socket.broadcast.emit('enviar-mensaje', payload );
//        //socket.emit('enviar-mensaje', payload );

//     })

// }



// export {
//     socketController
// }

