export function tablazatbanMegjelenit(OBJEKTUMLISTA, tablazat) {
    let text = "<div class='kartyatarolo row'>";
    for (let i = 0; i < OBJEKTUMLISTA.length; i++) {
        text += "<div class='card col-md-3'>";
        text += "<div class='card-body'><div class='card-header'><h5>" + OBJEKTUMLISTA[i].nev + "</h5></div><div class='card-body'><ul class = 'list-unstyled'><li class = 'text-'>" + OBJEKTUMLISTA[i].latinNev + "</li><li>" + OBJEKTUMLISTA[i].ehetoE + "</li><li>" + OBJEKTUMLISTA[i].gyujthetoResz + "</li><li>" + OBJEKTUMLISTA[i].gyujtesiIdo + "</li><li>" + OBJEKTUMLISTA[i].megjegyzes + "</li></div><div class='card-footer'>Mutat</div></div></div>";
    }

    /**Jquery appendet használ*/

    text += "</div>";
    tablazat.append(text);
}