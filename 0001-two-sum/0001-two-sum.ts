function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const j = nums.lastIndexOf(target - nums[i]);
        if (j !== -1 && i !== j) return [i, j];
    }
};