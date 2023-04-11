export function szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel){
    const eredmenyLista = OBJEKTUMLISTA.filter(function(noveny){
        return noveny.nev.toLowerCase().includes(szuresiFeltetel.toLowerCase());
    });
    return eredmenyLista;
}