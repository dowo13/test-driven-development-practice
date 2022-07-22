
function analyzeArray(arr){
    return {
        average: (function (){
            return arr.reduce((a,b) => {
                return a+b/6;
            },0)
        })(),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    }
}
const object = analyzeArray([1,8,3,4,2,6]);

export default analyzeArray;