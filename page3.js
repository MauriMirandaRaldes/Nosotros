const color = localStorage.getItem("color");
const color2 = localStorage.getItem("color2");
const song = localStorage.getItem("song");
const main = document.getElementById("main");
const containerAudio = document.getElementById("containerAudio");
const otherH2 = document.querySelectorAll(".otherH2")

const section4 = document.getElementById("section4")
const h2Color1 = document.querySelectorAll(".h2Color1")

/*Sobres*/
const containerSobres = document.getElementById("containerSobres")
const section5 = document.getElementById("section5")
const sobres = [{name:"sobre 1", id:17},{name:"sobre 2", id:18},{name:"sobre 3", id:19}]
const letter = document.getElementById("letter")
const letter2 = document.getElementById("letter2")
const letter3 = document.getElementById("letter3")

/*Ultima seccion*/
const lastSection = document.getElementById("lastSection")
const containerLastVideos = document.getElementById("containerLastVideos")
const dataLastVideos = [{name:"video8"},{name:"video9"},{name:"video10"}]
/*---Sección Cumpleaños---*/
const sectionCumpleaños = document.getElementById("sectionCumpleaños")
const containerLastTexts = document.querySelectorAll(".containerLastTexts")
const felizCumpleaños = document.getElementById("felizCumpleaños")

const mapSobres = sobres.map(element => {
  let render =
  `<img class="sobre" id="${element.id}" src="sobre.png" />`
  return render
})
containerSobres.innerHTML = mapSobres

const mapSobres2 = sobres.map(element => {
  const eachSobre = document.getElementById(`${element.id}`)
  eachSobre.addEventListener("click", ()=> {
    alert(`Elegiste el ${element.name} ✉`)
    containerSobres.remove()
    if (element.name == "sobre 1"){
      letter.classList.remove("none")
      letter.classList.add("letter")
    } else if (element.name == "sobre 2"){
      letter2.classList.remove("none")
      letter2.classList.add("letter")
    } else {
      letter3.classList.remove("none")
      letter3.classList.add("letter")
    }
   
    /*Última sección*/
    lastSection.classList.remove("none")
    lastSection.classList.add("lastSection")

    const finalMap = dataLastVideos.map(element => {
      let render = 
      `<video class="customLastVideo" src="${element.name}.mp4" autoplay muted loop ></video>`
      return render
    })
    containerLastVideos.innerHTML = finalMap

    /*Sección cumpleaños*/
    sectionCumpleaños.classList.remove("none")
    sectionCumpleaños.classList.add("sectionCumpleaños")

    containerLastTexts.forEach(element => element.style.backgroundColor = color2)
    felizCumpleaños.style.color = color
    felizCumpleaños.style.textAlign = "center"

  })
})
/*------------------------------------*/

window.onscroll = function() {
  if  (window.scrollY > 3000){
    section4.classList.remove("none")
    section4.style.backgroundColor = color2
    h2Color1.forEach(element => element.style.color = color)
    section4.classList.add("section4")
    section5.classList.remove("none")
    section5.classList.add("section5")
  }
};

/*Utilizo la data guardada en el localStorage*/
main.style.backgroundColor = color;
let render = `<audio src="${song}.mp3" autoplay loop controls ></audio>`;
containerAudio.innerHTML = render;

/*input para elegir fecha*/
const inputDate = document.getElementById("inputDate");
const div1 = document.getElementById("div1");
const section2 = document.getElementById("section2");
const containerImages_1 = document.getElementById("containerImages_1");
const images_1 = [
  {
    name: "imagen1",
    id: 1,
  },
  {
    name: "imagen2",
    id: 2,
  },
  {
    name: "imagen3",
    id: 3,
  },
];
const inputsRadio = [
  { event: "Estábamos por ir al cine 🎦", id: 4 },
  { event: "Cumpleaños de Tere 🙋🏽‍♀️", id: 5 },
  { event: "Estábamos por ir a Moreno 🍺", id: 6 },
];
const inputsRadio2 = [
  { event: "En una heladería 🍨", id: 7 },
  { event: "En Burger 🍔", id: 8 },
  { event: "En Starbucks ☕", id: 9 },
];
/*imagenes y videos para la seccion de abajo del minijuego*/
const imagesAndVideos_data = [
    { name: "imagen5", id: 10, type:"img" },
    { name: "video6", id: 15, type:"video" },
    { name: "imagen6", id: 11, type:"img" },
    { name: "imagen7", id: 12, type:"img" },
    { name: "video5", id: 14, type:"video" },
    { name: "imagen8", id: 13, type:"img" },
    { name: "video7", id: 16, type:"video" },
  ];

