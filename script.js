window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazas1();
    esemenykezeles2();
    Esemenykezeles3()
});

function elemekElerese1() {
    /**Ide jön az első feladat */
    const ELEM1 = document.querySelectorAll("section h2")[0];
    console.log(ELEM1);
}
function elemekElerese2() {
    /**Ide jön az 2.  feladat */
    //id 
    const ELEM2 = document.querySelectorAll("#ide")[0];
    ELEM2.innerHTML = "<p>Jó reggelt! <p>";


}
function elemekElerese3() {
    /**Ide jön az 3. feladat */
    //class
    const ELEM3 = document.querySelectorAll(".ide")[0];
    ELEM3.innerHTML = "<p>Jó reggelt! <p>";
}

function elemekElerese4() {
    /*Ide jön a 4. feldat*/
    const ELEM4 = document.querySelectorAll(".lista")[0]; //lista osztály meghivása
    let txt = "<ul>";
    for (let index = 0; index < 5; index++) {
        const velszam = Math.floor(Math.random() * 20 + 10); //veletlen szám generlás
        txt += `<li>${velszam}</li>  `
    }
    txt += "</ul>"
    ELEM4.innerHTML = txt
}


function elemekFormazas1(){
    /*Ide jön az 5. feladat*/
    const ELEM6=document.querySelectorAll(".lista")[0];
    ELEM6.classList.add("formazott");
}

function esemenykezeles1(){
    const ELEM6= document.querySelector(".lista")[0];
    ELEM6.addEventListener("click", fveny);
}

function fveny(){
    let txt="";
    const ELEMSOK =document.getElementsByClassName(".kattintasutan").innerHTML= txt;
}

function esemenykezeles2(){
    const ELEM7 =document.querySelector(".feladat");
    let txt="";
    txt+=`
    <button>OK</button>
    `
    ELEM7.innerHTML=txt;
    console.log(ELEM7);
    const ELEM8=document.querySelector(".feladat button")
    ELEM8.addEventListener("click", fveny2)
}

function fveny2(){
    const ELEM9 =document.querySelector(".feladat")
    let txt="";
    txt+=`
    <div>
    <img class="kep" scr="csonak.png" alt="">
    </div>`
    ELEM9.innerHTML+=txt;
}

function Esemenykezeles3(){
    const ELEM10 =document.querySelectorAll(".feladat");
    ELEM10.addEventListener("mousemove", fveny3);

}

function fveny3(){
    const ELEM11=document.querySelectorAll(".kep");
    ELEM11.classList.add(".kepmeret");

}

function Esemenykezeles4(){

}