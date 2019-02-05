var pokemonRepository = (function(){
var repository = [
    {name:'Charmeleon', height:1.1, type: 'fire', abilities:['blaze', 'solar-power']},
    {name: 'Pikachu', height:0.4, type:'electric', abilities:['Static', 'Lightningrod']},
    {name: 'Psyduck', height:0.8, type:'water', abilities:['Damp', 'Cloud-nine', 'Swift-swim']}
  ];

  function addListItem (pokemon) {
    var pokeProperties = Object.keys(pokemon);
    var checkArray = ['name', 'height', 'type', 'abilities'];
    var validObject = pokeProperties.length === checkArray.length? true:false;

    checkArray.forEach(function(el) {
      if (pokeProperties.includes(el)){
        validObject = true;
      } else {
        validObject = false;
      }
    });

    if (validObject &&
        typeof pokemon === 'object' &&
        typeof pokemon.name === 'string' &&
        typeof pokemon.type === 'string' &&
        typeof pokemon.height === 'number' &&
        (typeof pokemon.abilities === 'string'||typeof pokemon.abilities === 'object')) {
      repository.push(pokemon);
    } else {
      prompt('Please enter a pokemon with valid name, height, type and abilities properties!');
    };

    var $liEl = document.createElement('li');
    var $buttonEl = document.createElement('button');
    $buttonEl.classlist.add(pokemon.type);
    $buttonEl.innerText=pokemon.name;
    $liEl.appendChild($buttonEl);

    var $ul = document.querySelector('ul');
    $ul.appendChild($liEl);
  }

  function getAll() {
    return repository;
  }

  return {
    add: addListItem,
    getAll: getAll
  };
}) ();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem();
  /*if (pokemon.height>0.9) {
    var nameHeight=pokemon.name + ' - height: ' + pokemon.height + ' m. Wow, that\'s big!'
  } else {
    var nameHeight=pokemon.name + ' - height: ' + pokemon.height + ' m.'
  }
  if (pokemon.type==='fire'){
    document.write('<div class="fire">'+ nameHeight + '</div>')
  } else if (pokemon.type==='electric'){
    document.write('<div class="electric">'+ nameHeight + '</div>')
  } else if (pokemon.type==='water'){
    document.write('<div class="water">'+ nameHeight + '</div>')
  } else {
    document.write('<div class="pokemon">'+ nameHeight + '</div>')
  }*/
});