inputDate.addEventListener("blur", (e) => {
  const correctDate = "2019-08-17";
  if (e.target.value == correctDate) {
    div1.classList.remove("none");
    div1.classList.add("div1");

    setTimeout(() => {
      alert("Ahora podés seguir bajando reina 👸🏽");
      section2.classList.remove("none");
      let mapImages_1 = images_1.map((element) => {
        let render = `<img class="img" id=${element.id} src="${element.name}.jpg" />`;
        return render;
      });
      containerImages_1.innerHTML = mapImages_1;

      const otherMap = images_1.map((element) => {
        const eachImg = document.getElementById(`${element.id}`);
        eachImg.style.backgroundColor = color2;
      });

      const h2 = document.querySelectorAll(".h2");
      h2.forEach((element) => (element.style.color = color2));
      otherH2.forEach(element => element.style.color = color2)

      /*Minigame*/
      const containerInputsRadio = document.getElementById(
        "containerInputsRadio"
      );
      const mapInputsRadio = inputsRadio.map((element) => {
        let render = `<label class="label" for="${element.id}" > <input class="marginRight" name="event" id="${element.id}" type="radio" value="${element.event}" /> ${element.event} </label>`;
        return render;
      });
      containerInputsRadio.innerHTML = mapInputsRadio;

        inputsRadio.map((element) => {
        const eachInputRadio = document.getElementById(`${element.id}`);
        const correctRadio = "Cumpleaños de Tere 🙋🏽‍♀️";
        const container2Videos = document.getElementById("container2Videos");
        const invisibleDiv = document.getElementById("invisibleDiv");
        const invisibleDiv2 = document.getElementById("invisibleDiv2");
        const customImgTeresa = document.querySelectorAll(".customImgTeresa")

        eachInputRadio.addEventListener("change", (e) => {
          let finalResponse = e.target.value;
          if (finalResponse == correctRadio) {
            container2Videos.classList.remove("container2Videos");
            container2Videos.classList.add("none");
            invisibleDiv2.classList.remove("none");
            invisibleDiv2.classList.add("appearSlow")
            customImgTeresa.forEach(element => element.style.backgroundColor = color2)
            containerInputsRadio.remove();
          } else {
            container2Videos.classList.remove("container2Videos");
            container2Videos.classList.add("none");
            invisibleDiv.classList.remove("none");
            customImgTeresa.forEach(element => element.style.backgroundColor = color2)
            invisibleDiv.classList.add("failResponse");
            containerInputsRadio.remove();
          }
        });

        const invisibleDiv3 = document.getElementById("invisibleDiv3");
        const invisibleDiv4 = document.getElementById("invisibleDiv4");
        const containerInputsRadio2 = document.getElementById(
          "containerInputsRadio2"
        );
        const container2Videos_2 =
          document.getElementById("container2Videos_2");

        const mapInputsRadio2 = inputsRadio2.map((element) => {
          let render = `<label class="label" for="${element.id}" > <input class="marginRight" name="event" id="${element.id}" type="radio" value="${element.event}" />${element.event} </label>`;
          return render;
        });
        containerInputsRadio2.innerHTML = mapInputsRadio2;

        inputsRadio2.map((element) => {
          const eachInputRadio2 = document.getElementById(`${element.id}`);
          const correctRadio2 = "En Starbucks ☕";

          eachInputRadio2.addEventListener("change", (e) => {
            let finalResponse2 = e.target.value;
            if (finalResponse2 == correctRadio2) {
              container2Videos_2.classList.remove("container2Videos_2");
              container2Videos_2.classList.add("none");
              invisibleDiv4.classList.remove("none");
              invisibleDiv4.classList.add("appearSlow")
              customImgTeresa.forEach(element => element.style.backgroundColor = color2)
              containerInputsRadio2.remove();
            } else {
              container2Videos_2.classList.remove("container2Videos_2");
              container2Videos_2.classList.add("none");
              invisibleDiv3.classList.remove("none");
              invisibleDiv3.classList.add("failResponse");
              containerInputsRadio2.remove();
            }
          });
        });

        /*Sección después del minijuego, con varias imagenes y varios videos*/
        const imagesAndVideos = document.getElementById("imagesAndVideos");
        const mapData = imagesAndVideos_data.map(element => {
            if (element.type == "img"){
                let render =
                `<img class="customImages" src="${element.name}.jpg" />`
                return render
            } else {
                let render =
                `<video class="lastVideos" muted autoplay loop src="${element.name}.mp4"></video>`
                return render
            }
        })
        imagesAndVideos.innerHTML = mapData

      });
    }, 2000);
  } else {
    alert("Incorrecto 😣");
  }
});

























