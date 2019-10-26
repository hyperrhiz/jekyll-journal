/* global $, QUnit, self, F, console */
'use strict';

// Functional tests of the UI elements using FuncUnit
// FuncUnit manages the behaviour of the QUnit run server so that
// 1) test steps are run in the intended sequence and 
// 2) the completion of the asynchronous UI operations are properly waited for
// `F` invokes FuncUnit tests. F is a "copy" of $, created using jQuery.sub.
// FuncUnit requires that test html is not within `div #qunit-fixture`.

QUnit.module( "Functional test", {
  beforeEach: function() {

    // It was decided not to have id's on the production markup
    // So we add jQuery collections and html id's here for clarity in testing only
    self.seek_slider    = $('.playa > section > div > input');
    self.play_button_slr=   '.playa > section > button:first-child';
    self.play_button    = $(self.play_button_slr);
    self.mute_button    = $('.playa button.btn:nth-child(4)');
    self.volume_slider  = $('.playa div.btn:nth-child(5) > input:nth-child(1)');  
    self.time_info_slr  =   '.playa button.btn:nth-child(3)'; 
    self.time_info      = $(self.time_info_slr); 

   // Add some id's to the UI controls for testing only
    self.mute_button.attr(  'id', 'mute_button');
    self.seek_slider.attr(  'id', 'seek_slider');
    self.play_button.attr(  'id', 'play_button');
    self.volume_slider.attr('id', 'volume_slider');
    // self.time_info.attr(    'id', 'time_info'); // No point: player script often overwrites id attribute

    self.mute_volume_up     = '<i class="glyphicon glyphicon-volume-up"></i>';
    self.mute_volume_down   = '<i class="glyphicon glyphicon-volume-down"></i>';
    self.mute_volume_mute   = '<i class="glyphicon glyphicon-volume-off"></i>';

    self.play_play  = '<i class="glyphicon glyphicon-play"></i>';
    self.play_pause = '<i class="glyphicon glyphicon-pause"></i>';

    F('#seek_slider').exists( function () {
        $('#seek_slider').val('0').trigger('change'); // start from the beginning at each  test
        }
    );

    F('#seek_slider').val('0', 'the seek slider is initially at zero');
    F('#play_button').html(self.play_play, 'the play button icon shows "play"');

  } // beforeEach
}); // module

QUnit.test( 'audio controls have been replaced by player skin', function ( assert ) {
    
    F('audio').exists('there is a remaining audio element' );

    F('audio[controls]').missing('remaining audio element has no native controls');

    F('.playa').exists(
        function () {
            assert.ok(true, 'DOM checks complete');
        }, 'the player skin has been created' );

});

QUnit.test( 'play sequence:', function( assert ) {

    var preferred_volume = '0.1'; // during testing
    var seek_max; // remember "end of play"

    // Before play ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    F(self.time_info_slr).exists(
        function () {
            var tooltip =  F(self.time_info_slr).data('originalTitle');
            var text =  F(self.time_info_slr).text();
            seek_max = Number($('#seek_slider').prop('max'));
            assert.ok( tooltip.indexOf('Position:') > -1 , 'time button ToolTip initially shows "Position"');
            assert.ok( text !== '00:00', 'time button ToolTip initially shows "Position: 00:00"');
        });

    F('#mute_button').click().html(self.mute_volume_mute, 'clicking mute sets the mute icon to mute');

    // quiet: we're testing
    // FuncUnit drag doesn't work on this `input type="range"` slider
    F('#volume_slider').exists( function () {
        self.volume_slider.val(preferred_volume).trigger('change');
        });

    F('#volume_slider').val(preferred_volume, 'wait for volume slider to go low');

    F('#mute_button').html(self.mute_volume_down, 'lowering the volume slider changes the mute icon to "volume is low"');

    // During play ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    F('#play_button').click().wait(2000).wait(
        function () {
            var text =  $(self.time_info_slr).text();
            return text !== '00:00';
        }, 'time button ToolTip no longer shows "Position: 00:00"'
    );

    // In a browser you can see the "play" icons changing correctly.But I haven't found a way 
    // to emulate this with FuncUnit / QUnit
    // The player changes its play icons in response to audio events 
    // You'd imagine we'd be able to emulate the physical interaction ... bt no joy

    F('#mute_button').click().html(self.mute_volume_mute, 'initially clicking mute changes the mute icon to "muted"');

    F('#mute_button').click().html(self.mute_volume_down, 'toggling off mute changes the mute icon to "volume is low"');

    F('#volume_slider').val(preferred_volume, '... and restores previous volume');
    
    F('#seek_slider').exists( // play for a few seconds before skipping to end 
        function () {
            $('#seek_slider').val(seek_max - 5).trigger('change'); 
            assert.ok(true, 'skipping to the end of the track');
        });

    F('#seek_slider').val('0', 'seek slider finally at zero'); // wait for the seek slider to take effect

});


