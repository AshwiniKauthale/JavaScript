function CheckEvenOdd(no)
{
    if((no % 2) == 0)
    {
        console.groupCollapsed("It is even number");
    }
    else
    {
        console.groupCollapsed("It is odd number");
    }
}

function main()
{
    let iValue = 10;
    CheckEvenOdd(iValue);
}

main();