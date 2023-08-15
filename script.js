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

  getNames() {
    return {
      sceneName: this.sceneName, hero: this.hero, vehicle: this.vehicle, background: this.scene, weapon: this.weapon
    };
  }

  heroesList = {
    luke: ASSETS + 'luke.jpg',
    gandalf: ASSETS + 'gandalf.jpg',
    harry: ASSETS + 'harry.jpg',
    marty: ASSETS + 'marty.jpg',
  };

  weaponList = {
    lightsaber:
      ASSETS + 'greensaber.png',
    cane: ASSETS + 'cane.png',
    wand: ASSETS + 'wand.png',
    hoverboard:
      ASSETS + 'hoverboard.png',
  };

  sceneList = {
    gondor:
      ASSETS + 'gondor.jpg',
    hill_valley: ASSETS + 'hill_valley.png',
    hogwarts: ASSETS + 'hogwarts.jpg',
    tatooine:
      ASSETS + 'tatooine.jpg',
  };

  vehicleList = {
    hipogrifo:
      ASSETS + 'hipogrifo.jpg',
    halconmilenario: ASSETS + 'halconmilenario.jpg',
    sombragris: ASSETS + 'sombragris.jpg',
    delorean:
      ASSETS + 'delorean.jpg',
  };

  vehicleEnum = {
    hipogrifo: 'hipogrifo',
    halconmilenario: 'halconmilenario',
    sombragris: 'sombragris',
    delorean: 'delorean',
  };

}

(() => {
  const scene = new setScene('Pelea épica');

  const characterEl = document.getElementById('characters');
  const characterBgEl = document.getElementById('charcater-img');
  const weaponEl = document.getElementById('weapon');
  const weaponBgEl = document.getElementById('weapon-img');
  const backgroundEl = document.getElementById('background');
  const backgroundBgEl = document.getElementById('background-img');
  const vehicleEl = document.getElementById('vehicle');
  const vehicleBgEl = document.getElementById('vehicle-img');
  const mensajeEl = document.getElementById('mensaje');

  const initialValuesMap = {
    character: {value: 'luke', bg: characterBgEl, list: scene.heroesList},
    vehicle: {value: scene.vehicleEnum.sombragris, bg: vehicleBgEl, list: scene.vehicleList},
    background: {value: 'tatooine', bg: backgroundBgEl, list: scene.sceneList},
    weapon: {value: 'lightsaber', bg: weaponBgEl, list: scene.weaponList}
  }

  /**
   * Únicamente conectar esta función con el botón "Ver mensaje".
   */
  function playScene() {
    const { sceneName, hero, vehicle, background, weapon } = scene.getNames();

    const mensaje = `${sceneName}: 
    Nuestro héroe ${hero} fue a ${background}, 
    montando un ${vehicle},
    para pelear con su ${weapon}`;

    alert(mensaje);
  }

  function startListener() {
    characterEl.addEventListener('click', () => {
      const checked = characterEl.querySelector(
        'input[name="character"]:checked'
      ).value;

      changeBackground(checked, characterBgEl, scene.heroesList);
      scene.addHero(checked);
    });

    weaponEl.addEventListener('change', () => {
      changeBackground(weaponEl.value, weaponBgEl, scene.weaponList);
      scene.addWeapon(weaponEl.value);
    });

    backgroundEl.addEventListener('change', () => {
      changeBackground(backgroundEl.value, backgroundBgEl, scene.sceneList);
      scene.addScene(backgroundEl.value);
    });

    vehicleEl.addEventListener('change', () => {
      vehicleRange(vehicleEl.value);
    });

    mensajeEl.addEventListener('click',()=>{
      if(checkTouchedInputs()) playScene();
      else alert('Toca todos los controles al menos una vez');
    })
  }

  /**
   * Usar switch para determinar el tamaño del vehículo
   */
  function vehicleRange(number) {
    let vehicleName;
    switch (Number(number)) {
      case 10:
        vehicleName = scene.vehicleEnum.sombragris;
        break;
      case 20:
        vehicleName = scene.vehicleEnum.hipogrifo;
        break;
      case 30:
        vehicleName = scene.vehicleEnum.delorean;
        break;
      case 40:
        vehicleName = scene.vehicleEnum.halconmilenario;
        break;
      default:
        vehicleName = scene.vehicleEnum.sombragris;
        break;
    }
    changeBackground(vehicleName, vehicleBgEl, scene.vehicleList);
    scene.addVehicle(vehicleName);
  }

  function changeBackground(value, bgEl, list) {
    bgEl.style.backgroundImage = `url(${list[value]})`;
  }

  function initialbackgrounds() {
    const initialValues = Object.values(initialValuesMap);
    for(const initial of initialValues) {
      const {value, bg, list} = initial;
      changeBackground(value, bg, list);
    }
  }

  function checkTouchedInputs(){
    const NAMES_FULL_LENGTH = 5;
    const names = Object.values(scene.getNames());
    const namesAreTrue = names.filter(Boolean).length
    return NAMES_FULL_LENGTH === namesAreTrue;
  }

  startListener();
  initialbackgrounds();
})();
