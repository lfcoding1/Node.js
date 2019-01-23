'use strict';
const fs = require('fs');

module.exports ={
        showHelp: function(){
    console.log(`Here are the commands to use when creating your to-do list: \n
    
    Commands: \n
    node index.js <command> \n
    The possible commands are:\n
        new: new to-do list \n
        help: opens this help section \n
        add: adds an item to your to-do list \n
        list: shows your current to-do list \n
        remove: removes an item from your to-do list (+ indexnumber) \n
        no command: will send you to this help section \n`)
}
}


