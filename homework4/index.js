const ColorBtn = document.getElementById('color-button');
const Screen = document.getElementById('screen');
const RGBInfo = document.getElementById('rgb-info');

ColorBtn.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    Screen.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    RGBInfo.textContent = `${r}, ${g}, ${b}`;
});