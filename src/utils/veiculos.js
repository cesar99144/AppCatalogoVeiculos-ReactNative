export default function getListaVeiculos(size, veiculos){
    let listaVeiculos = [];

    for(let i = 0, l = size; i < l; i++){
        listaVeiculos.push(veiculos[i])
    }

    return listaVeiculos;
}