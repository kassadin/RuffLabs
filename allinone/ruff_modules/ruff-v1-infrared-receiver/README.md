[![Build Status](https://travis-ci.org/ruff-drivers/ruff-v1-infrared-receiver.svg)](https://travis-ci.org/ruff-drivers/ruff-v1-infrared-receiver)

# Infrared Receiver Driver

This module can be used to receive infrared signals.

## Supported Engines

* Ruff: ~1.2.0

## Supported Models

- [irr-01](https://rap.ruff.io/devices/irr-01)

## Installing

Execute following command and enter a **supported model** to install.

```sh
# Please replace `<device-id>` with a proper ID.
# And this will be what you are going to query while `$('#<device-id>')`.
rap device add <device-id>

# Then enter a supported model, for example:
# ? model: irr-01
```

## Usage

Here is the basic usage of this driver.

```js
$('#<device-id>').on('data', function(data) {
    console.log('received data', data);
});
```

## FAQ

If you use this driver under `Ruff: 1.2.0`, you should to press the `HRESET` button to reboot the RuffOS after deploying your application.

## API References

### Events

#### `data`

Emits on valid infrared signals received, calls the listener with the data received.
And the data emitted is an array of numbers that represent time spans (in μs) of high-level and low-level signals.

A high-level time span is ORed with `0x01000000`.
For example, if a high-level signal lasts 500 (`0x000001f4`) μs, the correspondent signal number is then `0x010001f4`.

## Contributing

Contributions to this project are warmly welcome. But before you open a pull request, please make sure your changes are passing code linting and tests.

You will need the latest [Ruff SDK](https://ruff.io/) to install rap dependencies and then to run tests.

### Installing Dependencies

```sh
npm install
rap install
```

### Running Tests

```sh
npm test
```

## License

The MIT License (MIT)

Copyright (c) 2016 Nanchao Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
