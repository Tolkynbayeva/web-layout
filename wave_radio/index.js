document.getElementById('nameInput').addEventListener('input', function() {
  if (!this.checkValidity()) {
    this.classList.add('invalid');
    this.classList.add('input-error')
    document.getElementById('nameError').style.display = 'block';
  } else {
    this.classList.remove('invalid');
    this.classList.remove('input-error')
    document.getElementById('nameError').style.display = 'none';
  }
});

document.getElementById('emailInput').addEventListener('input', function() {
  if (!this.checkValidity()) {
    this.classList.add('invalid');
    this.classList.add('input-error')
    document.getElementById('emailError').style.display = 'block';
  } else {
    this.classList.remove('invalid');
    this.classList.remove('input-error')
    document.getElementById('emailError').style.display = 'none';
  }
});