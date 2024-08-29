const fs=require('fs');
const writable=fs.createWriteStream('./text.txt');
writable.write('hello ,world \n')
writable.end()