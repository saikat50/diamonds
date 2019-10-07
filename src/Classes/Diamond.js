import { listPrice } from '../App'
import priceList  from '../data/prices.json';

  //DIAMOND CLASS
  export class Diamond1 {
    constructor(diamond) {
      this.id=diamond.id; 
      this.lotID = diamond.get("lotID");
      this.shape = diamond.get("shape");
      this.weight = diamond.get("weight");
      this.color = diamond.get("color");
      this.clarity = diamond.get("clarity");
      this.cut = diamond.get("cut");
      this.polish = diamond.get("polish");
      this.symmetry = diamond.get("symmetry");
      this.fluorescence = diamond.get("fluorescence");
      this.fluorescenceColor = diamond.get("fluorescenceColor");
      this.lab = diamond.get("lab");
      this.certificateNumber = diamond.get("certificateNumber");
      this.depth = diamond.get("depth");
      this.table = diamond.get("table");
      this.crownAngle = diamond.get("crownAngle");
      this.crownHeight = diamond.get("crownHeight");
      this.pavillionAngle = diamond.get("pavillionAnglecut");
      this.pavillionDepth = diamond.get("pavillionDepth");
      this.starLength = diamond.get("starLength");
      this.lowerHalf = diamond.get("lowerHalf");
      this.girdle = diamond.get("girdle");
      this.culet = diamond.get("culet");
      this.list = listPrice(this.shape,this.color,this.clarity,this.weight,priceList.response.body.price)
      this.discount = diamond.get("discount");
      this.pricePerCarat = diamond.get("pricePerCarat");
      this.links = diamond.get("links");
      this.inclusions = diamond.get("inclusions");
      this.owner = diamond.get("owner");
      this.keepDiscount = diamond.get("keepDiscount");
      this.diamMin = diamond.get("diamMin");
      this.diamMax = diamond.get("diamMax");
      this.deptAvg = diamond.get("deptAvg");
      if (this.list) {
        if (!this.keepDiscount)
          this.discount = 100 - 100 * (this.pricePerCarat / (this.list))
        else this.pricePerCarat = this.list * (100 - this.discount) / 100
      }
  
    }
    measurements() { return this.diamMin + "-" + this.diamMax + "*" + this.deptAvg }
  }