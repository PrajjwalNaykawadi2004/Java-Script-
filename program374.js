// Not allowed

class Demo
{
    constructor()
    {
        this.No1 = 0;
        this.No2 = 0;

        console.log("Inside default Constructor");
    }

    constructor(A,B)        // Error // Only one constructor is allowed
    {
        this.No1 = A;
        this.No2 = B;

        console.log("Inside parametrised Constructor");
    }
}

function main()
{
   let obj1 = new Demo();
   let obj2 = new Demo(10,20);

  
}

main();