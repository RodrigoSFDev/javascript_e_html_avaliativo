const form = document.getElementById('form');
const email = document.getElementById('email');
const nome = document.getElementById('name');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2');
const btn = document.getElementById('btn');

form.addEventListener('input', function() {
  if (nome.value && email.value && password.value && confirmPassword.value && password.value === confirmPassword.value && password.value.length >= 6 && password.value.length <= 10) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});