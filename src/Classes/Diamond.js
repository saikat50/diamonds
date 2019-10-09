import { listPrice } from '../App'
import priceList from '../data/prices.json';

//DIAMOND CLASS
export class Diamond1 {
  constructor(diamond) {
    this.id = diamond.id;
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
    this.list = listPrice(this.shape, this.color, this.clarity, this.weight, priceList.response.body.price)
    this.discount = diamond.get("discount");
    this.pricePerCarat = diamond.get("pricePerCarat");
    this.links = diamond.get("links");
    this.inclusions = diamond.get("inclusions");
    this.owner = diamond.get("owner");
    this.keepDiscount = diamond.get("keepDiscount");
    this.diamMin = diamond.get("diamMin");
    this.diamMax = diamond.get("diamMax");
    this.deptAvg = diamond.get("deptAvg");
    let pic1 = diamond.get("pic1");
    if (pic1) { this.pic1 = { name: pic1["_name"], url: pic1["_url"] } } else this.pic1 = {};
    // if (!this.pic1) {this.pic1={}};

    let pic2 = diamond.get("pic2");
    if (!pic2) { this.pic2 = {} } else { this.pic2 = { name: pic2["_name"], url: pic2["_url"] } }
    console.log("constructor");
    console.log(this.pic1 + " " + this.pic2);
    // if (!this.pic2) {this.pic2={}};
    if (this.list) {
      if (!this.keepDiscount)
        this.discount = 100 - 100 * (this.pricePerCarat / (this.list))
      else this.pricePerCarat = this.list * (100 - this.discount) / 100
    }

  }
  measurements() { return this.diamMin + "-" + this.diamMax + "*" + this.deptAvg }
  inFilter(filter) {

    // filter: {
    //   shape: ["BR"],
    //   colorMin: "D",
    //   colorMax: "E",
    //   clarityMin: "FL",
    //   clarityMax: "VVS1",
    //   weightMin: 1.02,
    //   weightMax: 1.3
    if ((filter.shape.includes(this.shape)|| !filter.shape.length)
      && this.color >= filter.colorMin
      && this.color <= filter.colorMax
      && clarityValue(this.clarity) >= clarityValue(filter.clarityMin)
      && clarityValue(this.clarity) <= clarityValue(filter.clarityMax)
      && this.weight >= filter.weightMin
      && this.weight <= filter.weightMax) return true;

    return false;
  }
}

function clarityValue(clarity) {
  switch (clarity) {
    case "FL":
      return 1
      break;
    case "IF":
      return 2
      break;
    case "VVS1":
      return 3
      break;
    case "VVS2":
      return 4
      break;
    case "VS1":
      return 5
      break;
    case "VS2":
      return 6
      break;
    case "SI1":
      return 7
      break;
    case "SI2":
      return 8
      break;
    case "SI3":
      return 9
      break;
    case "I1":
      return 10
      break;
    case "I2":
      return 11
      break;
    case "I3":
      return 12
      break;
    default:
      return false;
  }
}