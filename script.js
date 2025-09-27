const btn = document.getElementById("bt1")
const input = document.getElementById("int")

const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")




async function getData(cityName) {
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f3ffd9c7e28458b9ec83445252908&q=${cityName}&aqi=no`)
   return  promise.json()
}


btn.addEventListener('click',async ()=>{
    const value = input.value 
    const result = await getData(value)
    console.log(result)
    cityName.innerText = `LOCATION : ${result.location.name}, ${result.location.region}, ${result.location.country}`
    cityTime.innerText = `LOCALTIME : ${result.location.localtime}`
    cityTemp.innerText = `TEMPERATURE : ${result.current.temp_c}`
})
