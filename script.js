import { OBJEKTUMLISTA} from "./adatok.js";
import { kulcsLista } from "./adatok.js";
import { tablazatbanMegjelenit } from "./admin.js";
import { rendezesObjektum, rendezesSzoveg } from "./rendezes.js";
import { szurNevSzerint } from "./szures.js";

$(function(){
/**
    const nevELEM = $("#sznev");
    nevELEM.on("keyup", function () {
        szuresiFeltetel = nevELEM.val()
        szurtLista = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel)
    });

    
 */
   
    init();
});

function init() {
    const tablazat = $("#tablazat");
    let txt= tablazatbanMegjelenit(OBJEKTUMLISTA, kulcsLista);
    tablazat.html(txt);
   
  
    console.log($("#nev"))
    $("table th").click(function (event) {
        let kulcs=$(event.target).attr("id")
        console.log(kulcs)
        rendezesObjektum(OBJEKTUMLISTA, kulcs)
        console.log(OBJEKTUMLISTA)
        init();
    });
}
