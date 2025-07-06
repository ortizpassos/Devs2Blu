cd C:\Devs2Blu
git init
git add .
git commit -m "Aulas Devs2Blu"
git remote add origin https://github.com/ortizpassos/Devs2Blu.git
gh repo create Devs2Blu --public --source=. --push --description "Devs2Blu"
git branch -M main
git push -u origin main


