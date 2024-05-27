class Vehicle {
    
    gridWidth: number;
    gridHeight: number;

    x: number = 0
    y: number = 0;
    commands: string[] = [];

    constructor(gridWidth: number, gridHeight: number) {
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
    }

    runCommand(command: string): boolean {
        let parts = command.split(',');
        let value = parseInt(parts[0]);
        let action = parts[1];
        this.commands.push(command);
        switch (action) {
            case 'N':
                return this.move(value, 'Y');
            case 'S':
                return this.move(-value, 'Y');
            case 'O':
                return this.move(-value, 'X');
            case 'E':
                return this.move(value, 'X');
        }
        throw new Error(`Invalid action ${action}`);
    }

    move(steps: number, direction: 'X' | 'Y') {
        let limit = direction === 'X' ? this.gridWidth : this.gridHeight;
        let current = direction === 'X' ? this.x : this.y;
        let newValue = current + steps;
        let moveCompleted = true;
        if (newValue < 0) {
            newValue = 0;
            moveCompleted = false;
        } else if (newValue >= limit) {
            newValue = limit - 1;
            moveCompleted = false;
        }
        if (direction === 'X') {
            this.x = newValue;
        } else {
            this.y = newValue;
        }
        return moveCompleted;
    }
}

export { Vehicle };
