// Metodos de propiedad 

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`)
    },
    pausar: function() {
        console.log(`Pausando...`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproduciendoPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar(3840);
reproductor.borrarCancion(3480);
reproductor.crearPlaylist("HOLA");
reproductor.reproduciendoPlaylist("HOLA");
console.log(reproductor);