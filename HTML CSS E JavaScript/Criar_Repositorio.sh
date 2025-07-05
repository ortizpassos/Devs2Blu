#!/bin/bash
cd C:\devs2blu
git init
git add .
git remote add origin https://github.com/ortizpassos/Devs2Blu.git
git commit -m "Commit inicial"
gh repo create Devs2Blu --public --source=. --push --description "Arquivos do Curso Devs2Blu"


