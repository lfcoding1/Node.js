'use strict';

const fs = require('fs');


module.exports = {
    removeItem: function(){
       let index = process.argv[3];
       let data = fs.readFile('todolist.txt', 'utf8', function (err, data){
            if (err){
            console.log('cannot access to-do list');
            } else {
            let parse = JSON.parse(data);
            let removed = parse.splice(index -1, 1);
            fs.writeFileSync('todolist.txt', JSON.stringify(removed), 'utf8');
            console.log('item removed from your list');
            }
        })
    }
}

