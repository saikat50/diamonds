import React from 'react';
import { Container, Jumbotron, Table, Form, Button } from 'react-bootstrap'
import readXlsxFile from 'read-excel-file'
import DiamondNavbar from '../components/DiamondNavbar';
import Parse from 'parse';

export default class LoadExcel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            excelRows: [],
            headers: [],
            header: {},
            log1: []
        }

    }

    saveDiamond = (diamond) => {

        const Diamond = Parse.Object.extend('Diamond');
        const myNewObject = new Diamond();
        myNewObject.set('lotID', diamond.lotID);
        myNewObject.set('shape', diamond.shape);
        myNewObject.set('weight', Number(diamond.weight));
        myNewObject.set('color', diamond.color);
        myNewObject.set('clarity', diamond.clarity);
        myNewObject.set('cut', diamond.cut);
        myNewObject.set('polish', diamond.polish);
        myNewObject.set('symmetry', diamond.symmetry);
        myNewObject.set('fluorescence', diamond.fluorescence);
        myNewObject.set('fluorescenceColor', diamond.fluorescenceColor);
        myNewObject.set('lab', diamond.lab);
        myNewObject.set('certificateNumber', diamond.certificateNumber);
        myNewObject.set('depth', Number(diamond.depth));
        myNewObject.set('table', Number(diamond.table));
        myNewObject.set('crownAngle', Number(diamond.crownAngle));
        myNewObject.set('crownHeight', Number(diamond.crownHeight));
        myNewObject.set('pavillionAngle', Number(diamond.pavillionAngle));
        myNewObject.set('pavillionDepth', Number(diamond.pavillionDepth));
        myNewObject.set('starLength', Number(diamond.starLength));
        myNewObject.set('lowerHalf', Number(diamond.lowerHalf));
        myNewObject.set('girdle', diamond.girdle);
        myNewObject.set('culet', diamond.culet);
        myNewObject.set('list', Number(diamond.list));
        myNewObject.set('discount', Number(diamond.discount));
        myNewObject.set('pricePerCarat', Number(diamond.pricePerCarat));
        myNewObject.set('links', diamond.links);
        // myNewObject.set('inclusions',diamond.inclusions);
        if (diamond.keepDiscount) myNewObject.set('keepDiscount', diamond.keepDiscount);
        myNewObject.set('diamMin', Number(diamond.diamMin));
        myNewObject.set('diamMax', Number(diamond.diamMax));
        myNewObject.set('deptAvg', Number(diamond.deptAvg));
        myNewObject.set('owner', Parse.User.current());
        //   console.log("pic1 and pic2 before save");
        //   console.log(diamond.pic1, diamond.pic2);
        //   console.log(typeof diamond.pic1.file);
        //   if (diamond.pic1 && diamond.pic1.file) myNewObject.set('pic1', new Parse.File(diamond.pic1.name, diamond.pic1.file));
        //   if (diamond.pic2 && diamond.pic2.file) myNewObject.set('pic2', new Parse.File(diamond.pic2.name, diamond.pic2.file));
        console.log("going to save this diamond:");
        console.log(myNewObject);
        myNewObject.save().then(
            (result) => {
                console.log('Diamond created', result);
            },
            (error) => {
                console.error('Error while creating Diamond: ', error);
            }
        );


    }

    loadExcelFile = (e) => {
        let { excelRows, headers, header, log1 } = this.state;
        excelRows = [];
        headers = [];
        header = {};
        log1 = [];

        const input = e.target;
        readXlsxFile(input.files[0]).then((rows) => {
            // `rows` is an array of rows
            // each row being an array of cells.
            // console.log("excell rows @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
            // console.log(rows);
            headers = rows[0];
            excelRows = rows.splice(1, rows.length - 1);
            // console.log(headers);
            // console.log(excelRows);
            for (var i = 0; i < headers.length; i++) {
                if (["shape", "weight", "color", "clarity", "lotID", "cut", "polish", "symmetry",
                    "fluorescence", "fluorescenceColor", "lab", "certificateNumber", "depth", "table",
                    "crownAngle", "crownHeight", "pavillionAngle", "pavillionDepth", "starLength", "lowerHalf",
                    "girdle", "culet", "discount", "pricePerCarat", "diamMin", "diamMax", "deptAvg"
                ].includes(headers[i])) { header[headers[i]] = i }
            }
            this.setState({ excelRows, headers, header, log1 })
        })
    }
    getValues = (e) => {
        console.log(e.target.id);
        let { header } = this.state;


        header[e.target.value] = parseInt(e.target.id);
        this.setState({ header });
        console.log("heADER")
        console.log(header);

    }
    upload = () => {
        const { activeUser } = this.props;
        let { header, excelRows, log1 } = this.state;
        const headerKeys = Object.keys(header);
        let index = -1;
        excelRows.forEach(row => {
            let diamond = {};
            index++;
            for (var i = 0; i < headerKeys.length; i++) {
                if (["weight", "dept", "table", "crownAngle", "crownHeight", "pavillionAngle", "pavillionDept", "starLength", "lowerHalf", "discount", "pricePerCarat", "deptAvg", "diamMin", "diamMax"].includes(headerKeys[i])) {
                    diamond[headerKeys[i]] = Number(row[header[headerKeys[i]]])
                }
                else if (["lotID", "fluorescence", "fluorescenceColor", "culet"].includes(headerKeys[i])) {
                    diamond[headerKeys[i]] = row[header[headerKeys[i]]]
                }
                else {
                    diamond[headerKeys[i]] = row[header[headerKeys[i]]].toUpperCase();
                }
            }
            diamond.owner = Parse.User.current();
            if (diamond.keepDiscount || diamond.keepDiscount === 0) { diamond.keepDiscount = true } else { diamond.keepDiscount = false };
            console.log("diamond from excel:");
            console.log(diamond);
            if (diamond.lotID && diamond.weight && diamond.shape && diamond.color && diamond.clarity && diamond.pricePerCarat) {
                log1.push(<p key={index} style={{ color: "green" }}>{row} is valid for upload...</p>)
                this.saveDiamond(diamond);
                log1.push(<p key={index + 0.5} style={{ color: "green" }}>{row} saved...</p>)
            }
            else {
                log1.push(<p key={index} style={{ color: "red" }}>{row} is not valid for upload...</p>)
            }

        })
        this.setState({ log1 });
    }
    render() {

        const { activeUser, handleLogout, allMessages } = this.props;
        const { excelRows, headers, log1 } = this.state;
        if (log1.length) return (
            <Container>
                <DiamondNavbar cart={this.props.cart} allMessages={allMessages} activeUser={activeUser} handleLogout={handleLogout} />
                <Jumbotron fluid>
                    <div>
                        {log1}
                    </div>
                </Jumbotron>
            </Container>
        )

        console.log("log++++++++++++++++++++++++log");
        console.log(log1);
        let tableLines = [];
        let index = -1;
        headers.forEach(element => {
            index++;
            tableLines.push(<tr key={index}>
                <td>{index}</td>
                <td>{element}</td>
                <td id={element}>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control id={"0000" + index} onChange={this.getValues} defaultValue={element} as="select">

                            <option></option>
                            <option>shape</option>
                            <option>weight</option>
                            <option>color</option>
                            <option>clarity</option>
                            <option>lotID</option>
                            <option>cut</option>
                            <option>polish</option>
                            <option>symmetry</option>
                            <option>fluorescence</option>
                            <option>fluorescenceColor</option>
                            <option>lab</option>
                            <option>certificateNumber</option>
                            <option>depth</option>
                            <option>table</option>
                            <option>crownAngle</option>
                            <option>crownHeight</option>
                            <option>pavillionAngle</option>
                            <option>pavillionDepth</option>
                            <option>starLength</option>
                            <option>lowerHalf</option>
                            <option>girdle</option>
                            <option>culet</option>
                            <option>discount</option>
                            <option>pricePerCarat</option>
                            <option>diamMin</option>
                            <option>diamMax</option>
                            <option>deptAvg</option>

                        </Form.Control>
                    </Form.Group></td>
            </tr>)

        });
        return (
            <Container>
                <DiamondNavbar cart={this.props.cart} allMessages={allMessages} activeUser={activeUser} handleLogout={handleLogout} />
                <Jumbotron fluid>
                    <input onChange={this.loadExcelFile} type="file" id="input" />
                    <Table  >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Excel Header</th>
                                <th>Map to</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableLines}
                        </tbody>
                    </Table>
                    <Button onClick={this.upload}>Upload</Button>
                </Jumbotron>

            </Container>
        );
    }
}

