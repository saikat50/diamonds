
  //DIAMOND CLASS
  export class Diamond {
    constructor(diamond) {
      this.lotID = diamond.lotID;
      this.shape = diamond.shape;
      this.weight = diamond.weight;
      this.color = diamond.color;
      this.clarity = diamond.clarity;
      this.cut = diamond.cut;
      this.polish = diamond.polish;
      this.symmetry = diamond.symmetry;
      this.fluorescence = diamond.fluorescence;
      this.fluorescenceColor = diamond.fluorescenceColor;
      this.lab = diamond.lab;
      this.certificateNumber = diamond.certificateNumber;
      this.depth = diamond.depth;
      this.table = diamond.table;
      this.crownAngle = diamond.crownAngle;
      this.crownHeight = diamond.crownHeight;
      this.pavillionAngle = diamond.pavillionAnglecut;
      this.pavillionDepth = diamond.pavillionDepth;
      this.starLength = diamond.starLength;
      this.lowerHalf = diamond.lowerHalf;
      this.girdle = diamond.girdle;
      this.culet = diamond.culet;
      this.list = diamond.list;
      this.discount = diamond.discount;
      this.pricePerCarat = diamond.pricePerCarat;
      this.links = diamond.links;
      this.inclusions = diamond.inclusions;
      this.owner = diamond.owner;
      this.keepDiscount = diamond.keepDiscount;
      this.diamMin = diamond.diamMin;
      this.diamMax = diamond.diamMax;
      this.deptAvg = diamond.deptAvg
      if (this.list) {
        if (!this.keepDiscount)
          this.discount = 100 - 100 * (this.pricePerCarat / (this.list))
        else this.pricePerCarat = this.list * (100 - this.discount) / 100
      }
  
    }
    measurements() { return this.diamMin + "-" + this.diamMax + "*" + this.deptAvg }
  }