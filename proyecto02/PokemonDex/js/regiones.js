
window.onload=function mostrar(){
    for(let i=1; i<=8; i++){
        llenarDesplegable(i);     
    }
    llenarTipos(1,898);
}

function mostrarTipo(){
    llenarRegion();
}

function llenarRegion(){
    let region = document.getElementById("pokeregiones").value;
    if(region=="0"){
        inicio=1
        final=898
      }else{
        inicio=0
        final=0
        if(region == "1"){
            inicio=1
            final=151
        }if(region == "2"){
            inicio=152
            final=251   
        }if(region == "3"){
            inicio=252
            final=386
        }if(region == "4"){
            inicio=387
            final=494
        }if(region == "5"){
            inicio=495
            final=649
        }if(region == "6"){
            inicio=650
            final=721
        }if(region == "7"){
            inicio=722
            final=809
        }if(region == "8"){
            inicio=810
            final=898
        }
        llenarTipos(inicio,final);
}
}


function llenarTipos(inicio,final){
    plantilla=""
    document.querySelector('#tipos').innerHTML = plantilla;
    let normal=0
    let fighting=0
    let flying=0
    let poison=0
    let ground=0
    let rock=0
    let bug=0
    let ghost=0
    let steel=0
    let fire=0
    let water=0
    let grass=0
    let electric=0
    let psychic=0
    let ice=0
    let dragon=0
    let dark=0
    let fairy=0
    for(let i=inicio; i<=final; i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(response => response.json())
        .then(data => {
            tipos=data.types
            if(tipos.length>1){
                for(let i=0; i<2;i++){
                    tipo=data.types[i].type.name
                    if(tipo=="normal"){
                        normal++;
                    }if(tipo=="fighting"){
                        fighting++;
                    }if(tipo=="flying"){
                        flying++
                    }if(tipo=="poison"){
                        poison++;
                    }if(tipo=="ground"){
                        ground++;
                    }if(tipo=="rock"){
                        rock++;
                    }if(tipo=="bug"){
                        bug++;
                    }if(tipo=="ghost"){
                        ghost++;
                    }if(tipo=="steel"){
                        steel++;
                    }if(tipo=="fire"){
                        fire++;
                    }if(tipo=="water"){
                        water++;
                    }if(tipo=="grass"){
                        grass++;
                    }if(tipo=="electric"){
                        electric++;
                    }if(tipo=="psychic"){
                        psychic++;
                    }if(tipo=="ice"){
                        ice++;
                    }if(tipo=="dragon"){
                        dragon++;
                    }if(tipo=="dark"){
                        dark++;
                    }if(tipo=="fairy"){

                        fairy++;
                    }
            }
            }else{
                tipo=data.types[0].type.name
                if(tipo=="normal"){
                    normal++
                }if(tipo=="fighting"){
                    fighting++
                }if(tipo=="flying"){
                    flying++
                }if(tipo=="poison"){
                    poison++
                }if(tipo=="ground"){
                    ground++
                }if(tipo=="rock"){
                    rock++
                }if(tipo=="bug"){
                    bug++
                }if(tipo=="ghost"){
                    ghost++
                }if(tipo=="steel"){
                    steel++
                }if(tipo=="fire"){
                    fire++
                }if(tipo=="water"){
                    water++
                }if(tipo=="grass"){
                    grass++
                }if(tipo=="electric"){
                    electric++
                }if(tipo=="psychic"){
                    psychic++
                }if(tipo=="ice"){
                    ice++
                }if(tipo=="dragon"){
                    dragon++
                }if(tipo=="dark"){
                    dark++
                }if(tipo=="fairy"){
                    fairy++
                }
        }
        plantilla=`<tr>
        <th scope="row">normal </th>
        <td style="--size: calc( ${normal} / ${final-inicio} )"><span class="data">${normal}</span></td>
      </tr>
      <tr>
        <th scope="row">fighting </th>
        <td style="--size: calc( ${fighting} / ${final-inicio} )"><span class="data">${fighting}</span></td>
      </tr>
      <tr>
        <th scope="row">flying </th>
        <td style="--size: calc( ${flying} / ${final-inicio} )"><span class="data">${flying}</span></td>
      </tr>
      <tr>
        <th scope="row">poison </th>
        <td style="--size: calc( ${poison} / ${final-inicio} )"><span class="data">${poison}</span></td>
      </tr>
      <tr>
        <th scope="row">ground </th>
        <td style="--size: calc( ${ground} / ${final-inicio} )"><span class="data">${ground}</span></td>
      </tr>
      <tr>
        <th scope="row">rock </th>
        <td style="--size: calc( ${rock} / ${final-inicio} )"><span class="data">${rock}</span></td>
      </tr>
      <tr>
          <th scope="row">bug </th>
          <td style="--size: calc( ${bug} / ${final-inicio} )"><span class="data">${bug}</span></td>
      </tr>
      <tr>
          <th scope="row">ghost </th>
          <td style="--size: calc( ${ghost} / ${final-inicio} )"><span class="data">${ghost}</span></td>
      </tr>
      <tr>
          <th scope="row">steel </th>
          <td style="--size: calc( ${steel} / ${final-inicio} )"><span class="data">${steel}</span></td>
      </tr>
      <tr>
          <th scope="row">fire </th>
          <td style="--size: calc( ${fire} / ${final-inicio} )"><span class="data">${fire}</span></td>
      </tr>
      <tr>
          <th scope="row">water </th>
          <td style="--size: calc( ${water} / ${final-inicio} )"><span class="data">${water}</span></td>
      </tr>
      <tr>
          <th scope="row">grass </th>
          <td style="--size: calc( ${grass} / ${final-inicio} )"><span class="data">${grass}</span></td>
      </tr>
      <tr>
          <th scope="row">electric </th>
          <td style="--size: calc( ${electric} / ${final-inicio} )"><span class="data">${electric}</span></td>
      </tr>
      <tr>
          <th scope="row">psychic </th>
          <td style="--size: calc( ${psychic} / ${final-inicio} )"><span class="data">${psychic}</span></td>
      </tr>
      <tr>
          <th scope="row">ice </th>
          <td style="--size: calc( ${ice} / ${final-inicio} )"><span class="data">${ice}</span></td>
      </tr>
      <tr>
          <th scope="row">dragon </th>
          <td style="--size: calc( ${dragon} / ${final-inicio} )"><span class="data">${dragon}</span></td>
      </tr>
      <tr>
          <th scope="row">dark </th>
          <td style="--size: calc( ${dark} / ${final-inicio} )"><span class="data">${dark}</span></td>
      </tr>
      <tr>
          <th scope="row">fairy </th>
          <td style="--size: calc( ${fairy} / ${final-inicio} )"><span class="data">${fairy}</span></td>
      </tr>`
      document.querySelector('#tipos').innerHTML = plantilla;
    })
    .catch(console.error);
    }

}


function llenarDesplegable(i){
    fetch(`https://pokeapi.co/api/v2/generation/${i}`)
    .then(response => response.json())
    .then(data => {
        region=data.main_region.name
        valor=data.id
        let option=document.createElement("option")
        option.value=valor
        option.innerHTML=region
        document.getElementById("pokeregiones").appendChild(option)
    })
}



  
