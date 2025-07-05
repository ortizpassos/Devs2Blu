#!/bin/bash
cd C:\devs2blu
git init
git add .
git remote add origin https://github.com/ortizpassos/Devs2Blu.git
git commit -m "Commit inicial"
gh repo create Aula20_06 --public --source=. --push --description "Aula20_06"


