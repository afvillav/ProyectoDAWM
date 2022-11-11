function cargarTabla(id){
    fetch("https://pokeapi.co/api/v2/pokemon/${id}/")
    .then(response => response.json())
    .then(data =>{
        
    })
}