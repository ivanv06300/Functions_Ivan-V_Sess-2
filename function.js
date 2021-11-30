function toArea(a)
{    
    Area = 3.14 * a * a;
    document.getElementById('result').innerHTML = Area;
} 



function toComp(x, y)
{
    var s = Number(x);
    var d = Number(y);
    if (s > d)
    {
    var result =" The first number is bigger"
    document.getElementById('result1').innerHTML = result;   
    }
    else if (s < d)
    {
    var d =" The second number is bigger"
    document.getElementById('result1').innerHTML = result;
    }
} 



function toOddEven(oe)
{
    if (oe % 2 == 0) {
        var e =" Number is Even: " + Number(oe);
        document.getElementById('result2').innerHTML = e;
    }

    else {
    var o =" Number is Odd: " + Number(oe);
    document.getElementById('result2').innerHTML = o;    
    }
} 

    function palindrome1(str)
     {
    console.log(str);

    var newstr = str.split("");
    console.log(newstr);

    var newreverse = newstr.reverse("");


    var final = newreverse.join("");
    console.log(final);
    

    if (final === str)
     {
        var theres =" The word is a palindrome";
        document.getElementById('result2').innerHTML = theres; 
    }

    else (final !== str) 
    {
        var othres =" The word is not a palindrome";
        document.getElementById('result2').innerHTML = othres; 
    }
}