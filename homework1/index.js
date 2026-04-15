const button = document.querySelector('button');
const objectsRow = document.querySelector('.objects_in_a_row');
const buttonContainer = document.querySelector('.button');

button.addEventListener('click', () => {
    button.style.transition = 'opacity 0.5s ease';
    button.style.opacity = '0';

    setTimeout(() => {
        buttonContainer.style.display = 'none';
        objectsRow.style.display = 'flex';
        objectsRow.style.opacity = '0';

        setTimeout(() => {
            objectsRow.style.transition = 'opacity 0.8s ease';
            objectsRow.style.opacity = '1';
        }, 50);
    }, 500);
});
