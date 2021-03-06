'use strict';

goog.provide('Blockly.Python.pi-camera');

goog.require('Blockly.Python');

Blockly.Python['take_photo'] = function(block) {
  var code = 'import picamera\nimport io\nfrom PIL import Image\ncamData = io.BytesIO()\nwith picamera.PiCamera() as camera:\n\tcamera.capture(camData, \'jpeg\')\ncamData.seek(0)\nimage = Image.open(camData)\n';
  return code;
};

Blockly.Python['test_photo'] = function(block) {
  var code = 'from PIL import Image\nimport urllib.request, io\ntestImageData = io.BytesIO(urllib.request.urlopen("http://localhost/test.jpg").read())\nimage = Image.open(testImageData)\n';
  return code;
};

Blockly.Python['save_to_desktop'] = function(block) {
  var code = 'image.save("/home/pi/Desktop/myPhoto.jpg")\n';
  return code;
};

Blockly.Python['display_on_screen'] = function(block) {
  var code = 'image.save("/tmp/myPhoto.jpg")\n';
  return code;
};