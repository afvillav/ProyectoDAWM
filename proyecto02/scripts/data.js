function cargarTabla(id){
    let contenido=""
    document.querySelector('.pokemons').innerHTML=contenido
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(data =>{
        nombre=data.name
        tipos=data.types
        id=data.id
        tipo_txt=""
        if(tipos.length>1){
            tipo1=data.types[0].type.name
            tipo2=data.types[1].type.name
            tipo_txt=`${tipo1}/${tipo2}`
        }else{
            tipos=data.types[0].type.name
            tipo_txt=`${tipos}`
        }
        contenido = `<tr>
          <th scope="row">${id}</th>
          <td>${nombre}</td>
          <td>${tipo_txt}</td>
        </tr>`
        document.querySelector('.pokemons').innerHTML+=contenido
    })
    .catch(console.error);
}

window.onload=function llenarPokemones(){
    document.getElementById("cargar").addEventListener("click", () => {
        for(let i=1; i<=10; i++){
            cargarTabla(i);     
        }
    })
}



