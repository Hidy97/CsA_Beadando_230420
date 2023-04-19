export function tablazatbanMegjelenit(OBJEKTUMLISTA, kulcsLista) {
    console.log(kulcsLista[0]);
    let text = "<table class='table table-striped'>";
    text += "<tr class='table table-dark'>"
    for (const key in kulcsLista[0]) {
        text += "<th class='kattint' id='" + key + "' >" +kulcsLista[0][key]+ "⇅ </th>"
    }
   
    text += "<th id='torles'>Törlés</th></tr>"
    for (let i = 0; i < OBJEKTUMLISTA.length; i++) {
        text += "<tr>"
        for (const key in OBJEKTUMLISTA[i]) {
            text += "<td>" + OBJEKTUMLISTA[i][key] + "</td>"
        }
     
        text += "<td>❌</td></tr>";
    }

    /**Jquery appendet használ */

    text += "</table>";
   return text;
}