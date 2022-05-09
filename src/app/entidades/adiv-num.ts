

export class AdivNum {
    valor:number;
    trys:number;
    min:number;
    max:number;
    inp:number;
    vicLos:boolean|undefined;

    constructor(){
        this.valor=0;
        this.trys=0;
        this.min=0;
        this.max=0;
        this.inp=0;
        this.vicLos=undefined;
    }
    val_aleatorio(){
        this.valor=Math.floor(Math.random()*(this.max-this.min)+1)+this.min;
        if(this.valor!=this.inp)
        this.trys++;
    }
    victoria_derrota(){
        if(this.inp==this.valor){
            this.vicLos=true;
            return this.vicLos;}
        else if(this.trys==3&& this.inp!=this.valor){
            this.vicLos=false;
            return this.vicLos;}
        else{this.vicLos=undefined;
        return this.vicLos;}
    }

}
