'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var GestureHandler = require('famous/components/GestureHandler');
var _ = require('underscore/underscore-min');

// Boilerplate code to make your life easier
FamousEngine.init();

// Initialize with a scene; then, add a 'node' to the scene root
var scene = FamousEngine.createScene();
var bill  = scene.addChild();
var personList = bill.addChild();
var history = scene.addChild();



var peoples = {
    lennart: {
        id: 'lelle',
        faceImage: './images/lelle.jpg',
        name: 'Lennart K?llb?ck'
        },
    dmitry:{
        id: 'dmitry',
        faceImage: './images/dmitry.jpeg',
        name: 'Dmitry Kouznetsov'
        },
    alex: {
        id: 'alex',
        faceImage: './images/alex.jpg',
        name: 'Alexey Emshanov'
        },
    ivan: {
        id: 'ivan',
        faceImage: './images/ivan.jpg',
        name: 'Ivan Lapshin'
        }
};
console.log(peoples);

bill.setSizeMode ('relative', 'absolute')
    .setAbsoluteSize (0, 100)
    .setProportionalSize(0.9, 1);

var billDIV = new DOMElement(bill, {
    content: 300 + ' SEK',
    properties: {
        'background': '#E0E0E0',
        'line-height': '100px',
        'vertical-align': 'middle',
        'text-align': 'center',
        'font-size': '32px',
        'border-bottom': '2px solid grey'
    }
});

var yPos = 100;

    personList.setSizeMode('relative', 'absolute')
        .setPosition(0, yPos)
        .setAbsoluteSize(0, 65)
        .setAlign(0, 0);

    var personlistDIV = new DOMElement(personList, {
        content: ' ',
        properties: {
            'background': '#F5F5F5',
            'border-bottom': '2px solid darkgray',
            'cursor': 'pointer'
        }
    });

    var face = personList.addChild();

    face.setSizeMode('absolute', 'absolute')
        .setAbsoluteSize(48, 48)
        .setPosition(5, 5);

    var faceDIV = new DOMElement(face, {tagName: 'img', properties: {'border-radius': 24 + 'px'}})
        .setAttribute('src', peoples.lennart.faceImage);
    console.log('hi');


history.setAlign(0.9, 0);

var historyDIV = new DOMElement(history,{
    properties: {
        'background-color': 'lightblue',
        'padding': '10px'
    }});

history.gestures = new GestureHandler(history);
history.gestures.on('drag', function(e,p) {
    var currentPos = history.getPosition();
    var newPosX = currentPos[0] + e.centerDelta.x;
    history.setPosition(newPosX, currentPos[1]);
    console.log('hi2');
});