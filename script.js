const ASSETS = './assets/';

class setScene {
  hero;
  vehicle;
  scene;
  weapon;
  
  constructor(sceneName) {
    this.sceneName = sceneName;
  }

  addHero(hero) {
    this.hero = hero;
  }

  addVehicle(vehicle) {
    this.vehicle = vehicle;
  }

  addScene(scene) {
    this.scene = scene;
  }

  addWeapon(weapon) {
    this.weapon = weapon;
  }

  getNames(){
    return {
      sceneName: this.sceneName, hero: this.hero, vehicle: this.vehicle,scene: this.scene,weapon: this.weapon};
  }

  heroesList = {
    luke: ASSETS+'luke.jpg',
    gandalf: ASSETS+'gandalf.jpg',
    harry: ASSETS+'harry.jpg',
    marty: ASSETS+'marty.jpg',
  };

  weaponList = {
    lightsaber:
      ASSETS+'greensaber.png',
    cane: ASSETS+'cane.png',
    wand: ASSETS+'wand.png',
    hoverboard:
      ASSETS +'hoverboard.png',
  };

  sceneList = {
    gondor:
      ASSETS + 'gondor.jpg',
    hill_valley: ASSETS + 'hill_valley.jpg',
    hogwarts: ASSETS + 'hogwarts.jpg',
    tatooine:
      ASSETS + 'tatooine.jpg',
  };

  vehicleList = {
    hipogrifo:
      ASSETS + 'hipogrifo.jpg',
    halconmillenario: ASSETS + 'halconmillenario.jpg',
    sombragris: ASSETS + 'sombragris.jpg',
    delorean:
      ASSETS + 'delorean.jpg',
  };
}

(() => {
  const scene = new setScene('Pelea épica');
  const charactersFieldSet = document.getElementById('characters');
  const weaponEl = document.getElementById('weapon');
  const weaponBgEl = document.getElementById('weapon-img');
  const characterBgEl = document.getElementById('charcater-img');

  function startListener() {
    charactersFieldSet.addEventListener('click', () => {
      const checked = charactersFieldSet.querySelector(
        'input[name="character"]:checked'
      ).value;

      changeBackground(checked, characterBgEl, scene.heroesList);
    });

    weaponEl.addEventListener('mouseup', (evt) => {
      changeBackground(weaponEl.value, weaponBgEl, scene.weaponList);
    });
  }

  /**
   * Usar switch para determinar el tamaño del vehículo
   */
  function vehicleRange(){
    // switch (key) {
    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
  }

  function changeBackground(value, bgEl, list) {
    bgEl.style.backgroundImage = `url(${list[value]})`;
  }

  /**
   * Únicamente conectar esta función con el botón "Ver mensaje".
   */
  function playScene(){
    const { sceneName,hero,vehicle,scene,weapon } = scene.getNames();

    const mensaje = `${sceneName}: 
    Nuestro héroe ${hero} fue a ${scene}, 
    montando un ${vehicle},
    para pelear con su ${weapon}`;

    alert(mensaje);
  }

  startListener();
})();
