export default function bs_list(haystack: number[], needle: number): boolean {
    let lowpoint = 0;
    let highpoint = haystack.length;

    do {
        const midpointIndex = Math.floor(lowpoint + (highpoint - lowpoint) / 2);
        const testValue = haystack[midpointIndex];

        if (testValue === needle) {
            return true;
        } else if (testValue > needle) {
            highpoint = midpointIndex;
        } else {
            lowpoint = midpointIndex + 1;
            // I'm adding one because I already checked if midpointIndex is the needle. so it can be discarded too now.
        }
    } while (lowpoint < highpoint);

    return false;
}
