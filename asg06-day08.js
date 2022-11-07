//Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    return nums.indexOf(target)
};


//Sort Colors
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function (nums) {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    let l = 0,
    r = nums.length - 1,
    m = 0;
    while (m <= r) {
        if (nums[m] == 2) {
            swap(m, r);
            r--;
        } else if (nums[m] == 0) {
            swap(m, l);
            l++;
            m++;
        } else {
            m++;
        }
    }
};