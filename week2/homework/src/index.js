'use strict';

const fs = require('fs');
const addItem = require('./addItem');
const reset = require('./reset.js');
const helpFile = require('./helpFile');
const showList = require('./showList');
const remove = require('./removeItem');

let command = process.argv[2];
let list = [];

switch (command) {
    case 'add':
        addItem.appendItem();
    break;

    case 'help':
        helpFile.showHelp();
    break;

    case 'list':
        showList.showList();
    break;

    case 'remove':      
         remove.removeItem();
    break;

    case 'reset':
        reset.reset();
    break;

    default :
         helpFile.showHelp();
}

