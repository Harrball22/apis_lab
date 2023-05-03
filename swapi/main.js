let button = document.querySelector("button")

button.addEventListener("click", buttonClicked)

function buttonClicked(){
    console.log("Button clicked")
    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then(res => {
        let residents = res.data.results[0].residents
        for (let i = 0; i < residents.length; i++){
            getResident(residents[i])
        }
    })
    .catch(err => {
        console.log(err)
    })
}

function getResident(url){
    axios.get(url)
    .then(res => {
        console.log(res.data)
        let heading = document.createElement("h2")
        heading.innerText = res.data.name
        document.querySelector("body").append(heading)
    })
    .catch(err => {
        console.log(err)
    })
}