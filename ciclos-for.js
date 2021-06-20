function noParesDeContarImparesHasta(numero){
    let sumatoria = 0;
    for(let i=1; i<=numero; i++){
        i%2!==0 ? sumatoria++ : "";
    }
    console.log(sumatoria);
}

console.log(noParesDeContarImparesHasta(11));