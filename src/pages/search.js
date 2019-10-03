
export default class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        diamondArr: [],
        prices: [],
        isLoading: true,
        filter: {
          shape: [],
          colorMin: "",
          colorMax: "",
          clarityMin: "",
          clarityMax: "",
          weightMin: 0,
          weightMax: 0
  
        },
        edit: -1
      }
    }
    componentWillMount() {
      let newState = {
        diamondArr: []
      }
      axios.get("diamonds-list.json").then(p => {
        let diamondData = p.data;
        p.data.forEach((diam) => {
          this.state.diamondArr.push(new Diamond(diam))
        })
        axios.get("prices.json").then(res => {
          let pricesList = res.data.response.body.price;
          pricesList.forEach(list => {
            this.state.prices.push(list)
          })
          this.state.isLoading = false;
          this.setState(this.state)
  
        })
      })
  
    }
    saveDiamond = (diamond, edit) => {
      if (arguments.length === 1) {
        this.state.diamondArr.push(new Diamond(diamond))
      }
      else {
        this.state.diamondArr.splice(edit, 1, new Diamond(diamond));
      }
      this.state.edit = -1;
      this.setState(this.state);
    }
    deleteDiamond = (index) => {
      var newArr = this.state.diamondArr.splice(index, 1);
      this.setState(newArr);
    }
    editDiamond = (index) => {
      let newState = {
        edit: index
  
      }
      this.setState(newState)
    }
    cancelEdit = () => {
      let newState = {
        edit: -1
      }
      this.setState(newState)
    }
    render() {
      if (this.state.isLoading) return false;
      console.log(this.state.diamondArr.length);
      return (
  
  
        <div className="container" >
  
          <Navbar />
          <AddDiamond saveDiamond={this.saveDiamond} cancelEdit={this.cancelEdit} addEdit={this.addEdit} prices={this.state.prices} edit={this.state.edit} filter={this.state.filter} diamonds={this.state.diamondArr} />
          <Modal />
          <DiamondList deleteDiamond={this.deleteDiamond} editDiamond={this.editDiamond} list={this.state.diamondArr} />
        </div>
      );
    }
  }
  