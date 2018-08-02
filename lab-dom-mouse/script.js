button.addEventListener('mouseout', () => {
  button.innerHTML = 'Click me!';
  button.classList.remove('danger');
});

button.addEventListener('mousemove', () => {
  size = size + 1;
  button.style.width = size + 'px';
  button.style.height = size + 'px';
});
