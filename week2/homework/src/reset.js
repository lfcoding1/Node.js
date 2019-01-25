'use strict';

const fs = require('fs');

module.exports = {
    reset: function(){
        let index = process.argv[3];
        let data = fs.readFile('todolist.txt', 'utf8', function (err, data){
            if (err){
            console.log('cannot access to-do list');
            } else {
            let parse = JSON.parse(data);
            let removed = parse.splice(index, 0);
            fs.writeFileSync('todolist.txt', JSON.stringify(removed), 'utf8');
            console.log('To do List is now reset');
            }
        })
     }
}
