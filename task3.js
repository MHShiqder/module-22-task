// Write a function to count the number of vowels in a string.

function count_vowel(str)
{
    let cnt=0;
    let vowel=['a','e','i','o','u'];
    str=str.toLowerCase();
    for(let i=0;i<str.length;i++)
    {
        if(vowel.includes(str[i]))
            cnt++;
    }
    return cnt;
}

let str="Hasibul";
let result=count_vowel(str);
console.log(result);

