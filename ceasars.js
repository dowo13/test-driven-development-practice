function ceasarsCipher(word, shift){
    // capital A-Z is range 65 to 90. lowercase a-z is 97-122 ascii
    let codepointArr = []

    for(let i=0; i<word.length; i++){
        codepointArr.push(word.codePointAt(i))
        if(codepointArr[i] < 65){
            codepointArr[i] = codepointArr[i]
        }else if(codepointArr[i] > 64 && codepointArr[i] < 91){
            codepointArr[i] = codepointArr[i] + shift;
            if(codepointArr[i] > 90){
                codepointArr[i] = codepointArr[i] - 26
            }
        }else if(codepointArr[i] > 90 && codepointArr[i] < 97){
            codepointArr[i] = codepointArr[i]
        }else if(codepointArr[i] > 96 && codepointArr[i] < 123){
            codepointArr[i] = codepointArr[i] + shift
            if(codepointArr[i] > 122){
                codepointArr[i] = codepointArr[i] - 26
            }
        }
    }
    
    return ceasarsFuncFinished(codepointArr)
    
}

function ceasarsFuncFinished(arr){
    let res = []
  
    for(let i=0; i< arr.length; i++){
        res.push(String.fromCodePoint(arr[i]))
    }
    return res.join('');
}
export default ceasarsCipher;