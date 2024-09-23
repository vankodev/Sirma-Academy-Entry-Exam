function vote(votes) {
    let yesCount = 0;
    let noCount = 0;
    let abstainCount = 0;

    for (const vote of votes) {
        if (vote === 'Yes') {
            yesCount += 1;
        } else if (vote === 'No') {
            noCount += 1;
        } else if (vote === 'Abstain') {
            abstainCount += 1;
        }
    }

    let voteResult = '';

    if (yesCount || noCount) {
        if (yesCount === noCount) {
            voteResult = 'Tie';
        } else if (yesCount > noCount) {
            voteResult = 'Yes';
        } else {
            voteResult = 'No';
        }
    } else if (abstainCount) {
        voteResult = 'Abstain';
    }

    console.log(voteResult);
}

vote(['Yes', 'No', 'Yes', 'Abstain', 'Yes']);
vote(['No', 'No', 'Yes']);
vote(['Yes', 'No']);
vote(['Abstain']);
vote(['No', 'No', 'Abstain', 'Abstain', 'Yes', 'Yes']);
vote(['No', 'Abstain', 'Abstain']);