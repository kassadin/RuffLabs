/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';

var driver = require('ruff-driver');
var Receiver = require('./infrared-receiver.js');

var PIN = 11;

module.exports = driver({
    attach: function () {
        var that = this;
        this._receiver = new Receiver();
        this._receiver.open(PIN, function (error, data) {
            if (error) {
                that.emit('error', error);
                return;
            }

            that.emit('data', data);
        });
    },
    detach: function (done) {
        this._receiver.close(done);
    }
});
