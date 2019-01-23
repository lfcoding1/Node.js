'use strict';

const fs = require('fs');



module.exports = {
    reset: function(){
        let index = process.argv[3];
        let data = fs.readFileSync('todolist.txt', 'utf8');
        let parse = JSON.parse(data);
        let removed = parse.splice(index, 0)
        fs.writeFileSync('todolist.txt', JSON.stringify(removed), 'utf8');
        console.log('To do List is now reset');
    
     
     }
}
