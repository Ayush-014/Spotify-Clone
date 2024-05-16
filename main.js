const cube = document.getElementById('cube');
const main = document.getElementById('main');

    cube.addEventListener('mouseover', () => {
        main.classList.add('bg-[#181818]');
    });

    cube.addEventListener('mouseout', () => {
        main.classList.remove('bg-[#383838]');
    });