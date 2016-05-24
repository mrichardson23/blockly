'use strict';

goog.provide('Blockly.Python.pi-camera');

goog.require('Blockly.Python');


Blockly.Python['take_photo'] = function(block) {
  var code = 'import picamera\nwith picamera.PiCamera() as camera:\n\tcamera.capture(\'foo.jpg\')';
  return [code, Blockly.Python.ORDER_ADDITION];
};