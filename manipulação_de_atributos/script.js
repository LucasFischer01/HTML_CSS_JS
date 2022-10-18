function imgChange(fileName, animalName) {
    document.querySelector('.imagem').setAttribute('src', 'images/' + fileName);
    document.querySelector('.imagem').setAttribute('data-animal', animalName);
}

function getAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert(animal);
}