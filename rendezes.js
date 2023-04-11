export function rendezesSzoveg(lista){
    lista.sort();
}

function szamSzerint(lista, kulcs){
    lista.sort(function(a, b){
        return a[kulcs] - b[kulcs];
    });
}

function szovegSzerint(lista, kulcs){
    lista.sort(function(a, b){
        if ( a[kulcs] > b[kulcs]){
            return 1;
        }else{
            return -1;
        }
    });
}

export function rendezesObjektum(lista, kulcs){
    if(typeof kulcs == "number"){
        szamSzerint(lista, kulcs);
    }else{
        szovegSzerint(lista, kulcs);
    }
}