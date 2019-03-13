#!/bin/bash
cd ~/Downloads/prosjekter/CrewCall/crewcall
ng build --prod || exit 9
sed -i 's#<base href="/">#<base href="/public/userfront/">#' dist/crewcall/index.html
rsync -az --delete -e ssh dist/ nivel@leke.crewcall.no:CrewcallFront/

#rsync -az --delete -e ssh ./ nivel@leke.crewcall.no:CrewcallFront/
cp .htaccess ./dist/crewcall