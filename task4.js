// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


function longest(str)
{
    let box=str.split(" ");
    let max=0;
    let x;
    for(b of box)
    {
        if(b.length>max)
        {
            max=b.length;
            x=b;

        }
    }
    return x;
}

let sample="I am learning Programming to become a programmer";
console.log(longest(sample));