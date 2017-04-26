var pets = ['cat', 'dog', 'rat']
pets.forEach(function (pet){
    pets[pets.indexOf(pet)] = pet + 's'
})
console.log(pets)