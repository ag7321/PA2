function nuevoPerfil(){
    let url = "https://api.chucknorris.io/jokes/random";

    
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            
            let elemento = document.getElementById("contenedor");

            elemento.innerHTML = `
                <p>${data.created_at}</p>
                <img src="${data.icon_url}">
                <p>${data.updated_at}</p>
                <p>${data.url}</p>
                <p>${data.value}</p>
                `;

            console.log(data);

            let arrPersona = new Array();
            arrPersona.push(data);

            showPeople(arrPersona);
        })
        .catch(err => console.log())   
}

function showPeople(arrPersona){
    let show = document.getElementById('llamar');
    
    arrPersona.forEach(function(arrPersona) {
        show.innerHTML += `
        <tr>
                <th scope="row">`+arrPersona.created_at+`</th>
                <td><img src="`+ arrPersona.icon_url+`"width="50px" height="50px"></td>
                <td>`+arrPersona.updated_at+`</td>
                <td>`+arrPersona.url+`</td>
                <td>`+arrPersona.value+`</td>
        </tr>`
        
    });
}