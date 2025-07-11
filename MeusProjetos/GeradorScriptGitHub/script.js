    const usuario = document.getElementById('usuario');
    const caminho = document.getElementById('caminho');
    const gerar = document.getElementById('gerar');
    const saida = document.getElementById('script');

    let script = "";
    let nomePasta = "";

    function atualizarScript() {
      const user = usuario.value.trim();
      const path = caminho.value.trim().replace(/[/\\]+$/, ""); // remove barra final

      if (user && path) {
        nomePasta = path.split(/[/\\]/).pop(); // pega o nome da última pasta
        const fullPath = `"${path}"`;

        script = `
cd ${fullPath}
git init
git add .
git commit -m "Criação do repositório"
git remote add origin https://github.com/${user}/${nomePasta}.git
gh repo create ${nomePasta} --public --source=. --push --description "Projetos com ${nomePasta}"
git branch -M main
git push -u origin main
        `.trim();

        saida.textContent = script;
        gerar.disabled = false;
      } else {
        saida.textContent = '';
        gerar.disabled = true;
      }
    }

    usuario.addEventListener('input', atualizarScript);
    caminho.addEventListener('input', atualizarScript);

    gerar.addEventListener('click', () => {
      const blob = new Blob([script], { type: "text/x-shellscript" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `criar-repositorio-${nomePasta}.sh`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
