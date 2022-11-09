/*index.html*/
const nosotros = document.getElementById("nosotros")
if (nosotros){
    setTimeout(() => {
        nosotros.classList.add("newAnimation")
    }, 5000);
}

/*page1*/
/*section1*/
const section1 = document.getElementById("section1")
const h2 = document.getElementById("h2")
const campera = document.getElementById("campera")
const h2Campera = document.getElementById("h2Campera")
/*section2*/
const section2 = document.getElementById("section2")
const h2Section2 = document.getElementById("h2Section2")
const remera = document.getElementById("remera")
const h2Remera = document.getElementById("h2Remera")
/*section3*/
const section3 = document.getElementById("section3")
const h2Section3 = document.getElementById("h2Section3")
const h2Section3_2 = document.getElementById("h2Section3_2")
/*section4*/
const section4 = document.getElementById("section4")
const h2Section4 = document.getElementById("h2Section4")
const goPage2 = document.getElementById("goPage2")

/*Te acordas cuando nos conocimos?*/
if (section1 && section2 && section3){
    setTimeout(() => {
        h2.classList.remove("none")
        h2.classList.add("h2_2")
    }, 4000);
    /*Vos tenias puesta... + imagen campera*/
    setTimeout(() => {
        campera.classList.remove("none")
        campera.classList.add("campera")
    }, 8000);
    /*Imagen de la campera y.. similar a esta..*/
    setTimeout(() => {
        h2Campera.classList.remove("none")
        h2Campera.classList.add("h2Campera")
    }, 9000);
    /*Remuevo la section1*/
    setTimeout(() => {
        section1.remove()
    }, 11000);
    /*section2*/
    setTimeout(() => {
        section2.classList.remove("none")
        section2.classList.add("section1")
    }, 11000);
    setTimeout(() => {
        h2Section2.classList.remove("none")
        h2Section2.classList.add("h2Section2_2")
    }, 14000);
    setTimeout(() => {
        remera.classList.remove("none")
        remera.classList.add("campera")
    }, 18000);
    setTimeout(() => {
        h2Remera.classList.remove("none")
        h2Remera.classList.add("h2Remera")
    }, 19000);
    /*section3*/
    setTimeout(() => {
        section2.remove()
        section3.classList.remove("none")
        section3.classList.add("section1")
    }, 22000);
    setTimeout(() => {
        h2Section3.classList.remove("none")
        h2Section3.classList.add("h2Section3_2")
    }, 26000);
    setTimeout(() => {
        h2Section3_2.classList.remove("none")
        h2Section3_2.classList.add("h2Section3_3")
    }, 32000);
    /*section4*/
    setTimeout(() => {
        section3.remove()
        section4.classList.remove("none")
        section4.classList.add("section1")
    }, 38000);
    setTimeout(() => {
        h2Section4.classList.remove("none")
        h2Section4.classList.add("h2Section4_2")
    }, 42000);
    setTimeout(() => {
        goPage2.classList.remove("none")
        goPage2.classList.add("goPage2")
    }, 45000);
}

// const data = []
// const getData = async ()=> {
//     await fetch("../data.json")
//     .then(res => res.json())
//     .then(res => data.push(...res))

// }
// getData()