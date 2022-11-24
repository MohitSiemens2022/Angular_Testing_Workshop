import { MathOps } from './math-ops';


describe('Test Positive Cases for Calculator', () => {
  it('should add n numbers', () => {
    //Arrange
    let input1 = [-1,-2,-3,4,5];
    let input2 = [1,2,3,4,5];
    let input3 = [10,20];
    let input4 = [0,5];
    let input5 = [2.4];

    let expected1 = 3;
    let expected2 = 15;
    let expected3 = 30;
    let expected4 = 5;
    let expected5 = 2.4;

    var objMathOps = new MathOps();

    //Act & Assert
    expect(objMathOps.Add(input1)).toBe(expected1);
    expect(objMathOps.Add(input2)).toBe(expected2);
    expect(objMathOps.Add(input3)).toBe(expected3);
    expect(objMathOps.Add(input4)).toBe(expected4);
    expect(objMathOps.Add(input5)).toBe(expected5);
  });
});


describe('Test Positive Cases for Calculator', () => {
  it('should substarct 2 numbers', () => {
    //Arrange
    let input1 = [2,-3];
    let input2 = [10,2];

    let expected1 = 5;
    let expected2 = 8;

    var objMathOps = new MathOps();

    //Act & Assert
    expect(objMathOps.Substract(input1)).toBe(expected1);
    expect(objMathOps.Substract(input2)).toBe(expected2);
    
  });
});

  describe('Divide test for Calculator',()=>{
    it('should divide 2 numbers', () => {
    let input1 = 5;
    let input2 = 0;
    let inputArr = [input1,input2]; 
    let objMathOps = new MathOps();

    expect(()=>objMathOps.Divide(inputArr)).toThrowError('Divide by Zero Error');
  });
});

describe('Testing Hooks',()=>{
  var objMathOps:any;
  beforeAll(()=>{
    objMathOps = new MathOps();
  })

  beforeEach(()=>{
    objMathOps.AccessCount =0;
  })
   it('should change increment value of Access count',()=>{
      objMathOps.Add([1,2]);
      expect(objMathOps.AccessCount).toBe(1);

      objMathOps.Add([1,2,3]);
      expect(objMathOps.AccessCount).toBe(2);
   });

   it('should take Access count as input and verify is it zero',()=>{
    expect(objMathOps.AccessCount).toEqual(0);  
  });

  afterEach(()=>{
    objMathOps.AccessCount =1;
  })
  afterAll(()=>{
    objMathOps = null;
  })

});





