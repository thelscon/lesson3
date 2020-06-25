'use strict';

let typeOfAction = prompt('Ender action type');
let CREATE_ACTION = 'create';
let READ_ACTION = 'read';
let UPDATE_ACTION = 'update';
let DELETE_ACTION = 'delete';
switch (typeOfAction) {
    case CREATE_ACTION:
        console.log ('Create');
        break;
    case READ_ACTION:
    case UPDATE_ACTION:
        console.log ('Read');
        console.log ('Update');
        break;
    case DELETE_ACTION:
        console.log ('Delete');
        break;
    default:
        console.log('Default behavior');
}