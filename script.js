const form = document.querySelector('form')
const input = document.querySelector('.input')
const cards = document.querySelector('.cards')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    countryFunc(input.value.toUpperCase());
    input.value = ''
}) 

async function countryFunc(country) {
    const res = await fetch(
        `https://api.api-ninjas.com/v1/countryflag?country=${country}`,

        {
            headers: {
                "X-Api-Key": "GnxpyjjORxM1tGWnAHb104SzKiIG8McqnS7opIpX"
            }
        }
    )
    const data = await res.json()
    render(data, cards)
}

function render(data, parent){
    parent.innerHTML = 
    `
       <div class="card">
        <img src="${data.square_image_url}" class="flag" alt="...">
            <div class="card-textWrap"> 
                <h2 class="title">${data.country}</h2>
                <p class="text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut rem omnis dolore quasi non reprehenderit saepe, nisi inventore accusantium excepturi consectetur porro. </p>
            </div>
        </div>
    `
}
