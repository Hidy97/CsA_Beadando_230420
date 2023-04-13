import { OBJEKTUMLISTA} from "./adatok.js";
import { kulcsLista } from "./adatok.js";
import { tablazatbanMegjelenit } from "./admin.js";
import { rendezesObjektum, rendezesSzoveg } from "./rendezes.js";
import { szurNevSzerint } from "./szures.js";

$(function(){
/**
    const nevELEM = $("#nev");
    nevELEM.on("keyup", function () {
        szuresiFeltetel = nevELEM.val()
        szurtLista = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel)
    });

    nevSzerint();
 */
/**
    const szovegElem = $(kulcsLista);
    szovegElem.on("keyup", function(){
            szuresiFeltetel = szovegElem.val()
            szurtLista = rendezesSzoveg(OBJEKTUMLISTA, szuresiFeltetel)
    });

    nevSzerint();
     */
    const tablazat = $("#tablazat");
    tablazatbanMegjelenit(OBJEKTUMLISTA, tablazat);
});
/**
function nevSzerint() {
    const tablazat = $("#tablazat")
    let t = tablazatbanMegjelenit(OBJEKTUMLISTA);
    tablazat.html(t);
    console.log($("#nev"))
    $("#nev").click(function () {
        rendezesObjektum(OBJEKTUMLISTA, "nev")
        console.log(OBJEKTUMLISTA)
        nevSzerint();
    });
}
 */