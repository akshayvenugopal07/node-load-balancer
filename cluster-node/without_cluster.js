const { generateKeyPair } = require('crypto');
const app = require('express')();

// API endpoint 
// Send public key as a response
app.get('/key', (req, res) => {
    generateKeyPair('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: 'top secret'
        }
    }, (err, publicKey, privateKey) => {

        // Handle errors and use the
        // generated key pair.
        res.send(publicKey);
    })
})

app.listen(3000, err => {
    err ?
        console.log("Error in server setup") :
        console.log('Server listening on PORT 3000')
});
