export class Commande {

    customerId: number;
    commandeDetails: any[];

    constructor(id: number, cmdDetails: any[]){
        this.customerId = id;
        this.commandeDetails = cmdDetails;
    }

}
