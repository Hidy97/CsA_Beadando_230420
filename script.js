import { OBJEKTUMLISTA} from "./adatok.js";
import { kulcsLista } from "./adatok.js";
import { tablazatbanMegjelenit } from "./admin.js";
import { rendezesObjektum } from "./rendezes.js";

$(function(){
    /** 
    const nevELEM = $("#nev");
    nevELEM.on("keyup", function () {
        szuresiFeltetel = nevELEM.val()
        szurtLista = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel)
    });

    nevSzerint();
*/
    const tablazat = document.querySelectorAll("#tablazat")
    tablazatbanMegjelenit(OBJEKTUMLISTA, tablazat);
});


function nevSzerint() {
    const tablazat = $(".tablazat")
    let t = tablazatbanMegjelenit(OBJEKTUMLISTA);
    tablazat.html(t);
    console.log($("#Rnev"))
    $("#Rnev").click(function () {
        rendezesObjektum(OBJEKTUMLISTA, "nev")
        console.log(OBJEKTUMLISTA)
        nevSzerint();
    });
}

function szovegSzerint() {
    const tablazat = $(".tablazat")
    let t = tablazatbanMegjelenit(OBJEKTUMLISTA);
    tablazat.html(t);
    console.log($("#Rnev"))
    $("#Rnev").click(function () {
        rendezesObjektum(OBJEKTUMLISTA, "nev")
        console.log(OBJEKTUMLISTA)
        nevSzerint();
    });
}
