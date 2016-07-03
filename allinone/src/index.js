'use strict';

var led;
var lcd;
var btnr;
var btnb;
var dht; // 温湿度
var light;
var buzzer;
var ir;
var lcdStatus = 1; // lcd on

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#led-g').turnOn();

    dht = $('#dht');
    led = $('#myled');
    lcd = $('#mylcd');
    light = $('#light-sensor');
    buzzer = $('#buzzer');
    ir = $('#ir');

    welcome();

    // btnr get dht info
    btnr = $('#btn-r');
    btnr.on('push', function () {
        console.log('Button red pushed.');
        lcd.clear();

        dht.getTemperature(function (error, temperature) {
            printToLcd('TEMP', error, temperature, 0);
        });

        dht.getRelativeHumidity(function (error, humidity) {
            printToLcd('HUMI', error, humidity, 1);
        });
    });

    btnr.on('release', function () {
        console.log('Button red released.');
    });
    
    // btn-b 
    btnb = $('#btn-b');
    btnb.on('push', function () {
        console.log('Button blue pushed.');
        lcd.clear();
        light.getIlluminance(function (error, value) {
            printToLcd('Light', error, value, 0);
        });
    });

    btnb.on('release', function () {
        console.log('Button blue released.');
    });


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
                welcome();
            }
        }
    });

});

$.end(function () {
    $('#led-g').turnOff();
});


function welcome(){
    lcd.clear();
    lcd.print('Hello,Ruff!');
    lcd.setCursor(0,1);
    lcd.print('kassadin.vip');
}

function printToLcd(label,error,value,line){
    lcd.setCursor(0,line);
    var content;
    if (error) {
        console.error(error);
        content = label + ':ERR';
    }else{
        console.log(label, value);
        content = label + ':' + value;
    }

    lcd.print(content); 
}