const assert = require( 'assert' );
const fs = require( 'fs' );
const plistFixture = fs.readFileSync( './fixtures/fixture.plist', {
    encoding: 'UTF-8',
} );

const proxyquire = require( 'proxyquire' );

const CertDownloaderStub = ( ( options ) => {
    function CertDownloader( options ) {};

    CertDownloader.prototype.verify = ( file, callback ) => {
        callback( null, plistFixture );
    };

    return CertDownloader;
} )();

const provisioning = proxyquire( './', {
    '@stendahls/cert-downloader': CertDownloaderStub,
} );

describe( 'should call exec correctly and parse plist data', () => {
    it( 'return parsed data as object', (done)  => {
        provisioning( 'embedded.mobileprovision', ( error, data ) => {
            assert.equal( error, null );
            assert.deepEqual( data, {
                "AppIDName": "com-facebook-facebook",
                "TeamName": "Facebook Inc.",
            } );

            done();
        } );
    } );
} );
