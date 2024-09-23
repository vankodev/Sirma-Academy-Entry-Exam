function decipherMessage(s, n) {
    let message = '';

    for (const letter of s) {
        let char = letter.charCodeAt(0);
        let realLetter = String.fromCharCode(char - n);
        message += realLetter;
    }

    console.log(message);
}

decipherMessage('Uifsf!jt!b!tfdsfu"', 1);
decipherMessage('Wkurz#lw#lq#wkh#iluh$', 3);
decipherMessage('Fwfltws', 5);
