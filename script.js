const apiKey='e866ac8f08c08e2e6c8f10eef88d0f30';
//Define uma constante que armazena a sua chave de API

const city = document.getElementById('city');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
//Define as informações que queremos trazer

const apiUrl='https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&appid=' + apiKey;

fetch()
fetch(apiUrl)
.then(Response => Response.json())//Converte a resposta em javaScript
.then(data=>{
    console.log(data); // Imprime os dados da API no console
    city.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp - 273.15) + '°C';
    condition.innerHTML = data.weather[0].description;
});
