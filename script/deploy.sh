cd ../apps/website/icymudupidiocese/
npm run build

cd ..
cd ..
 
cp -r ../apps/website/icymudupidiocese/build/ ../public/

firebase deploy --only hosting