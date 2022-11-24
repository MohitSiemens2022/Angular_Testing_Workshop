export class MathOps {

    public AccessCount:number=0;

    public Add(nums:number[]){
        this.AccessCount++;
        let result = 0;
        for(let index = 0;index<nums.length;index++){
            result+=nums[index];
        }
        return result;
    }

    public Substract(nums:number[]){
        this.AccessCount++;
        let result = 0;
        result =  nums[0] - nums[1];
        return result;
    }

    public Multiply(nums:number[]){
        let result = 0;
        for(let index = 0;index<nums.length;index++){
            result*=nums[index];
        }
        return result;
    }

    public Divide(nums:number[]){
        let result = 0;
        if(nums[1]==0){
            throw new Error('Divide by Zero Error');
        }
        result =  nums[0]/nums[1];
        return result;
    }
}
