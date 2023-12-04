export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
        // I jumped through the range by the square root of n. I didn't half the dataset this time, because it's not ordered so it's not efficient to do so. I could do it linearly, one by one, but that would have horrible performance so if I jump by the square root I had a smaller interval to look through using linear search, therefore preserving some of my performance. and then I can use my two crystal balls to figure out the highest point I can drop the ball from, without it breaking. the first is to get a general range within the dataset, and the second is to get the exact height.
    }

    i -= jumpAmount;
    // subtract sqrt(n) from our last known breaking point. and this little section here in the array will be where we perform our linear search!

    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
