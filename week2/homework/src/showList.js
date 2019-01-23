'use strict';

const fs = require('fs');


module.exports = {
    
    showList: function(){
        fs.readFile('todolist.txt', 'utf8', function (err, data){
            if (err){
            console.log('cannot access to-do list')
            } else {
            console.log(data)
            } 
        });   
    }
    }
   
