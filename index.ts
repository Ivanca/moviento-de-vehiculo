

import { Vehicle } from './vehicle';
import { CliHelper } from './cli-helper';

const startCliApp = async () => {
    // ask for grid size (node CLI):
    const { prompt } = CliHelper;
    console.log([
        `■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■`,
        `Bienvenido a la simulacion simple de moviento de vehículo`,
        `■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■`
    ].join('\n'));
    const gridWidth = parseInt(await prompt('Cual es el ancho de la superficie? (ejemplo: 10)\n'));
    const gridHeight = parseInt(await prompt('Cuál es el alto de la superficie? (ejemplo: 20)\n'));
    const vehicle = new Vehicle(gridWidth, gridHeight);
    console.log([
        `------------------------------------------------------------------------------------------`,
        `Puede escribir los comandos para mover el vehículo en formato <Desplazamiento>,<Direccion>`,
        `Separados por punto y coman, donde N=norte, S=Sur, E=Este, O=Oeste`,
        `Por ejemplo: 5,N;3,E;4,S;2,O`,
        `Tambien puede escribir "h" para ver el historial de comandos o "q" para salir del programa`,
        `------------------------------------------------------------------------------------------`,
    ].join('\n'));

    while (true) {
        let commands = await prompt(
            `Por favor escriba los comandos a ejecutar:\n`
        );
        commands = commands.trim().toUpperCase();
        if (commands === 'H') {
            console.log(vehicle.commands.join(';'));
            continue;
        }
        if (commands === 'Q') {
            console.log('Adios!');
            break;
        }
        let parts = commands.split(';');
        for (let i = 0; i < parts.length; i++) {
            let command = parts[i];
            console.log(`Comando recibido: ${command}`);
            const cmdResult = vehicle.runCommand(command);
            console.log(`La nueva posicion del vehiculo es \n(${vehicle.x},${vehicle.y})`);
            if (!cmdResult) {
                console.log('Se ha detenido el avance por salir de los límites');
                break;
            }
        }
    }
    CliHelper.close();
}

startCliApp();
