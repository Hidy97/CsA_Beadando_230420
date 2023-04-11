export function tablazatbanMegjelenit(OBJEKTUMLISTA, tablazat) {
    let text = "<table class='table table-striped'>";
    text += "<tr class='table table-dark'><th id='Rnev'>Név⇅</th><th id='RlNev'>Latin név⇅</th><th id='RehetoE'>Besorolás⇅</th><th id='RgyResz'>Gyűjthető rész(ek)⇅</th><th id='RgyIdo'>Gyűjtési időszak⇅</th><th id='megj'>MEGJEGYZÉS</th><th id='torles'>Törlés</th></tr>"
    for (let i = 0; i < OBJEKTUMLISTA.length; i++) {
        text += "<tr><td>" + OBJEKTUMLISTA[i].nev + "</td><td>" + OBJEKTUMLISTA[i].latinNev + "</td><td>" + OBJEKTUMLISTA[i].ehetoE + "</td><td>" + OBJEKTUMLISTA[i].gyujthetoResz + "</td><td>" + OBJEKTUMLISTA[i].gyujtesiIdo + "</td><td>" + OBJEKTUMLISTA[i].megjegyzes + "</td><td>❌</td></<tr>";
    }

    /**Jquery appendet használ */

    $(tablazat[0]).append(text);
    text = "/table";
}