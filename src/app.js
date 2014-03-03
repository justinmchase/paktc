if(typeof v8debug === 'object') {
    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Press any key to continue...", function (answer) {
        rl.close();
    });
}