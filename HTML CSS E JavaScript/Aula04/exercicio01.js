let alunoAtual = null; 

// Desabilita o campo notas/media/situação antes de digitar e salvar aluno
      if(!alunoAtual){
        document.getElementById("nota1").disabled = true;
        document.getElementById("nota2").disabled = true;
        document.getElementById("nota3").disabled = true;
        document.getElementById("btnSalvarNotas").disabled = true;
      }

    document.getElementById("btnOk").addEventListener("click", function() {
      const nome = document.getElementById("nomeAluno").value.trim();      
       
      // Verifica se o nome foi digitado
      if (nome === "") {
        alert("Digite o nome do aluno!");
        return;
      }

      alunoAtual = { nome }; // salva o nome do aluno em um objeto

      // mostra a área das notas
      document.getElementById("areaNotas").style.display = "block";

      

      // opcional: desativa o campo de nome para evitar cadastrar outro aluno antes de salvar as notas
      document.getElementById("nomeAluno").disabled = true;
      document.getElementById("btnOk").disabled = true;
      document.getElementById("nota1").disabled = false;
      document.getElementById("nota2").disabled = false;
      document.getElementById("nota3").disabled = false;
      document.getElementById("btnSalvarNotas").disabled = false;
    });

    document.getElementById("btnSalvarNotas").addEventListener("click", function() {
      if (!alunoAtual) { 
        alert("Nenhum aluno selecionado!");     
        return;

        
      }

      document.getElementById("nota1").disabled = true;
        document.getElementById("nota2").disabled = true;
        document.getElementById("nota3").disabled = true;
        document.getElementById("btnSalvarNotas").disabled = true;

      // pegar notas
      const n1 = parseFloat(document.getElementById("nota1").value);
      const n2 = parseFloat(document.getElementById("nota2").value);
      const n3 = parseFloat(document.getElementById("nota3").value);

      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Digite todas as notas!");
        return;
      }

      alunoAtual.nota1 = n1;
      alunoAtual.nota2 = n2;
      alunoAtual.nota3 = n3;

      alunoAtual.media = ((n1 + n2 + n3) / 3).toFixed(2);

       // Definir situação
      if (alunoAtual.media >= 7) {
        alunoAtual.situacao = "Aprovado";    
      } else if (alunoAtual.media >= 5) {
        alunoAtual.situacao = "Recuperação";    
      } else {
        alunoAtual.situacao = "Reprovado";      
      }

      // Adiciona na tabela
      const tabela = document.getElementById("tabelaAlunos").getElementsByTagName("tbody")[0];
      const novaLinha = tabela.insertRow();

      novaLinha.insertCell(0).innerText = alunoAtual.nome;
      novaLinha.insertCell(1).innerText = alunoAtual.nota1;
      novaLinha.insertCell(2).innerText = alunoAtual.nota2;
      novaLinha.insertCell(3).innerText = alunoAtual.nota3;
      novaLinha.insertCell(4).innerText = alunoAtual.media; 
      novaLinha.insertCell(5).innerText = alunoAtual.situacao; 
      
    // Define a cor da célula de situação com base na situação do aluno   
    novaLinha.cells[0].style.backgroundColor = "lightblue"; // cor de fundo do nome do aluno   
    alunoAtual.nota1 >= 7 ? novaLinha.cells[1].style.backgroundColor = "green" : alunoAtual.nota1 >= 5 ? novaLinha.cells[1].style.backgroundColor = "orange" : novaLinha.cells[1].style.backgroundColor = "red";
    alunoAtual.nota2 >= 7 ? novaLinha.cells[2].style.backgroundColor = "green" : alunoAtual.nota2 >= 5 ? novaLinha.cells[2].style.backgroundColor = "orange" : novaLinha.cells[2].style.backgroundColor = "red";
    alunoAtual.nota3 >= 7 ? novaLinha.cells[3].style.backgroundColor = "green" : alunoAtual.nota3 >= 5 ? novaLinha.cells[3].style.backgroundColor = "orange" : novaLinha.cells[3].style.backgroundColor = "red";
    alunoAtual.media >= 7 ? novaLinha.cells[4].style.backgroundColor = "blue" : alunoAtual.media >= 5 ? novaLinha.cells[4].style.backgroundColor = "orange" : novaLinha.cells[4].style.backgroundColor = "red";
    
    if (alunoAtual.situacao === 'Aprovado') {
    novaLinha.cells[5].style.color = "black";
    novaLinha.cells[5].style.backgroundColor = "green"; // cor de fundo da média aprovada
     } else if (alunoAtual.situacao === 'Recuperação') {
    novaLinha.cells[5].style.color = "black";
    novaLinha.cells[5].style.backgroundColor = "orange"; // cor de fundo da média de recuperação
     } else if (alunoAtual.situacao === 'Reprovado') {
    novaLinha.cells[5].style.color = "black";
    novaLinha.cells[5].style.backgroundColor = "red"; // cor de fundo da média reprovada
    } 
      
      // Limpa tudo para novo cadastro
      alunoAtual = null;

      document.getElementById("nomeAluno").value = "";
      document.getElementById("nomeAluno").disabled = false;
      document.getElementById("btnOk").disabled = false;

      document.getElementById("areaNotas").style.display = "block";
      document.getElementById("nota1").value = "";
      document.getElementById("nota2").value = "";
      document.getElementById("nota3").value = "";
    }
);