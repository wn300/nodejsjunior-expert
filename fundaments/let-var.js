/**
 * Execute Shell Terminal
 */

const util = require('util');
const exec = util.promisify(require('child_process').exec);


let executeTerminal = async (excecute) => {
    try {
        const { stdout, stderr } = await exec(excecute);
        return { stdout, stderr };
    }
    catch (e) {
        console.error('!!!Error en la ejecución!!!', e);
    };
};
executeTerminal('dir').then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
});