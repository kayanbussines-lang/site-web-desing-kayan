// Validação do formulário de cadastro (demonstração front-end).
(() => {
  const form = document.getElementById('cadastroForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      document.getElementById('mensagemSucesso').classList.remove('d-none');
      form.reset();
      form.classList.remove('was-validated');
    } else {
      form.classList.add('was-validated');
      document.getElementById('mensagemSucesso').classList.add('d-none');
    }
  });
})();

// Filtro simples para localizar produtos na tabela.
(() => {
  const campo = document.getElementById('buscaProduto');
  const tabela = document.getElementById('tabelaProdutos');
  if (!campo || !tabela) return;

  campo.addEventListener('input', () => {
    const termo = campo.value.toLocaleLowerCase('pt-BR').trim();
    const linhas = tabela.querySelectorAll('tbody tr');
    let encontrados = 0;

    linhas.forEach((linha) => {
      const corresponde = linha.textContent.toLocaleLowerCase('pt-BR').includes(termo);
      linha.classList.toggle('d-none', !corresponde);
      if (corresponde) encontrados++;
    });

    document.getElementById('semResultados').classList.toggle('d-none', encontrados > 0);
  });
})();