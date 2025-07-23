/*
    PACOTES/DEPENDÊNCIAS
    - EXPRESS;
    - NODEMON;
    - CORS;
    - EXPRESS-FILEUPLOAD.
*/ 
    //IMPORTAR O EXPRESS/CORS/FILEUPLOAD
    const express    = require('express');
    const cors       = require('cors');
    const fileUpload = require('express-fileupload'); 
 
    // IMPORTAR O PATH
    const path = require('path');
   
    // CRIAR UM OBJETO APP
    const app   =   express();

    // ADICIONAR OCORS
    app.use(cors());
    // ADICIONAR O FILEUP
    app.use(fileUpload());

    //CRIAR ROTA PARA FAZER O UPLOAD (form-data)
    app.post('/', (req, res) => {
        // Obter o arquivo
        const arquivo = req.files.arquivo;

        // Definir caminho do upload e o nome do arquivo
        const destino = path.join(__dirname, 'uploads', arquivo.name);
        
        // Mover o arquivo
        arquivo.mv(destino);

        // Retorno da API
        res.status(200).json({mensagem: 'upload realizado com sucesso'});
        
    });

    //SERVIDOR
    app.listen(8080);
