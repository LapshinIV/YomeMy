'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

// Boilerplate code to make your life easier
FamousEngine.init();

// Initialize with a scene; then, add a 'node' to the scene root
var scene = FamousEngine.createScene();
var bill  = scene.addChild();
var personList = scene.addChild();
var personList2 = personList.addChild();


bill.setSizeMode ('relative', 'absolute')
    .setAbsoluteSize (0, 100);
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
    personList.setSizeMode('relative', 'absolute')
        .setPosition(0, 100)
        .setAbsoluteSize(0, 65)
        .setAlign(0,0);

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
        .setAttribute('src', './images/lelle.jpg');