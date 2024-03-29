
    // https://www.hackerrank.com/challenges/diagonal-difference/problem
    /* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal
        - top right to bottom left diagonal
    */

    const squareMatrix1 = [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9],
    ];
    const expected1 = 2;
    /* 
        left to right diagonal: 1 + 5 + 9 = 15
        right to left diagonal: 3 + 5 + 9 = 17
        absolute difference = 2
    */
    
    const squareMatrix2 = [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
    ];
    const expected2 = 0;
    /* 
        left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
        right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
        absolute difference = 0
    */
    
    /**
     * Calculates the absolute diagonal difference of a square matrix.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
     *    a square matrix (rows and columns).
     * @returns {number} Represents the absolute difference between the top left to
     *    bottom right diagonal and the top right to bottom left diagonal.
     */
    function diagonalDifference (sqrMatrix) {
        const diagonal = sqrMatrix.length - 1;
        let leftToRight = 0;
        let rightToLeft = 0;
        for (let i = 0; i < sqrMatrix.length; i++) {
            leftToRight += sqrMatrix[i][i];
            rightToLeft += sqrMatrix[i][diagonal - i];
        }
        return Math.abs(leftToRight - rightToLeft);
    }
    
    // console.log(diagonalDifference(squareMatrix1));
    // console.log(diagonalDifference(squareMatrix2));


    /* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
    */

    const nums1A = [1, 2, 2, 2, 7];
    const nums1B = [2, 2, 6, 6, 7];
    const expected = [1, 2, 2, 2, 6, 6, 7];

    const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
    const nums2B = [2, 6, 6, 7];
    const expected6 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

    const nums3A = [];
    const nums3B = [2, 2, 3, 3, 3];
    const expected3 = [2, 2, 3, 3, 3];

    const nums4A = [2, 2, 3, 3, 3];
    const nums4B = [];
    const expected4 = [2, 2, 3, 3, 3];

    const nums5A = [];
    const nums5B = [];
    const expected5 = [];
    /* 
    Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
    because it occurs 3 times at most in ONE set
    */

    /**
     * Combines two already sorted multiset arrays into an ordered multiset union
     * Venn Diagram Visualization (top):
     * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
     * - Time: O(?).
     * - Space: O(?).
     * @param {Array<number>} sortedA Both sets are sorted multisets
     *    (contain dupes).
     * @param {Array<number>} sortedB
     * @returns {Array<number>} An ordered multiset union of the given sets.
     *    The return should include dupes, but the amount of dupes for each int
     *    should be based on the max amount that dupe appears from one set,
     *    not the combined amount from both sets.
     */
    function orderedMultisetUnion(sortedA, sortedB) {
        const newArray = [];
        let pointerA = 0;
        let pointerB = 0;
    
        while(pointerA<sortedA.length && pointerB<sortedB.length){
            if (sortedA[pointerA] === sortedB[pointerB]){
                newArray.push(sortedA[pointerA]);
                pointerA++;
                pointerB++;
            } else if (sortedA[pointerA] < sortedB[pointerB]){
                newArray.push(sortedA[pointerA]);
                pointerA++;
            } else {
                newArray.push(sortedB[pointerB]);
                pointerB++;
            }
        }
        if(pointerA<sortedA.length){
            return newArray.concat(sortedA.slice(pointerA))
        } else if(pointerB<sortedB.length){
            return newArray.concat(sortedB.slice(pointerB))
        }else{
            return newArray;
        }
    }
    
    console.log("----orderedMultisetUnion----")
    console.log(orderedMultisetUnion(nums1A,nums1B));
    console.log(orderedMultisetUnion(nums2A,nums2B));
    console.log(orderedMultisetUnion(nums3A,nums3B));
    console.log(orderedMultisetUnion(nums4A,nums4B));
    console.log(orderedMultisetUnion(nums5A,nums5B));