function findRecords(archive, record) {
    let firstOccurrence = -1;
    let lastOccurrence = -1;

    // find first occurrence
    for (let i = 0; i < archive.length; i++) {
        if (archive[i] === record) {
            firstOccurrence = i;
            break;
        }
    }

    if (firstOccurrence === -1) {
        console.log('Record not found');
    } else {
        // find last occurrence
        for (let i = archive.length - 1; i >= 0; i--) {
            if (archive[i] === record) {
                lastOccurrence = i;
                break;
            }
        }

        console.log('First Occurrence:', firstOccurrence);
        console.log('Last Occurrence:', lastOccurrence);
    }
}

findRecords(['Frodo', 'Sam', 'Frodo', 'Merry'], 'Frodo');
findRecords(['Pippin', 'Merry', 'Sam', 'Pippin'], 'Pippin');
findRecords(['Aragorn', 'Legolas', 'Gimli'], 'Boromir');
findRecords(['Gandalf', 'Sam', 'Aragorn', 'Frodo'], 'Frodo');
