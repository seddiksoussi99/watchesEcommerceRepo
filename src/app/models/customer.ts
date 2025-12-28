export class Customer {
    id!: number;
    first_name: string;
    last_name: string;
    phone: string;
    city: string;
    address: string;

    constructor(f:string, l:string, p: string, c: string, a: string){
        this.first_name = f;
        this.last_name = l;
        this.phone = p;
        this.city = c;
        this.address = a;
    }

    isValid(){
        return (this.first_name != '' && this.last_name != '' && this.address !=''
            && this.city != '' && this.phone.length == 8
        )
    }


}
