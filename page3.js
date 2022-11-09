const color = localStorage.getItem("color")
const color2 = localStorage.getItem("color2")
const song = localStorage.getItem("song")
const main = document.getElementById("main")
const containerAudio = document.getElementById("containerAudio")

/*Utilizo la data guardada en el localStorage*/
main.style.backgroundColor = color
let render = `<audio src="${song}.mp3" autoplay loop controls ></audio>`
containerAudio.innerHTML = render

/*input para elegir fecha*/
const inputDate = document.getElementById("inputDate")
const div1 = document.getElementById("div1")
const section2 = document.getElementById("section2")
const containerImages_1 = document.getElementById("containerImages_1")
const images_1 = [
    {
        name:"imagen1",
        id:1
    },
    {
        name:"imagen2",
        id:2
    },
    {
        name:"imagen3",
        id:3
    }
]

inputDate.addEventListener("blur", (e)=> {
    const correctDate = "2019-08-17"
    if (e.target.value == correctDate){
        div1.classList.remove("none")
        div1.classList.add("div1")

        setTimeout(() => {
            alert("Ahora podés seguir bajando reina")
            section2.classList.remove("none")
            let mapImages_1 = images_1.map(element => {
                let render = 
                `<img class="img" id=${element.id} src="${element.name}.jpg" />`
                return render
            })
            containerImages_1.innerHTML = mapImages_1

            const otherMap = images_1.map(element => {
                const eachImg = document.getElementById(`${element.id}`)
                eachImg.style.backgroundColor = color2
            })

            const h2 = document.querySelectorAll(".h2")
            h2.forEach(element => element.style.color = color2)

        }, 2000);


    } else {
        alert("Incorrecto 😣")
    }
})