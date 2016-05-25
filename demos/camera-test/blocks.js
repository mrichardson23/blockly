/**
 * Blockly Demos: Block Factory Blocks
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for Blockly's Block Factory application.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

Blockly.BlockSvg.START_HAT = true;

Blockly.Blocks['take_photo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Take a photo");
    this.setNextStatement(true, "image");
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['photo_url'] = {
  init: function() {
    this.appendValueInput("URL")
        .setCheck("String")
        .appendField("Open photo URL");
    this.setNextStatement(true, "image");
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['test_photo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Test Photo Input");
    this.setNextStatement(true, "image");
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['overlay_text'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("Overlay text:");
    this.setPreviousStatement(true, "image");
    this.setNextStatement(true, "image");
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['display_on_screen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Display on screen");
    this.setPreviousStatement(true, "image");
    this.setNextStatement(true, "image");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['display_in_gallery'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Display in gallery");
    this.setPreviousStatement(true, "image");
    this.setNextStatement(true, "image");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print");
    this.setPreviousStatement(true, "image");
    this.setNextStatement(true, "image");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['email'] = {
  init: function() {
    this.appendValueInput("EMAIL")
        .setCheck("String")
        .appendField("Email to:");
    this.setPreviousStatement(true, "image");
    this.setNextStatement(true, "image");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['add_tint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add tint:")
        .appendField(new Blockly.FieldColour("#ff0000"), "TINT");
    this.setPreviousStatement(true, "image");
    this.setNextStatement(true, "image");
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};