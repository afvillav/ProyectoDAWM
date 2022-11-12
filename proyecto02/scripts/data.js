function cargarTabla(id){
    fetch("https://pokeapi.co/api/v2/pokemon/${id}/")
    .then(response => response.json())
    .then(data =>{
        tipos=data.types
        nombre=data.name
        id=data.id
        tipo_txt=""
        if(tipos.length>1){
            tipo1=data.types[0].type.name
            tipo2=data.types[1].type.name
            tipo_txt="${tipo1}/${tipo2}"
        }else{
            tipos=data.types[0].type.name
            tipo_txt="${tipo1}"
        }
        let cont_tabla= `<tr>
        <th scope="row">${id}</th>
        <td>${nombre}</td>
        <td>${tipo_txt}</td>
        </tr>`

        document.querySelector(".pokemons").innerHTML+=cont_tabla
    })
    .catch(console.error);
}