import { Watch } from '../models/watch';

export class WatchesList {
    public watches : Watch[];
    public count : number;
    public currentPageNb : number;
    public next? : string;
    public previous? : string;
    public numberOfPages : number;

    constructor(watches : Watch[], count : number, currentPageNb : number, numberOfPages : number){
        this.watches = watches;
        this.count = count;
        this.currentPageNb = currentPageNb;
        this.numberOfPages = numberOfPages;
    }

}
