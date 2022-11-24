

function mostrar(){
  var x = document.getElementById("busqueda").value.toLowerCase();
  crearTarjeta(x);
  MostraMovs(x);
  llenarStats(x);
}

function crearTarjeta(nombre){
    let contenido=""
    document.querySelector('#tarjetaPoke').innerHTML=contenido
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if(response.status === 404) {
        contenido = `<div class="card" style="width: 20rem;">
        <div class="card-header py-3">
          <h5 class="mb-0 text-center"><strong>No se encontro el pokemon</strong></h5>
        </div>
        </div>`
        document.querySelector('#tarjetaPoke').innerHTML+=contenido
      }
    })
    .then(data =>{
        nombre=data.name
        tipos=data.types
        id=data.id
        sprite=data.sprites.front_default
        peso=data.weight
        altura=data.height
        tipo_txt=""
        if(tipos.length>1){
            tipo1=data.types[0].type.name
            tipo2=data.types[1].type.name
            tipo_txt=`${tipo1}/${tipo2}`
        }else{
            tipos=data.types[0].type.name
            tipo_txt=`${tipos}`
        }
        contenido = `<div class="card" style="width: 20rem;">
        <div class="card-header py-3">
          <h5 class="mb-0 text-center"><strong>Information</strong></h5>
        </div>
        <img src="${sprite}" class="card-img-top" alt="pokemon">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Id: ${id}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Type: ${tipo_txt}</h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Weight: ${peso} hg</li>
            <li class="list-group-item">Height: ${altura} dm</li>
          </ul>
        </div>
      </div>`
        document.querySelector('#tarjetaPoke').innerHTML+=contenido
    })
    .catch(console.error);
}

function MostraMovs(nombre){
  let contenido=""
  document.querySelector('.infoMov').innerHTML=contenido
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
  .then(response => response.json())
  .then(data => {
    mov=data.moves
    if(mov.length <= 15){
      for(let i=0; i<mov.length; i++){
        movi=mov[i].move.name
        infoMov(movi)
      }
    }else{
      for(let i=0; i<=15; i++){
        movi=mov[i].move.name
        infoMov(movi)
      }
    }
  })
  .catch(console.error);
}

function infoMov(nombre){
  fetch(`https://pokeapi.co/api/v2/move/${nombre}`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else if(response.status === 404) {
      contenido = `<tr>
      <th scope="row">No se encontro el movimiento</th>
    </tr>`
      document.querySelector('.infoMov').innerHTML+=contenido
    }
  })
  .then(data => {
    nom=nombre
    tipo=data.type.name
    clase=data.damage_class.name
    pp=data.pp
    descripcion=data.effect_entries[0].short_effect
    poder=data.power
    if(poder==null){
      poder=0;
    }
    src=""
    if(clase=="physical"){
      src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-switch/e/ef/Physical.png?width=325"
    }else if(clase=="status"){
      src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-switch/d/d0/Status.png?width=325"
    }else if(clase=="special"){
      src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-switch/2/24/Special.png?width=325"
    }
    contenido = `<tr>
      <th scope="row">${nom}</th>
      <td>${tipo}</td>
      <td><img src="${src}" alt="tipo">  ${clase}</td>
      <td>${pp}</td>
      <td>${poder}</td>
      <td>${descripcion}</td>
    </tr>`
    document.querySelector('.infoMov').innerHTML+=contenido
  })
  .catch(console.error);
}

function llenarStats(nombre){
  var etiquetas=document.getElementById("stats").querySelectorAll("tr");
  for(let i=0;i<stats.length;i++){
    var borrar=etiquetas[i].querySelector("th").nextSibling;
    borrar.remove();
  }
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
  .then(response => response.json())
  .then(data =>{
    hp=data.stats[0].base_stat
    atk=data.stats[1].base_stat
    def=data.stats[2].base_stat
    spatk=data.stats[3].base_stat
    spdef=data.stats[4].base_stat
    spd=data.stats[5].base_stat
    stats=[hp,atk,def,spatk,spdef,spd]
    for(let i=0;i<stats.length;i++){
      plantilla=`<td style="--size: calc( ${stats[i]} / 255 )"><span class="data">${stats[i]}</span></td>`
      etiquetas[i].querySelector("th").insertAdjacentHTML('afterend',plantilla)
    }
  })
  .catch(console.error)
}