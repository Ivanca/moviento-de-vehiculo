
import readline = require('readline');

class CliHelper {
    static rl: readline.Interface;
    static async prompt(query: string): Promise<string> {
        if (!CliHelper.rl) {
            CliHelper.rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
        }
        return new Promise<string>(
            (resolve) => CliHelper.rl.question(query, resolve)
        );
    }
    static async close() {
        if (CliHelper.rl) {
            CliHelper.rl.close();
        }
    }
}

export { CliHelper };
