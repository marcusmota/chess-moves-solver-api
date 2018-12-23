const app = require("./src/app");

const appName = 'Chess Moves Solver';
const port = 6060

app.listen(6060, function () {
    console.log(``);
    console.log(``);
    console.log(`===================`);
    console.log(`APP: ${appName}`);
    console.log(`PORTA: ${port}`);
    console.log('DATA: '+(new Date().toISOString()));
    console.log(`===================`);
    console.log(``);
    console.log(``);
});

