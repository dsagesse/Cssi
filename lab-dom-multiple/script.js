const buttons = document.querySelectorAll('button');
buttons;
buttons.length;

const box = document.querySelector('#box');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.innerHTML;
    box.style.background = color;
  });
});
