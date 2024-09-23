function isCountered(action, prevAction) {
    let pairs = {
        '(': ')',
        '{': '}',
        '!': '!',
    };

    return action === pairs[prevAction];
}

function duel(actions) {
    if (actions[0] !== '(' && actions[0] !== '{' && actions[0] !== '!') {
        console.log('Not Legendary');
        return;
    }

    let unmatchedStrikes = [];

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const prevAction = unmatchedStrikes[unmatchedStrikes.length - 1];
        let isStrike = action === '(' || action === '{' || action === '!';
        let isCounterStrike = action === ')' || action === '}' || action === '!';

        if (action === '!' && prevAction === '!') {
            unmatchedStrikes.pop();
            continue;
        }

        if (isStrike) {
            unmatchedStrikes.push(action);
            if (action === '!') {
                continue;
            }
        }

        if (isCounterStrike) {
            if (isCountered(action, prevAction)) {
                unmatchedStrikes.pop();
            } else {
                console.log('Not Legendary');
                return;
            }
        }
    }

    if (unmatchedStrikes.length) {
        console.log('Not Legendary');
    } else {
        console.log('Legendary');
    }
}

duel('()()(()())');
duel('((!!)(({!!})))');
duel('((())');
duel('{!}!');
duel('({(!!}))');