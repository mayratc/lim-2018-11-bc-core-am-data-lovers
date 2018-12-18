//  const ulContainer = document.getElementById('container-list');
//  ulContainer.innerHTML = templateList;
//  Mostrando todos los pokemones.
const containerList = document.getElementById('container-list');
containerList.innerHTML = crearTemplateDeCard(dataPokemon);

//  Mostrando los mas evolucionados
const mostEvolution = document.getElementById('most-evolution');
mostEvolution.addEventListener('click', () => {
  containerList.innerHTML = crearTemplateDeCard(mostEvolutionPokemon);
});
//  Mostrando pokemones segun tipo:
const containerTypes = document.getElementById('cont-tipos');
containerTypes.addEventListener('click', (e) => {
  containerList.innerHTML = crearTemplateDeCard(filterData(dataPokemon, e.target.getAttribute('value')))
});

const pagInicio = document.getElementById('pag-inicio');
const pagFiltrar = document.getElementById('pag-filtrar');
const pagOrdenar = document.getElementById('pag-ordenar');
const pagPokecientifico = document.getElementById('pag-pokecientifico');

const butonInicio = document.getElementById('btn-inicio');
const butonFiltrar = document.getElementById('btn-filtrar');
const butonOrdenar = document.getElementById('btn-ordenar');
const butonPokecientifico = document.getElementById('btn-pokecientifico');

butonInicio.addEventListener("click", () => {
  pagInicio.style.display = "block";
  pagFiltrar.style.display = "none";
  pagOrdenar.style.display = "none";
  pagPokecientifico.style.display = "none";
});
butonFiltrar.addEventListener("click", () => {
  pagInicio.style.display = "none";
  pagFiltrar.style.display = "block";
  pagOrdenar.style.display = "none";
  pagPokecientifico.style.display = "none";
});
butonOrdenar.addEventListener("click", () => {
  pagInicio.style.display = "none";
  pagFiltrar.style.display = "none";
  pagOrdenar.style.display = "block";
  pagPokecientifico.style.display = "none";
});
butonPokecientifico.addEventListener("click", () => {
  pagInicio.style.display = "none";
  pagFiltrar.style.display = "none";
  pagOrdenar.style.display = "none";
  pagPokecientifico.style.display = "block";
});
