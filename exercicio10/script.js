const pessoas = document.querySelectorAll('input[name="pessoa"]');
  const cpf = document.getElementById('cpf');
  const cnpj = document.getElementById('cnpj');
  const dataNascimento = document.getElementById('dataNascimento');
  const cep = document.getElementById('cep');

  pessoas.forEach(pessoa => {
    pessoa.addEventListener('change', function() {
      if (this.value === 'fisica') {
        cpf.disabled = false;
        cnpj.disabled = true;
        dataNascimento.disabled = false;
      } else {
        cpf.disabled = true;
        cnpj.disabled = false;
        dataNascimento.disabled = true;
      }
    });
  });

  dataNascimento.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  cep.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
  });