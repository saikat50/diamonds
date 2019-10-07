import React from 'react'
import { Button, Modal, InputGroup, Image, Form, Row, Col, FormControl } from 'react-bootstrap'
import { listPrice } from '../App'
import { Diamond1} from '../Classes/Diamond'
import diamondsShape from '../data/Shapes.png'
import ListOfLinks from './ListOfLinks'


export default class AddDiamond extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.edit === -1 && this.props.activeUser) {
            this.state = {
                linktoAdd: "",
                modal: false,
                disableSave: true,
                page: 0,
                diamond: {
                    id:"",
                    lotID: "fdgdsf",
                    shape: "BR",
                    weight: "1",
                    color: "D",
                    clarity: "IF",
                    cut: "EX",
                    polish: "VG",
                    symmetry: "G",
                    fluorescence: "None",
                    fluorescenceColor: "Yellow",
                    lab: "GIA",
                    certificateNumber: "523453245",
                    depth: "60.2",
                    table: "58",
                    crownAngle: "56",
                    crownHeight: "35",
                    pavillionAngle: "32",
                    pavillionDepth: "50",
                    starLength: "15",
                    lowerHalf: "15",
                    girdle: "MED-STK",
                    culet: "None",
                    list: listPrice("BR", "D", "IF", "1", this.props.prices) ,
                    discount: "40",
                    pricePerCarat: "5000",
                    links: [],
                    inclusions: "",
                    keepDiscount: true,
                    diamMin: "3.58",
                    diamMax: "3.65",
                    deptAvg: "2.58",
                    owner: this.props.activeUser.id

                }
            }
        }
        else if (this.props.activeUser) {
            this.state = {
                modal: true,
                page: 0,
                disableSave: true,
                diamond: {
                    id:this.props.diamonds[this.props.edit].id,
                    lotID: this.props.diamonds[this.props.edit].lotID,
                    shape: this.props.diamonds[this.props.edit].shape,
                    weight: this.props.diamonds[this.props.edit].weight,
                    color: this.props.diamonds[this.props.edit].color,
                    clarity: this.props.diamonds[this.props.edit].clarity,
                    cut: this.props.diamonds[this.props.edit].cut,
                    polish: this.props.diamonds[this.props.edit].polish,
                    symmetry: this.props.diamonds[this.props.edit].symmetry,
                    fluorescence: this.props.diamonds[this.props.edit].fluorescence,
                    fluorescenceColor: this.props.diamonds[this.props.edit].fluorescenceColor,
                    lab: this.props.diamonds[this.props.edit].lab,
                    certificateNumber: this.props.diamonds[this.props.edit].certificateNumber,
                    depth: this.props.diamonds[this.props.edit].depth,
                    table: this.props.diamonds[this.props.edit].table,
                    crownAngle: this.props.diamonds[this.props.edit].crownAngle,
                    crownHeight: this.props.diamonds[this.props.edit].crownHeight,
                    pavillionAngle: this.props.diamonds[this.props.edit].pavillionAngle,
                    pavillionDepth: this.props.diamonds[this.props.edit].pavillionDepth,
                    starLength: this.props.diamonds[this.props.edit].starLength,
                    lowerHalf: this.props.diamonds[this.props.edit].lowerHalf,
                    girdle: this.props.diamonds[this.props.edit].girdle,
                    culet: this.props.diamonds[this.props.edit].culet,
                    list: this.props.diamonds[this.props.edit].list,
                    discount: this.props.diamonds[this.props.edit].discount,
                    pricePerCarat: this.props.diamonds[this.props.edit].pricePerCarat,
                    links: this.props.diamonds[this.props.edit].links,
                    inclusions: this.props.diamonds[this.props.edit].inclusions,
                    keepDiscount: this.props.diamonds[this.props.edit].keepDiscount,
                    diamMin: this.props.diamonds[this.props.edit].diamMin,
                    diamMax: this.props.diamonds[this.props.edit].diamMax,
                    deptAvg: this.props.diamonds[this.props.edit].deptAvg,
                    owner: this.props.diamonds[this.props.edit].owner,

                }
            }
        }
        else {
            this.state = {
                modal: true,
                page: 0,
                disableSave: true,
                diamond: null
            }

        }
    }

    componentWillReceiveProps(nextProps) {
        let newState;
        if (nextProps.edit === -1 && nextProps.activeUser) {
            newState = {
                modal: false,
                disableSave: true,
                page: 0,
                diamond: {
                    id:"",
                    lotID: "fdgdsf",
                    shape: "BR",
                    weight: "1",
                    color: "D",
                    clarity: "IF",
                    cut: "EX",
                    polish: "VG",
                    symmetry: "G",
                    fluorescence: "None",
                    fluorescenceColor: "Yellow",
                    lab: "GIA",
                    certificateNumber: "523453245",
                    depth: "60.2",
                    table: "58",
                    crownAngle: "56",
                    crownHeight: "35",
                    pavillionAngle: "32",
                    pavillionDepth: "50",
                    starLength: "15",
                    lowerHalf: "15",
                    girdle: "MED-STK",
                    culet: "None",
                    list: listPrice("BR", "D", "IF", "1", this.props.prices) ,
                    discount: "40",
                    pricePerCarat: "5000",
                    links: [],
                    inclusions: "",
                    keepDiscount: true,
                    diamMin: "3.58",
                    diamMax: "3.65",
                    deptAvg: "2.58",
                    owner: nextProps.activeUser.id

                }
            }
        }
        else if (nextProps.activeUser) {
            newState = {
                modal: true,
                page: 0,
                disableSave: true,
                diamond: {
                    id:nextProps.props.diamonds[nextProps.props.edit].id,
                    lotID: nextProps.diamonds[nextProps.edit].lotID,
                    shape: nextProps.diamonds[nextProps.edit].shape,
                    weight: nextProps.diamonds[nextProps.edit].weight,
                    color: nextProps.diamonds[nextProps.edit].color,
                    clarity: nextProps.diamonds[nextProps.edit].clarity,
                    cut: nextProps.diamonds[nextProps.edit].cut,
                    polish: nextProps.diamonds[nextProps.edit].polish,
                    symmetry: nextProps.diamonds[nextProps.edit].symmetry,
                    fluorescence: nextProps.diamonds[nextProps.edit].fluorescence,
                    fluorescenceColor: nextProps.diamonds[nextProps.edit].fluorescenceColor,
                    lab: nextProps.diamonds[nextProps.edit].lab,
                    certificateNumber: nextProps.diamonds[nextProps.edit].certificateNumber,
                    depth: nextProps.diamonds[nextProps.edit].depth,
                    table: nextProps.diamonds[nextProps.edit].table,
                    crownAngle: nextProps.diamonds[nextProps.edit].crownAngle,
                    crownHeight: nextProps.diamonds[nextProps.edit].crownHeight,
                    pavillionAngle: nextProps.diamonds[nextProps.edit].pavillionAngle,
                    pavillionDepth: nextProps.diamonds[nextProps.edit].pavillionDepth,
                    starLength: nextProps.diamonds[nextProps.edit].starLength,
                    lowerHalf: nextProps.diamonds[nextProps.edit].lowerHalf,
                    girdle: nextProps.diamonds[nextProps.edit].girdle,
                    culet: nextProps.diamonds[nextProps.edit].culet,
                    list: nextProps.diamonds[nextProps.edit].list,
                    discount: nextProps.diamonds[nextProps.edit].discount,
                    pricePerCarat: nextProps.diamonds[nextProps.edit].pricePerCarat,
                    links: nextProps.diamonds[nextProps.edit].links,
                    inclusions: nextProps.diamonds[nextProps.edit].inclusions,
                    keepDiscount: nextProps.diamonds[nextProps.edit].keepDiscount,
                    diamMin: nextProps.diamonds[nextProps.edit].diamMin,
                    diamMax: nextProps.diamonds[nextProps.edit].diamMax,
                    deptAvg: nextProps.diamonds[nextProps.edit].deptAvg,
                    owner: nextProps.diamonds[nextProps.edit].owner,

                }
            }

        }
        else {
            this.state = {
                modal: true,
                page: 0,
                disableSave: true,
                diamond: null
            }


        }
        this.setState(newState)
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleClose = () => {
        this.setState({
            modal: false
        });

    }
    detectMouse = (event) => {
        let { diamond } = this.state;
        var cx = event.clientX;
        var width = document.body.clientWidth;
        // var modalWidth = $("#modalAdd").width();
        var modalWidth = document.getElementById("modalAdd").offsetWidth;
        var ratio = (cx - (width - modalWidth) / 2) / modalWidth;

        if (ratio <= 0.085 && ratio >= 0.037) {
            diamond.shape = "BR"
        }
        else if (ratio <= 0.154 && ratio >= 0.1) {
            diamond.shape = "PR"
        }
        else if (ratio <= 0.24 && ratio >= 0.175) {
            diamond.shape = "OV"
        }
        else if (ratio <= 0.34 && ratio >= 0.26) {
            diamond.shape = "MQ"
        }
        else if (ratio <= 0.41 && ratio >= 0.357) {
            diamond.shape = "HS"
        }
        else if (ratio <= 0.492 && ratio >= 0.43) {
            diamond.shape = "EM"
        }
        else if (ratio <= 0.58 && ratio >= 0.51) {
            diamond.shape = "PS"
        }
        else if (ratio <= 0.664 && ratio >= 0.61) {
            diamond.shape = "AS"
        }
        else if (ratio <= 0.75 && ratio >= 0.69) {
            diamond.shape = "CU"
        }
        else if (ratio <= 0.824 && ratio >= 0.77) {
            diamond.shape = "TR"
        }
        else if (ratio <= 0.89 && ratio >= 0.85) {
            diamond.shape = "BG"
        }
        else if (ratio <= 0.97 && ratio >= 0.91) {
            diamond.shape = "RAD"
        }
        //    let page=2;
        let disableSave = false;

        this.setState({
            // page,
            disableSave,
            diamond
        })
    }

    getCertNum = () => {
        let disableSave = false;
        let { diamond } = this.state;
        diamond.certificateNumber = this.certNumInput.value;
        this.setState({ disableSave, diamond })
    }
    getLotId = () => {
        let disableSave = false;
        let { diamond } = this.state;
        diamond.lotID = this.textInput.value

        this.setState({

            disableSave,
            diamond
        })
    }
    getLab = (element) => {
        let disableSave = false;
        let { diamond } = this.state;
        let page;
        diamond.lab = element.target.id;
        if (element.target.id === "None") {
            // page = 5;
            diamond.certificateNumber = ""
        }
        // else {
        //     page = 4
        // };
        this.setState({
            // page,
            disableSave,
            diamond
        })
    }
    getWCC = () => {
        let disableSave = false;
        let { diamond } = this.state;

        if (Number(this.weightInput.value) > 0) {
            this.state.diamond.weight = Number(this.weightInput.value)
        }
        diamond.color = this.colorInput.value
        diamond.clarity = this.clarityInput.value


        if (this.state.diamond.shape && this.state.diamond.color && this.state.diamond.clarity && this.state.diamond.weight) {
            diamond.list = listPrice(this.state.diamond.shape, this.state.diamond.color, this.state.diamond.clarity, this.state.diamond.weight, this.props.prices)
        }
        else diamond.list = 0;

        this.setState({ disableSave, diamond })
    }
    getOther = () => {
        let disableSave = false;
        let { diamond } = this.state;
        diamond.cut = this.cutInput.value;
        diamond.polish = this.polishInput.value;
        diamond.symmetry = this.symmetryInput.value;
        diamond.fluorescence = this.fluorescenceInput.value;
        diamond.fluorescenceColor = this.fluorescenceColorInput.value;
        diamond.depth = this.depthInput.value;
        diamond.table = this.tableInput.value;
        diamond.girdle = this.girdleInput.value;
        diamond.culet = this.culetInput.value;
        diamond.crownAngle = this.crownAngleInput.value;
        diamond.crownHeight = this.crownHeightInput.value;
        diamond.pavillionAngle = this.pavillionAngleInput.value;
        diamond.pavillionDepth = this.pavillionDepthInput.value;
        diamond.lowerHalf = this.lowerHalfInput.value;

        this.setState({ disableSave, diamond })
    }
    getPrices = () => {
        let disableSave = false;
        let { diamond } = this.state;

        if (diamond.list) {
            if (this.checkInput.value == "on") {
                diamond.pricePerCarat = Math.round(diamond.list * (100 - Number(this.discountInput.value)) / 100);
                diamond.discount = Number(this.discountInput.value);
                diamond.keepDiscount = true;
            }
            else {
                diamond.pricePerCarat = Number(this.priceInput.value);
                diamond.discount = 100 - Math.round(Number(this.priceInput.value) / diamond.list * 10000) / 100;
                diamond.keepDiscount = false;
            }
        } else {
            diamond.pricePerCarat = Number(this.priceInput.value);
            diamond.keepDiscount = false;
        }


        this.setState({ disableSave, diamond })
    }
    saveDiamond = () => {
        const { diamond, edit } = this.state;
        this.props.saveDiamond(diamond, edit)

    }
    nextPage = () => {
        let { page } = this.state;
        page++;

        this.setState({ page })
    }
    previousPage = () => {
        let { page } = this.state;
        page--;

        this.setState({ page })
    }
    prepareLink = () => {
        let linktoAdd = this.linkToAddInput.value;
        this.setState({ linktoAdd })
    }
    addLink = () => {     
        let {linktoAdd,diamond} = this.state;
        diamond.links.push(linktoAdd);
        let newState = {
            linktoAdd:"",
            disableSave: false,
            diamond:diamond
        }

        this.setState(newState)

    }
    deleteLink = (index) => {
 
        let { diamond } = this.state;
        var newArr = diamond.links.splice(index, 1);
        diamond.links=newArr
        this.setState({
            disableSave: false,
            diamond:diamond
        });
    }
    render() {

        if (!this.props.activeUser) return false;
        let parse = [];
        //if modal is closed and we are still in edit mode, cancel edit mode
        if (!this.state.modal && this.props.edit !== -1) this.props.cancelEdit();

        if (this.state.diamond.lotID === "" || this.state.diamond.shape === "" || this.state.diamond.weight === "" || this.state.diamond.color === "" || this.state.diamond.clarity === "" || this.state.page === 0) {
            parse.push(

                <Modal.Body>Lot ID
                                <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl onChange={this.getLotId} defaultValue={this.state.diamond.lotID} ref={(element) => { this.textInput = element }}
                            placeholder="Enter Lot ID"
                        />
                    </InputGroup>Choose shape
                <Image onClick={this.detectMouse} style={{ width: "100%" }} src={diamondsShape} rounded />
                    <h3>Shape selected: {this.state.diamond.shape}</h3>
                    Weight
                                 <InputGroup className="mb-3">

                        <FormControl onChange={this.getWCC} defaultValue={this.state.diamond.weight} ref={(element) => { this.weightInput = element }}
                            placeholder="Carat Weight"
                        />
                    </InputGroup>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Color</Form.Label>
                        <Form.Control onChange={this.getWCC} defaultValue={this.state.diamond.color} ref={(element) => { this.colorInput = element }} as="select" >
                            <option value=""></option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="H">H</option>
                            <option value="I">I</option>
                            <option value="J">J</option>
                            <option value="K">K</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="N">N</option>
                            <option value="OP">OP</option>
                            <option value="QR">QR</option>
                            <option value="ST">ST</option>
                            <option value="UV">UV</option>
                            <option value="WX">WX</option>
                            <option value="YZ">YZ</option>
                            <option value="LIGHT FANCY">F0-LIGHT FANCY</option>
                            <option value="FANCY">F1-FANCY</option>
                            <option value="FANCY VIVID">F2-FANCY VIVID</option>
                            <option value="FANCY INTENCE">F3-FANCY INTENCE</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Clarity</Form.Label>
                        <Form.Control onChange={this.getWCC} defaultValue={this.state.diamond.clarity} ref={(element) => { this.clarityInput = element }} as="select" >
                            <option value=""></option>
                            <option value="FL">FL</option>
                            <option value="IF">IF</option>
                            <option value="VVS1">VVS1</option>
                            <option value="VVS2">VVS2</option>
                            <option value="VS1">VS1</option>
                            <option value="VS2">VS2</option>
                            <option value="SI1">SI1</option>
                            <option value="SI2">SI2</option>
                            <option value="SI3">SI3</option>
                            <option value="I1">I1</option>
                            <option value="I2">I2</option>
                            <option value="I3">I3</option>

                        </Form.Control>
                    </Form.Group>

                </Modal.Body>

            )
        }

        else
            if (this.state.diamond.lab === "" || this.state.page === 1) {
                parse.push(

                    <Modal.Body><h2>Lab</h2>
                        <Row>
                            <a href="javascript:;">
                                <Col className="certChoose" lg="3" md="4" sm="6">
                                    <h5 className="h5Cert">GIA</h5>
                                    <Image id="GIA" onClick={this.getLab} style={{ width: "100px", border: "1px solid blue" }} src="https://miro.medium.com/max/1552/1*QAU1nlE_xhhKtZqxk13qkg.png" rounded />
                                </Col>
                            </a >
                            <a href="javascript:;" >
                                <Col className="certChoose" lg="3" md="4" sm="6">
                                    <h5 className="h5Cert">EGL USA</h5>
                                    <Image id="EGL USA" onClick={this.getLab} style={{ width: "100px", border: "1px solid blue" }} src="https://pbs.twimg.com/profile_images/2642768167/40f68a476a1518fc8069369fa65772c5_400x400.png" rounded />
                                </Col>
                            </a>
                            <a href="javascript:;" >
                                <Col className="certChoose" lg="3" md="4" sm="6">
                                    <h5 className="h5Cert">EGL Europe</h5>
                                    <Image id="EGL EUROPE" onClick={this.getLab} style={{ width: "100px", border: "1px solid blue" }} src=" https://blog.brilliance.com/wp-content/uploads/2009/11/EGL.jpg" rounded />
                                </Col>
                            </a>
                            <a href="javascript:;" >
                                <Col className="certChoose" lg="3" md="4" sm="6">
                                    <h5 className="h5Cert">HRD</h5>
                                    <Image id="HRD" onClick={this.getLab} style={{ width: "100px", border: "1px solid blue" }} src="https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/3b/79/e0/3b79e06e-78b0-2e30-61eb-41b074cb9744/source/512x512bb.jpg" rounded />
                                </Col>
                            </a>
                            <a href="javascript:;">
                                <Col className="certChoose" lg="3" md="4" sm="6">
                                    <h5 className="h5Cert">IGI</h5>
                                    <Image id="IGI" onClick={this.getLab} style={{ width: "100px", border: "1px solid blue" }} src="  https://qph.fs.quoracdn.net/main-qimg-54bbfbbb192682043358f75f481f63b5" rounded />
                                </Col>
                            </a>
                            <a href="javascript:;">
                                <Col className="certChoose" lg="3" md="4" sm="6">
                                    <h5 className="h5Cert">AGS</h5>
                                    <Image id="AGS" onClick={this.getLab} style={{ width: "100px", border: "1px solid blue" }} src="https://www.vividventure.com/upload/544.jpg" rounded />
                                </Col>
                            </a>
                            <a href="javascript:;">
                                <Col className="certChoose" lg="3" md="4" sm="6">
                                    <h5 className="h5Cert">NO CERT</h5>
                                    <Image id="None" onClick={this.getLab} style={{ width: "100px", border: "1px solid blue" }} src="https://www.clipart1001.com/wp-content/uploads/2018/12/Roblox-Clipart-Black-And-Outline.jpg" rounded />
                                </Col>
                            </a>
                        </Row>
                        <h3>Certificate Lab selected: {this.state.diamond.lab}</h3>
                        <h2>Certificate Number</h2>
                        <InputGroup className="mb-3">

                            <FormControl onChange={this.getCertNum} defaultValue={this.state.diamond.certificateNumber} ref={(element) => { this.certNumInput = element }}
                                placeholder="Certificate number"
                            />
                        </InputGroup>

                    </Modal.Body>

                )
            }
            else
                if (this.state.diamond.pricePerCarat === "" || this.state.page === 2) {

                    parse.push(
                        <Modal.Body>
                            <h3>price list for {this.state.diamond.shape} {this.state.diamond.weight} {this.state.diamond.color}  {this.state.diamond.clarity} : {this.state.diamond.list}</h3>
                            <p> In case of priceChange, calculate prices and discounts by:</p>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check onChange={this.getPrices} ref={(element) => { this.checkInput = element }}
                                        type="radio"
                                        label="keeping Discount unchanged"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        checked
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="keeping price per carat unchanged"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                </Col>
                            </Form.Group>
                            <h2>Price Per Carat</h2>
                            <InputGroup className="mb-3">
                                <span> <FormControl
                                    defaultValue={this.state.diamond.pricePerCarat}
                                    ref={(element) => { this.priceInput = element }}
                                    onChange={() => {
                                        if (this.state.diamond.list) { this.discountInput.value = 100 - (Math.round(((Number(this.priceInput.value)) / this.state.diamond.list) * 10000)) / 100 };
                                        this.getPrices();
                                    }

                                    }

                                    placeholder="price per carat"
                                />$</span>
                            </InputGroup>
                            <h2>Discount</h2>
                            <InputGroup className="mb-3">
                                <span><FormControl
                                    defaultValue={this.state.diamond.discount}
                                    ref={(element) => { this.discountInput = element }}
                                    onChange={() => {
                                        if (this.state.diamond.list) { this.priceInput.value = Math.round(this.state.diamond.list * (100 - (Number(this.discountInput.value))) / 100) };
                                        this.getPrices();
                                    }
                                    }

                                    placeholder="Discount %"
                                />%</span>
                            </InputGroup>
                        </Modal.Body>

                    )
                }
                else
                    if (this.state.page === 3) {
                        parse.push(
                            <Modal.Body className="modalAddBody">
                                <Row>
                                    <Col lg="2" md="3" sm="4" xs="6">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Cut</Form.Label>
                                            <Form.Control onChange={this.getOther} defaultValue={this.state.diamond.cut} ref={(element) => { this.cutInput = element }} as="select" >
                                                <option value=""></option>
                                                <option value="EX">Excellent</option>
                                                <option value="VG">Very good</option>
                                                <option value="G">Good</option>
                                                <option value="F">Fair</option>
                                                <option value="P">Poor</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg="2" md="3" sm="4" xs="6">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Polish</Form.Label>
                                            <Form.Control onChange={this.getOther} defaultValue={this.state.diamond.polish} ref={(element) => { this.polishInput = element }} as="select" >
                                                <option value=""></option>
                                                <option value="EX">Excellent</option>
                                                <option value="VG">Very good</option>
                                                <option value="G">Good</option>
                                                <option value="F">Fair</option>
                                                <option value="P">Poor</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg="2" md="3" sm="4" xs="6">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Symmetry</Form.Label>
                                            <Form.Control onChange={this.getOther} defaultValue={this.state.diamond.symmetry} ref={(element) => { this.symmetryInput = element }} as="select" >
                                                <option value=""></option>
                                                <option value="EX">Excellent</option>
                                                <option value="VG">Very good</option>
                                                <option value="G">Good</option>
                                                <option value="F">Fair</option>
                                                <option value="P">Poor</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg="2" md="3" sm="4" xs="6">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>fluorescence</Form.Label>
                                            <Form.Control onChange={this.getOther} defaultValue={this.state.diamond.fluorescence} ref={(element) => { this.fluorescenceInput = element }} as="select" >
                                                <option value=""></option>
                                                <option value="None">NONE</option>
                                                <option value="Faint">FAINT</option>
                                                <option value="Medium">MEDIUM</option>
                                                <option value="Strong">STRONG</option>
                                                <option value="Very strong">VERY STRONG</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg="2" md="3" sm="4" xs="6">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Fl Color</Form.Label>
                                            <Form.Control onChange={this.getOther} defaultValue={this.state.diamond.fluorescenceColor} ref={(element) => { this.fluorescenceColorInput = element }} as="select" >
                                                <option value=""></option>
                                                <option value="Yellow">YELLOW</option>
                                                <option value="White">WHITE</option>
                                                <option value="Green">GREEN</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="2" md="3" sm="4" xs="6">
                                        <Form.Label>Depth</Form.Label>
                                        <InputGroup className="mb-3">
                                            <FormControl onChange={this.getOther} defaultValue={this.state.diamond.depth} ref={(element) => { this.depthInput = element }}
                                                placeholder="Depth"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col lg="2" md="3" sm="4" xs="6">
                                        <Form.Label>Table</Form.Label>
                                        <InputGroup className="mb-3">

                                            <FormControl onChange={this.getOther} defaultValue={this.state.diamond.table} ref={(element) => { this.tableInput = element }}
                                                placeholder="Table"
                                            />
                                        </InputGroup>
                                    </Col>

                                    <Col lg="2" md="3" sm="4" xs="6">
                                        <Form.Label>Girdle</Form.Label>
                                        <InputGroup className="mb-3">

                                            <FormControl onChange={this.getOther} defaultValue={this.state.diamond.girdle} ref={(element) => { this.girdleInput = element }}
                                                placeholder="Girdle"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col lg="2" md="3" sm="4" xs="6">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Culet</Form.Label>
                                            <Form.Control onChange={this.getOther} defaultValue={this.state.diamond.culet} ref={(element) => { this.culetInput = element }} as="select" >
                                                <option value=""></option>
                                                <option value="None">None</option>
                                                <option value="VS">VERY SMALL</option>
                                                <option value="S">SMALL</option>
                                                <option value="M">MEDIUM</option>
                                                <option value="L">LARGE</option>
                                                <option value="VL">VERY LARGE</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="2" md="2" sm="2" xs="2">
                                        <Form.Label>CA</Form.Label>
                                        <InputGroup className="mb-3">

                                            <FormControl onChange={this.getOther} defaultValue={this.state.diamond.crownAngle} ref={(element) => { this.crownAngleInput = element }}
                                                placeholder="CA"
                                            />
                                        </InputGroup>
                                    </Col>

                                    <Col lg="2" md="2" sm="2" xs="2">
                                        <Form.Label>CH</Form.Label>
                                        <InputGroup className="mb-3">

                                            <FormControl onChange={this.getOther} defaultValue={this.state.diamond.crownHeight} ref={(element) => { this.crownHeightInput = element }}
                                                placeholder="CH"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col lg="2" md="2" sm="2" xs="2">
                                        <Form.Label>PA</Form.Label>
                                        <InputGroup className="mb-3">

                                            <FormControl onChange={this.getOther} defaultValue={this.state.diamond.pavillionAngle} ref={(element) => { this.pavillionAngleInput = element }}
                                                placeholder="PA"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col lg="2" md="2" sm="2" xs="2">
                                        <Form.Label>PD</Form.Label>
                                        <InputGroup className="mb-3">

                                            <FormControl onChange={this.getOther} defaultValue={this.state.diamond.pavillionDepth} ref={(element) => { this.pavillionDepthInput = element }}
                                                placeholder="PD"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col lg="2" md="2" sm="2" xs="2">
                                        <Form.Label>LH</Form.Label>
                                        <InputGroup className="mb-3">

                                            <FormControl onChange={this.getOther} defaultValue={this.state.diamond.lowerHalf} ref={(element) => { this.lowerHalfInput = element }}
                                                placeholder="LH"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>

                            </Modal.Body>

                        )
                    }
                    else
                        if (this.state.page === 4) {
                            console.log(this.state.diamond.links)
                            parse.push(
                                <Modal.Body className="modalAddBody">
                                    <Form.Label>Add Images Links</Form.Label>
                                    <InputGroup className="mb-3">
                                    {/* <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text> */}
                                        <FormControl onChange={this.prepareLink} defaultValue={this.state.linktoAdd} ref={(element) => { this.linkToAddInput = element }}
                                            placeholder="Place link here" value={this.state.linktoAdd}  style={{width:"300px",marginRight:"10px"}}/>
                                             <Button onClick={this.addLink} variant="primary">Add</Button>
                                    </InputGroup>
                                    <ListOfLinks deleteLink={this.deleteLink} links={this.state.diamond.links} />
                                   
                                </Modal.Body>

                            )
                        }

        return (
            <div>
                <Button variant="success" onClick={this.toggle}>
                    List New Diamond
            </Button>
                <Modal id="modalAdd" size="xl" show={this.state.modal} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>List New Diamond</Modal.Title>
                    </Modal.Header>
                    {parse}
                    <Modal.Footer>
                        <Button onClick={this.previousPage} variant="primary" disabled={this.state.page === 0}>
                            Back
                    </Button>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                    </Button>
                        <Button onClick={this.nextPage} variant="primary" disabled={this.state.page === 5} >
                            Next
                    </Button>
                        <Button variant="primary" onClick={this.saveDiamond} disabled={this.state.disableSave}>
                            Save My Diamond
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}

