export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                const temporaryElement = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temporaryElement;
                // assigned current array element to a variable called temporary element so that it could be assigned to the next array element. still need to figure out why the inner for loop contains -1, and -i. but still chipping away!
            }
        }
    }
}
