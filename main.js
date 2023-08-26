// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, DnaBases) => {
  return {
    _specimenNum: num,
    _dna: DnaBases,
    get specimenNum(){
      return this._specimenNum;
    },
    get dna(){
      return this._dna;
    },
    mutate(){
      let firstElement = this._dna[0];
      let checkDna = '';
      let notFirstElement = false;
      // do {
      //    checkDna = returnRandBase();
         
      // }
      while(!notFirstElement){
        checkDna = returnRandBase();
          if(firstElement !== checkDna){
            this._dna[0] = checkDna;
            notFirstElement = true;
          }
      }
      return this._dna;
    },
    compareDNA(pAequor){
        let countIdenticalDNA = 0;
        let indenticalDNA = [];
        //pAequor.dna.filter(s => !this._dna.includes(s)? indenticalDNA.push(s): '');
        for(let pDNA of pAequor.dna){
          if(pDNA === 'T'){
           if(this._dna.includes(pDNA)){
            if(!indenticalDNA.includes(pDNA)){
              indenticalDNA.push(pDNA);
            }
           }
          }
        }
       let percentage = Math.floor((indenticalDNA.length/4) *100);
         
       console.log('specimen ' + pAequor.specimenNum + ' and specimen ' + this._specimenNum + ' have ' + percentage + '% DNA in common.');
    },
    willLikelySurvive(){
     
    }
  }
}

const mock = mockUpStrand();
console.log(mock);

const obj = pAequorFactory(2, mock);

console.log(obj.mutate());
const mock2 = mockUpStrand();
const mock3 = mockUpStrand();
const obj2 = pAequorFactory(5, mock3);
console.log(obj.compareDNA(obj2));








