function makeFormation(ids, commands) {
    let formation = ids;

    for (let i = 0; i < commands.length; i++) {
        // console.log(commands[i])
        const [command, numStr1, numStr2] = commands[i].split(' ');
        const num1 = Number(numStr1);
        const num2 = Number(numStr2);

        switch (command) {
            case 'destroy': {
                const index = num1;

                if (index >= 0 && index < formation.length) {
                    formation.splice(index, 1);
                    console.log(formation.join(' '));
                }

                break;
            }
            case 'swap':  {
                const index1 = num1;
                const index2 = num2;

                if (
                    index1 >= 0 && index1 < formation.length &&
                    index2 >= 0 && index2 < formation.length &&
                    index1 !== index2
                ) {
                    [formation[index1], formation[index2]] = [formation[index2], formation[index1]];
                    console.log(formation.join(' '));
                }
                
                break;
            }
            case 'add': {
                const id = num1;

                formation.push(id);
                console.log(formation.join(' '));

                break;
            }
            case 'insert': {
                const id = num1;
                const index = num2;

                if (index >= 0 && index <= formation.length) {
                    formation.splice(index, 0, id);
                    console.log(formation.join(' '));
                }

                break;
            }
            case 'center': {
                const middle = Math.floor(formation.length / 2);

                if (formation.length % 2 !== 0) {
                    console.log(formation[middle]);
                } else {
                    console.log(formation[middle - 1], formation[middle]);
                }

                break;
            }
        }
    }
}

makeFormation(
    [1, 2, 3, 4, 5], 
    [
        'destroy 3', 
        'swap 0 1', 
        'add 6', 
        'center'
    ]
);

makeFormation(
    [1, 2, 3, 4, 5],
    [
        'add 6',
        'swap 0 5',
        'swap 1 4',
        'swap 2 3',
        'swap 2 100',
        'swap 2 2',
        'center',
    ],
);

makeFormation(
    [1, 2],
    [
        'insert 3 2', 
        'center', 
        'destroy 1', 
        'destroy 2', 
        'center'
    ]
);