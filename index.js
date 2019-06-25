const plist = require( 'simple-plist' );
const CertDownloader = require( '@stendahls/cert-downloader' );

module.exports = ( file, callback ) => {
    const certDl = new CertDownloader();

    certDl.verify( file, ( verificationError, output ) => {
        if ( verificationError ) {
            return callback( verificationError );
        }

        callback( null, plist.parse( output ) );
    } );
};
