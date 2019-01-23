'use strict';

const fs = require('fs');


module.exports = {
    appendItem: function(){
		let newItem = process.argv[3];
		let fileContent = fs.readFileSync('todolist.txt', 'utf8');
		let list = JSON.parse(fileContent);
		list.push(newItem);
		fs.writeFileSync('todolist.txt', JSON.stringify(list), 'utf8');
        console.log('The item was added to your to-do list');   
    }      
    }   
        

