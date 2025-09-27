let nums = [0,2,3,0,4,12];


function moveZeroes(nums){
    for(let i = 0; i<nums.length; i++){
        for(let j = 0; j<nums.length-1; j++){
            if(nums[i] === 0 && nums[i + 1] !== 0){
                let a = nums[i+1];
                nums[i+1] = nums[i];
                nums[1] = a;
            }
        }
    }
    return nums;
}

console.log(moveZeroes(nums));



function moveZeroes(nums){
    if(nums.length === 1){
        return nums;
    }
    let left = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right]!==0){
            if(left !== right){
                let num = nums[right];
                nums[right] = nums[left];
                nums[left] =  num;
            }
            left++;
        }
    }
    return nums;
}

module.exports = {moveZeroes}