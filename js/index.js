const cardsContainer = document.querySelector(".swiper-wrapper")



const url = "../cards.json"

fetch (url)
.then(resp => resp.json())
.then(dados => {

    console.log(dados)

    dados.forEach((el,i) => {
        console.log(el.imagem)
        const cardBox = document.createElement("div")
        cardBox.className = "swiper-slide"
        cardBox.id = i
        cardBox.innerHTML = `
        
        <div class="imgContainer">
            <img src="${el.imagem}"  id="${i}imageCard" width="400">        
        </div>

        <div class="descContainer">
            <h1 class"idTitulo">${el.id}</h1>
            <p class="descricaoItem">${el.descricao}</p>
        </div>
        
        <div class="valorContainer">

            <div class="vBTC">
                <div class="fa"><i class=" fa-brands fa-bitcoin"></i></div>
                <p class="preco">${el.valorBTC}</p>
            </div>
            
            <div class="vETH">
                <div class="fa"><i class=" fab fa-ethereum"></i></div>
                <p class="preco">${el.valorETH}</p>
            </div>            
        </div>

        <div class="btnContainer">
            <button class="BTNcomprar"> Comprar </button>
        </div>

        `

        cardsContainer.appendChild(cardBox)
        
    })
    const imageCard = document.querySelectorAll('#imageCard')
    const cards = document.querySelectorAll('.swiper-slide')
    
    console.log(cards)

    
    cards.forEach(el => {
        el.onmouseover = () => {
            console.log(el.id)

            const imagem = document.getElementById(`${el.id}imageCard`)
            imagem.style = "transform: scale(1.2)";       
            
            
        }
        el.onmouseout = () => {
            console.log(el.id)

            const imagem = document.getElementById(`${el.id}imageCard`)
            imagem.style = "transform: scale(1)";
            
            
        }
    })

})