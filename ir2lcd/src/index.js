'use strict';

var lcd;
var lcdStatus = 1;
var ir;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#led-g').turnOn();


    lcd = $('#lcd');
    ir = $('#ir');

    lcd.turnOn();

    lcd.print('IR 2 LCD');
    lcd.setCursor(0,1);

    ir.on('data', function(data) {
        console.log('received data', data);
        if(data){
            if(lcdStatus === 1){
                lcd._p3.write(0);
                lcd.turnOff();
                lcdStatus = 0;
            }else{
                lcd._p3.write(1);
                lcd.turnOn();
                lcdStatus = 1;
            }
        }
    });

});

$.end(function () {
    $('#led-g').turnOff();
    lcd.turnOff();
    ir.turnOff();
});
