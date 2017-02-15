/**
 * create-docker-image.js
 * 
 * this script will: 
 *  1. build the documentation site using npm run build
 *  2. create a docker image of the website named name:version (where name and version are taken from the package.json)
 */

var spawn = require('cross-spawn');

exec ("npm run build").then (()=>{
    const {version,name} = require('../package.json');
    exec (`docker build -t ${name}:${version} -t ${name}:latest ./site`).then (()=>{
        console.log();
        console.log(`docker image ${name}:${version} created`);
        console.log();
        console.log(`to execute the website on your localhost type:`);
        console.log();
        console.log(` docker run --rm -p 8000:80 ${name}:${version}`);
        console.log();
        console.log(`open your web browser on http://localhost:8000`);

    });
});


/**
 * exec the command and return a promise
 */
function exec(cmd) {
    const args = cmd.split(' ');
    return new Promise((resolve, reject)  => {
        var proc = spawn(args[0], args.slice(1), { stdio: 'inherit' });
        proc.on('close', (code) => {
            if (code !== 0) {
                console.error(cmd + ' failed');
                reject(code);
            }
            console.log (cmd + " ok!");
            resolve({})
        });
    });
}