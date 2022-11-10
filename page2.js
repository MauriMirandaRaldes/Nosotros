const inputColor = document.getElementById("inputColor")
const testColor = document.getElementById("testColor")
const inputColor2 = document.getElementById("inputColor2")
const testColor2 = document.getElementById("testColor2")
const containerChangeColor = document.querySelectorAll(".containerChangeColor")
const testText = document.getElementById("testText")
const containerAudio = document.getElementById("containerChangeAudio")

/*color fondo*/
var dataColor = ""
inputColor.addEventListener("change", (e)=> {
    const color = e.target.value
    localStorage.setItem("color", color)
    dataColor = color
})

const sendColor = ()=> {
    if (dataColor){
        containerChangeColor.forEach(element => element.style.backgroundColor = dataColor)
        containerAudio.style.backgroundColor = dataColor
    } else {
        alert("Tienes que elegir un color")
    }
}

testColor.addEventListener("click", sendColor)

/*color texto*/
var dataColor2 = ""
inputColor2.addEventListener("change", (e)=> {
    const color = e.target.value
    localStorage.setItem("color2", color)
    dataColor2 = color
})

const sendColor2 = ()=> {
    if (dataColor2){
        testText.style.color = dataColor2
    } else {
        alert("Tienes que elegir un color")
    }
}

testColor2.addEventListener("click", sendColor2)

/*audio*/
const buttonContinue = document.getElementById("buttonContinue")
const songs = [
    {
        name: "accidently in love",
        id: 1
    },
    {
        name: "closer to the edge",
        id: 2
    },
    {
        name: "give me love",
        id: 3
    },
    {
        name: "stay with me",
        id: 4
    },
    {
        name: "yellow",
        id: 5
    },
]

const mapSongs = songs.map(element => {
    let render = 
    ` <div class="containerAudio">
      <p class="titleSong">${element.name}</p>
      <audio class="audio" id=${element.id} src="${element.name}.mp3" controls></audio>
      <button onClick={eachSong(${element.id})} class="buttonElegir" >elegir</button>
      </div>`
    return render
})
containerAudio.innerHTML = mapSongs

const mapSongs2 = songs.map(element => {
    const eachSong = document.getElementById(element.id)
    eachSong.volume = 0.10
})

const containerContinue = document.getElementById("containerContinue")
var finalSong = ""
const eachSong = (idSong)=> {
    const filterSong = songs.filter(element => element.id == idSong)
    finalSong = filterSong[0].name
    if (finalSong && dataColor){
        localStorage.setItem("song", finalSong)
        containerContinue.classList.remove("none")
        containerContinue.classList.add("containerContinue")
        window.scrollTo(0, 600)
    }
}


