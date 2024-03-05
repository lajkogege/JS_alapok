window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
});

function elemekElerese1() {
    /**Ide jön az első feladat */
    ELEM1=document.querySelectorAll("section h2")[0]
    console.log(ELEM1);
}
function elemekElerese2() {
    /**Ide jön az 2.  feladat */
    const ELEM=document.querySelectorAll(".ide")[0];
    ELEM2.innerHTML = "<p>Jó reggelt! <p>";

    
}
function elemekElerese3() {
    /**Ide jön az 3. feladat */
    ELEM3=document.getElementsByClassName("ide");
    ELEM3.innerHTML="<p>Jó reggelt! <p>";
}

