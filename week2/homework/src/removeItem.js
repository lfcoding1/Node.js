'use strict';

const fs = require('fs');



module.exports = {
    removeItem: function(){
       let index = process.argv[3];
       let data = fs.readFileSync('todolist.txt', 'utf8');
       let parse = JSON.parse(data);
       let removed = parse.splice(1, index)
       fs.writeFileSync('todolist.txt', JSON.stringify(removed), 'utf8');
       console.log('item removed from your list');
   
    
    }
    
}

