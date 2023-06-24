class setScene {
  constructor(nombre) {
    this.nombre = nombre;
  }

  heroesEnum = {
    Luke: 'luke',
    Gandalf: 'gandalf',
    Harry: 'harry',
    Marty: 'marty',
  };

  weaponList = {
    lightsaber:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffortniteinsider.com%2Fwp-content%2Fuploads%2F2019%2F12%2FFortnite-Green-Lightsaber.png&f=1&nofb=1&ipt=9cc7f967f197c6f1293c3f16b6e2341972d4ba5a839a56fb242d3765795c29ef&ipo=images',
    cane: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd2%2F18%2F83%2Fd21883e6761187245fca2ec56647e606.png&f=1&nofb=1&ipt=c6c71884a5a8de46cb6ae4d2ebebce641a23834f6143153e61322ad761c3d74c&ipo=images',
    wand: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pikpng.com%2Fpngl%2Fb%2F433-4334306_elder-wand-png.png&f=1&nofb=1&ipt=91899db433b5ec6999fb00bcbd56355a80f43f197900d7242777aaf95477784b&ipo=images',
    hoverboard:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fseeninmovies.lukasbargoin.fr%2FView%2Fcontent%2Fupload%2Fhoverboard.png&f=1&nofb=1&ipt=d2c94c6fdf3821f163e53d80b0b9c03ce5d5f813bc4ad6c2d3a55bc96ccbde06&ipo=images',
  };
}

(() => {
  const charactersFieldSet = document.querySelector('#characters');
  const weaponEl = document.getElementById('weapon');
  const weaponBgEl = document.getElementById('weapon-img');

  function startListener() {
    const scene = new setScene();

    charactersFieldSet.addEventListener('click', () => {
      const checked = charactersFieldSet.querySelector(
        'input[name="character"]:checked'
      ).value;

      console.log(checked);
    });

    weaponEl.addEventListener('mouseup', (evt) => {
      changeBackground(weaponEl.value, weaponBgEl, scene.weaponList);
    });
  }

  function changeBackground(value, bgEl, list) {
    bgEl.style.backgroundImage = `url(${list[value]})`;
  }

  startListener();
})();
