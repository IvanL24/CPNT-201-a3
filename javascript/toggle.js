
    const shape = document.querySelector('.shape')
    const face = document.querySelector('.face')
    const shade = document.querySelector('.shade')
    const button = document.querySelector('button')

    button.addEventListener('click', function(){
      console.log('hellow bowton');

      // toggle .color switch
      face.classList.toggle('face2');

      // shade.classList.toggle('shade2')

      shape.classList.toggle('shape2');


    });