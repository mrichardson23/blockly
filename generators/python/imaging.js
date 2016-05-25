'use strict';

goog.provide('Blockly.Python.pi-camera');

goog.require('Blockly.Python');

Blockly.Python['take_photo'] = function(block) {
  var code = 'import picamera\nwith picamera.PiCamera() as camera:\n\tcamera.capture(\'/tmp/foo.jpg\')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['save_to_desktop'] = function(block) {
  var code = 'image.save("/home/pi/Desktop/myPhoto.jpg")\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
