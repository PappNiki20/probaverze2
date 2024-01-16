import { szenvedoMondatok } from "./angol";
export default class MondatokModel {
    #mondatoklista = [];
    #cim = ""
    #aktObj = {};
    #aktElem = 2;
    #sugoSzoveg = "";
    #hossz = 0
    constructor() {
        this.#mondatoklista = szenvedoMondatok;
        this.#cim = this.#mondatoklista[0];
        this.#hossz = this.#mondatoklista.length;
        this.aktMondatOsszeallit(this.#aktElem)
       
    }
    get cim() {
        return this.#mondatoklista[0]
    }
    get sugoSzoveg() {
        return this.#mondatoklista[1]
    }
    get hossz() {
        return this.#mondatoklista.length - 2;
    }
    kovElem(index){
        this.#aktElem = this.#aktElem + 1;
  if (this.#aktElem >= this.#hossz) {
    this.#aktElem = 2;
  }
  return this.#aktElem;
    }
    aktMondatOsszeallit(index) {
        let obj = this.#mondatoklista[index];
        let egeszMondat = obj.mondat.replace("_", obj.valasztas[0])
        let egeszM = egeszMondat.split(" ")
        console.log(obj)
        this.#aktObj = {
            index: this.#aktElem,
            mondat: obj.mondat,
            alap: obj.alap,
            helyes: obj.valasztas[0],
        }
        
        console.log(this.#aktObj);
        return this.#aktObj;
    }

    
}