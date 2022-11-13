function add(nomes, ...novosNomes){
 let novoConjunto =[
    ...nomes,
    ...novosNomes
 ];
 return novoConjunto;
}

let nomes = [ "Lucas", "Fernando"];
let outros = add (nomes, "Antonio", "Pedro", "José");
console.log (outros);