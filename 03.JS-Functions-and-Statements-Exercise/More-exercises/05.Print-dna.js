function printDNAHelix(length) {
    const sequence = 'ATCGTTAGGG';
    let sequenceIndex = 0;
    
    for (let i = 0; i < length; i++) {
        let line = '';
        
        switch (i % 4) {
            case 0:
                line = `**${sequence[sequenceIndex % 10]}${sequence[(sequenceIndex + 1) % 10]}**`;
                break;
            case 1:
                line = `*${sequence[sequenceIndex % 10]}--${sequence[(sequenceIndex + 1) % 10]}*`;
                break;
            case 2:
                line = `${sequence[sequenceIndex % 10]}----${sequence[(sequenceIndex + 1) % 10]}`;
                break;
            case 3:
                line = `*${sequence[sequenceIndex % 10]}--${sequence[(sequenceIndex + 1) % 10]}*`;
                break;
        }

        console.log(line);
        sequenceIndex += 2; // Move to the next pair of symbols in the sequence
    }
}

// Test cases
printDNAHelix(4);
// Output:
// **AT**
// *C--G*
// T----T
// *A--G*

printDNAHelix(10);
// Output:
// **AT**
// *C--G*
// T----T
// *A--G*
// **GG**
// *A--T*
// C----G
// *T--T*
// **AG**
// *G--G*