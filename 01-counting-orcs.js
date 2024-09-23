function countOrcs(n, m, h) {
    let fights = n;
    let count = n;

    for (let i = 1; i < h; i++) {
        count += m;
        fights += count;
    }

    console.log(fights);
}

countOrcs(5, 2, 3);
countOrcs(7, 1, 2);
countOrcs(10, -1, 1);
countOrcs(8, -2, 3);
