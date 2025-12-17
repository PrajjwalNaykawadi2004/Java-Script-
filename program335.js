function Display(no)
{

    console.log("Jay Ganesh..."+no);
    return ++no;
}

function main()
{
    let iRet = 0;

    Display(11);

    console.log("Return value is :" + iRet);
}

main();