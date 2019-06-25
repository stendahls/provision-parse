# Provision parse [![Build Status](http://img.shields.io/travis/stendahls/provision-parse.svg?style=flat-square)](https://travis-ci.org/stendahls/provision-parse)
> parse .mobileprovision(iOS) and .provisionprofile(OS X) files

Converts the provisioning profile raw plist data into JavaScript objects, arrays, etc.

## Install

```sh
$ npm i @stendahls/provision-parse
```


## Usage

```js
const provisioning = require( '@stendahls/provision-parse' );

provisioning( './Payload/Facebook.app/embedded.mobileprovision', ( parseError, provisionData ) => {
    console.log( provisionData );
    // => { "AppIDName": "com.facebook.facebook",
    //      "TeamName": "Facebook Inc.",
    //      ... }
} );
```
