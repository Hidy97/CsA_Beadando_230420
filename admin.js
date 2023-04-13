export function tablazatbanMegjelenit(OBJEKTUMLISTA, tablazat) {
    let text = "<table class='table table-striped'>";
    text += "<tr class='table table-dark'><th id='nev' class='kattint'>Név⇅</th><th id='lNev' class='kattint'>Latin név⇅</th><th id='eheto' class='kattint'>Besorolás⇅</th><th id='gyResz' class='kattint'>Gyűjthető rész(ek)⇅</th><th id='gyIdo' class='kattint'>Gyűjtési időszak⇅</th><th id='megj'>MEGJEGYZÉS</th><th id='torles'>Törlés</th></tr>"
    for (let i = 0; i < OBJEKTUMLISTA.length; i++) {
        text += "<tr><td>" + OBJEKTUMLISTA[i].nev + "</td><td>" + OBJEKTUMLISTA[i].latinNev + "</td><td>" + OBJEKTUMLISTA[i].ehetoE + "</td><td>" + OBJEKTUMLISTA[i].gyujthetoResz + "</td><td>" + OBJEKTUMLISTA[i].gyujtesiIdo + "</td><td>" + OBJEKTUMLISTA[i].megjegyzes + "</td><td>❌</td></tr>";
    }

    /**Jquery appendet használ */

    text += "</table>";
    tablazat.append(text);
}