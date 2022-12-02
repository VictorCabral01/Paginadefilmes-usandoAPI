
const botao = document.getElementById('local')

botao.addEventListener('click', form)

function form (e){

 e.preventDefault();
 
 const form = document.querySelector('#procurar').value
 

if(form){

    const _url = `` // Cole aqui a URL da dua API 

    const _opition= {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        cache: 'default'
    }

    fetch(_url, _opition).then(function(response){


        if(!response.ok) throw new erro('erro ao executar');

        return response.json()
    }).then(function(data){ 
        console.log(data)

        let newContent =""
        for(let i=1 ; i< data.Search.length; i++){
         
            newContent += `<li class="card"><img class="img"src="${data.Search[i].Poster}">`
            newContent +=`<div class="texto">${data.Search[i].Title}</div>`
            newContent +=`<div class="ano">${data.Search[i].Year}</div></li>`
        }
   
         document.getElementById('title').innerHTML= newContent

    })


} else {
       alert('Digite um Filme')
}




}





