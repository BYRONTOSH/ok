class Avenger 
{


    constructor(public n:string, private e:number)
    {
    
    }

    protected datos()
    {
        console.log(this.n+this.e);
    }

 

}


class Xmen extends Avenger
{

    constructor(n:string, e:number,public poder:boolean)
    {
        super(n,e);
    }

    public datos ()
    {
        super.datos();
    }
}



let av:Xmen = new Xmen("TOSH",56,true);

console.log(av);

av.datos();