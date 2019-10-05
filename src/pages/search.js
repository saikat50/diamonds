import React from 'react';
import {Container} from 'react-bootstrap'
import AddDiamond from '../components/AddNewDiamond'
import DiamondList from '../components/DiamondsList'
import MyNavbar from '../components/MyNavbar'
import MyModal from '../components/MyModal'
import {user,listPrice} from '../App'
import {Diamond} from '../Classes/Diamond'
import DiamondNavbar from '../components/DiamondNavbar';
// import diamList  from '../data/diamonds-list.json';
// import priceList  from '../data/prices.json';
const axios=require('axios').default


export class Search extends React.Component {
  constructor(props){
    super(props);
    this.state={
        user:{id:0,userName:"1"},
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
      // let {diamondArr,isLoading,prices}=this.state;
      let isLoading=false;
      let diamondArr=[];
      let prices=            [
        {
            "shape": "round",
            "low_size": 1.00,
            "high_size":1.49,
            "color": "D",
            "clarity": "IF",
            "caratprice": 8600,
            "date": "2010-12-31"
        },
        {
            "shape": "round",
            "low_size": 1.50,
            "high_size": 1.99,
            "color": "D",
            "clarity": "IF",
            "caratprice": 9000,
            "date": "2010-12-31"
        },
        {
            "shape": "round",
            "low_size": 2.00,
            "high_size": 2.99,
            "color": "D",
            "clarity": "IF",
            "caratprice": 10000,
            "date": "2010-12-31"
        },
        {
            "shape": "round",
            "low_size": 10.00,
            "high_size": 10.99,
            "color": "M",
            "clarity": "I3",
            "caratprice": 2000,
            "date": "2010-12-31"
        }
    ];

      let diamondsJson=[{
        "lotID": "77790038",
        "shape": "BR",
        "weight": 2.08,
        "color": "G",
        "clarity": "VS1",
        "cut": "EX",
        "polish": "VG",
        "symmetry": "G",
        "fluorescence": "MD",
        "fluorescenceColor": "Blue",
        "lab": "GIA",
        "certificateNumber": "6331471554",
        "depth": 62.1,
        "table": 58,
        "crownAngle": null,
        "crownHeight": null,
        "pavillionAngle": null,
        "pavilliondepth": null,
        "starLength": null,
        "lowerHalf": null,
        "girdle": "MED-STK",
        "culet": "NONE",
        "list": 16000,
        "discount": 20,
        "pricePerCarat": 8480,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "links": ["https://lh3.googleusercontent.com/DG5uR8AnplfFaRYquPogrhi8sIHdQKka2mrtmnqSR-_a-vdL-p3xKat5XSwGPt83-N-p-8dmk9TqlK7lmdYMDzTX-ZAgUQTaWQnLCMOKHQiTkxcgC6hC4UwHszkFoGQsPfkMfyHkBERQPh_coa5R4xF4IYwDG05cumSglLGl0gsi57NAnpFQkmtHb-XszR4KsKIy7KE_rbUxV7fRmg4QihYBQgi-tEQ73BIEAp4eyk82u7VhKq4wjz5VAMfYUEJxJf7PPhJ8TkIwhLKLWbbW7ynqm_UMNUmJWzG6o_Nt6_-fOMVulTkZ7T0_x6fqHVOYvRUMfF561LlB-P8XybWBpFy1zXawq98WXm6XTYUQGypYesQgMXr2CXPpqEu5PmXLufhJRD3nTm4fxUqp8QJ0KBr8bUWDbznJ_to9HOTke4mqtDhFnDfTgBjQcqF9aYr0YPu_Cj8NLcki_HDwLadWUzQ-wI1c0bhP9Ia8dH2g5NimV1DcEGDcrCeciM50PaZ5SDT6v0XdIz7y75KfNMJl_QOnzL-62QP4JhhTgZTCceBHUlpmp0ZiY9pddaaHey1LK4mLxqWqxNjRPxoQoeKHEgT8JZnkVOj2KkukAHlQQzEgAk2wNvJCsN5hm0IJe7I5Y7yA1-QFPFTBep3DQiLQY_8YsxLD0Wtr0CE7w8n-59b4Lq_YiYgieBCC=w1137-h900-no", "https://lh3.googleusercontent.com/DG5uR8AnplfFaRYquPogrhi8sIHdQKka2mrtmnqSR-_a-vdL-p3xKat5XSwGPt83-N-p-8dmk9TqlK7lmdYMDzTX-ZAgUQTaWQnLCMOKHQiTkxcgC6hC4UwHszkFoGQsPfkMfyHkBERQPh_coa5R4xF4IYwDG05cumSglLGl0gsi57NAnpFQkmtHb-XszR4KsKIy7KE_rbUxV7fRmg4QihYBQgi-tEQ73BIEAp4eyk82u7VhKq4wjz5VAMfYUEJxJf7PPhJ8TkIwhLKLWbbW7ynqm_UMNUmJWzG6o_Nt6_-fOMVulTkZ7T0_x6fqHVOYvRUMfF561LlB-P8XybWBpFy1zXawq98WXm6XTYUQGypYesQgMXr2CXPpqEu5PmXLufhJRD3nTm4fxUqp8QJ0KBr8bUWDbznJ_to9HOTke4mqtDhFnDfTgBjQcqF9aYr0YPu_Cj8NLcki_HDwLadWUzQ-wI1c0bhP9Ia8dH2g5NimV1DcEGDcrCeciM50PaZ5SDT6v0XdIz7y75KfNMJl_QOnzL-62QP4JhhTgZTCceBHUlpmp0ZiY9pddaaHey1LK4mLxqWqxNjRPxoQoeKHEgT8JZnkVOj2KkukAHlQQzEgAk2wNvJCsN5hm0IJe7I5Y7yA1-QFPFTBep3DQiLQY_8YsxLD0Wtr0CE7w8n-59b4Lq_YiYgieBCC=w1137-h900-no"],
        "inclusions": ["White feather crown", "Black crystal table", "white crystal table"],
        "owner": "1",
        "keepDiscount":true
      },
      {
        "lotID": "77790039",
        "shape": "BR",
        "weight": 2.04,
        "color": "H",
        "clarity": "VS2",
        "cut": "EX",
        "polish": "VG",
        "symmetry": "EX",
        "fluorescence": "FNT",
        "fluorescenceColor": "Blue",
        "lab": "GIA",
        "certificateNumber": "6331471554",
        "depth": 61.1,
        "table": 57,
        "crownAngle": null,
        "crownHeight": null,
        "pavillionAngle": null,
        "pavilliondepth": null,
        "starLength": null,
        "lowerHalf": null,
        "girdle": "MED-STK",
        "culet": "NONE",
        "list": 12000,
        "discount": 30,
        "pricePerCarat": 6480,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "links": ["https://lh3.googleusercontent.com/DG5uR8AnplfFaRYquPogrhi8sIHdQKka2mrtmnqSR-_a-vdL-p3xKat5XSwGPt83-N-p-8dmk9TqlK7lmdYMDzTX-ZAgUQTaWQnLCMOKHQiTkxcgC6hC4UwHszkFoGQsPfkMfyHkBERQPh_coa5R4xF4IYwDG05cumSglLGl0gsi57NAnpFQkmtHb-XszR4KsKIy7KE_rbUxV7fRmg4QihYBQgi-tEQ73BIEAp4eyk82u7VhKq4wjz5VAMfYUEJxJf7PPhJ8TkIwhLKLWbbW7ynqm_UMNUmJWzG6o_Nt6_-fOMVulTkZ7T0_x6fqHVOYvRUMfF561LlB-P8XybWBpFy1zXawq98WXm6XTYUQGypYesQgMXr2CXPpqEu5PmXLufhJRD3nTm4fxUqp8QJ0KBr8bUWDbznJ_to9HOTke4mqtDhFnDfTgBjQcqF9aYr0YPu_Cj8NLcki_HDwLadWUzQ-wI1c0bhP9Ia8dH2g5NimV1DcEGDcrCeciM50PaZ5SDT6v0XdIz7y75KfNMJl_QOnzL-62QP4JhhTgZTCceBHUlpmp0ZiY9pddaaHey1LK4mLxqWqxNjRPxoQoeKHEgT8JZnkVOj2KkukAHlQQzEgAk2wNvJCsN5hm0IJe7I5Y7yA1-QFPFTBep3DQiLQY_8YsxLD0Wtr0CE7w8n-59b4Lq_YiYgieBCC=w1137-h900-no", "https://lh3.googleusercontent.com/DG5uR8AnplfFaRYquPogrhi8sIHdQKka2mrtmnqSR-_a-vdL-p3xKat5XSwGPt83-N-p-8dmk9TqlK7lmdYMDzTX-ZAgUQTaWQnLCMOKHQiTkxcgC6hC4UwHszkFoGQsPfkMfyHkBERQPh_coa5R4xF4IYwDG05cumSglLGl0gsi57NAnpFQkmtHb-XszR4KsKIy7KE_rbUxV7fRmg4QihYBQgi-tEQ73BIEAp4eyk82u7VhKq4wjz5VAMfYUEJxJf7PPhJ8TkIwhLKLWbbW7ynqm_UMNUmJWzG6o_Nt6_-fOMVulTkZ7T0_x6fqHVOYvRUMfF561LlB-P8XybWBpFy1zXawq98WXm6XTYUQGypYesQgMXr2CXPpqEu5PmXLufhJRD3nTm4fxUqp8QJ0KBr8bUWDbznJ_to9HOTke4mqtDhFnDfTgBjQcqF9aYr0YPu_Cj8NLcki_HDwLadWUzQ-wI1c0bhP9Ia8dH2g5NimV1DcEGDcrCeciM50PaZ5SDT6v0XdIz7y75KfNMJl_QOnzL-62QP4JhhTgZTCceBHUlpmp0ZiY9pddaaHey1LK4mLxqWqxNjRPxoQoeKHEgT8JZnkVOj2KkukAHlQQzEgAk2wNvJCsN5hm0IJe7I5Y7yA1-QFPFTBep3DQiLQY_8YsxLD0Wtr0CE7w8n-59b4Lq_YiYgieBCC=w1137-h900-no"],
        "inclusions": ["White feather crown", "Black crystal table", "white crystal table"],
        "owner": "1",
        "keepDiscount":true
      },
      {
        "lotID": 77640321,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.01,
        "pricePerCarat": 4450,
        "discount": 39.9,
        "list": 7400,
        "clarity": "SI1",
        "color": "G",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 62.4,
        "table": 59,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Crystal, Cloud, Feather, Pinpoint, Natural",
        "owner": "2",
        "links": ["https://lh3.googleusercontent.com/DG5uR8AnplfFaRYquPogrhi8sIHdQKka2mrtmnqSR-_a-vdL-p3xKat5XSwGPt83-N-p-8dmk9TqlK7lmdYMDzTX-ZAgUQTaWQnLCMOKHQiTkxcgC6hC4UwHszkFoGQsPfkMfyHkBERQPh_coa5R4xF4IYwDG05cumSglLGl0gsi57NAnpFQkmtHb-XszR4KsKIy7KE_rbUxV7fRmg4QihYBQgi-tEQ73BIEAp4eyk82u7VhKq4wjz5VAMfYUEJxJf7PPhJ8TkIwhLKLWbbW7ynqm_UMNUmJWzG6o_Nt6_-fOMVulTkZ7T0_x6fqHVOYvRUMfF561LlB-P8XybWBpFy1zXawq98WXm6XTYUQGypYesQgMXr2CXPpqEu5PmXLufhJRD3nTm4fxUqp8QJ0KBr8bUWDbznJ_to9HOTke4mqtDhFnDfTgBjQcqF9aYr0YPu_Cj8NLcki_HDwLadWUzQ-wI1c0bhP9Ia8dH2g5NimV1DcEGDcrCeciM50PaZ5SDT6v0XdIz7y75KfNMJl_QOnzL-62QP4JhhTgZTCceBHUlpmp0ZiY9pddaaHey1LK4mLxqWqxNjRPxoQoeKHEgT8JZnkVOj2KkukAHlQQzEgAk2wNvJCsN5hm0IJe7I5Y7yA1-QFPFTBep3DQiLQY_8YsxLD0Wtr0CE7w8n-59b4Lq_YiYgieBCC=w1137-h900-no", "https://lh3.googleusercontent.com/DG5uR8AnplfFaRYquPogrhi8sIHdQKka2mrtmnqSR-_a-vdL-p3xKat5XSwGPt83-N-p-8dmk9TqlK7lmdYMDzTX-ZAgUQTaWQnLCMOKHQiTkxcgC6hC4UwHszkFoGQsPfkMfyHkBERQPh_coa5R4xF4IYwDG05cumSglLGl0gsi57NAnpFQkmtHb-XszR4KsKIy7KE_rbUxV7fRmg4QihYBQgi-tEQ73BIEAp4eyk82u7VhKq4wjz5VAMfYUEJxJf7PPhJ8TkIwhLKLWbbW7ynqm_UMNUmJWzG6o_Nt6_-fOMVulTkZ7T0_x6fqHVOYvRUMfF561LlB-P8XybWBpFy1zXawq98WXm6XTYUQGypYesQgMXr2CXPpqEu5PmXLufhJRD3nTm4fxUqp8QJ0KBr8bUWDbznJ_to9HOTke4mqtDhFnDfTgBjQcqF9aYr0YPu_Cj8NLcki_HDwLadWUzQ-wI1c0bhP9Ia8dH2g5NimV1DcEGDcrCeciM50PaZ5SDT6v0XdIz7y75KfNMJl_QOnzL-62QP4JhhTgZTCceBHUlpmp0ZiY9pddaaHey1LK4mLxqWqxNjRPxoQoeKHEgT8JZnkVOj2KkukAHlQQzEgAk2wNvJCsN5hm0IJe7I5Y7yA1-QFPFTBep3DQiLQY_8YsxLD0Wtr0CE7w8n-59b4Lq_YiYgieBCC=w1137-h900-no"],
        "keepDiscount":true
      },
      {
        "lotID": 76140037,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.01,
        "pricePerCarat": 4615,
        "discount": 37.6,
        "list": 7400,
        "clarity": "SI1",
        "color": "G",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": "",
        "fluorescenceColor": "",
        "depth": 62.1,
        "table": 58,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Crystal, Feather, Cloud, Needle",
        "owner": "2",
        "links": ["https://lh3.googleusercontent.com/DG5uR8AnplfFaRYquPogrhi8sIHdQKka2mrtmnqSR-_a-vdL-p3xKat5XSwGPt83-N-p-8dmk9TqlK7lmdYMDzTX-ZAgUQTaWQnLCMOKHQiTkxcgC6hC4UwHszkFoGQsPfkMfyHkBERQPh_coa5R4xF4IYwDG05cumSglLGl0gsi57NAnpFQkmtHb-XszR4KsKIy7KE_rbUxV7fRmg4QihYBQgi-tEQ73BIEAp4eyk82u7VhKq4wjz5VAMfYUEJxJf7PPhJ8TkIwhLKLWbbW7ynqm_UMNUmJWzG6o_Nt6_-fOMVulTkZ7T0_x6fqHVOYvRUMfF561LlB-P8XybWBpFy1zXawq98WXm6XTYUQGypYesQgMXr2CXPpqEu5PmXLufhJRD3nTm4fxUqp8QJ0KBr8bUWDbznJ_to9HOTke4mqtDhFnDfTgBjQcqF9aYr0YPu_Cj8NLcki_HDwLadWUzQ-wI1c0bhP9Ia8dH2g5NimV1DcEGDcrCeciM50PaZ5SDT6v0XdIz7y75KfNMJl_QOnzL-62QP4JhhTgZTCceBHUlpmp0ZiY9pddaaHey1LK4mLxqWqxNjRPxoQoeKHEgT8JZnkVOj2KkukAHlQQzEgAk2wNvJCsN5hm0IJe7I5Y7yA1-QFPFTBep3DQiLQY_8YsxLD0Wtr0CE7w8n-59b4Lq_YiYgieBCC=w1137-h900-no", "https://lh3.googleusercontent.com/DG5uR8AnplfFaRYquPogrhi8sIHdQKka2mrtmnqSR-_a-vdL-p3xKat5XSwGPt83-N-p-8dmk9TqlK7lmdYMDzTX-ZAgUQTaWQnLCMOKHQiTkxcgC6hC4UwHszkFoGQsPfkMfyHkBERQPh_coa5R4xF4IYwDG05cumSglLGl0gsi57NAnpFQkmtHb-XszR4KsKIy7KE_rbUxV7fRmg4QihYBQgi-tEQ73BIEAp4eyk82u7VhKq4wjz5VAMfYUEJxJf7PPhJ8TkIwhLKLWbbW7ynqm_UMNUmJWzG6o_Nt6_-fOMVulTkZ7T0_x6fqHVOYvRUMfF561LlB-P8XybWBpFy1zXawq98WXm6XTYUQGypYesQgMXr2CXPpqEu5PmXLufhJRD3nTm4fxUqp8QJ0KBr8bUWDbznJ_to9HOTke4mqtDhFnDfTgBjQcqF9aYr0YPu_Cj8NLcki_HDwLadWUzQ-wI1c0bhP9Ia8dH2g5NimV1DcEGDcrCeciM50PaZ5SDT6v0XdIz7y75KfNMJl_QOnzL-62QP4JhhTgZTCceBHUlpmp0ZiY9pddaaHey1LK4mLxqWqxNjRPxoQoeKHEgT8JZnkVOj2KkukAHlQQzEgAk2wNvJCsN5hm0IJe7I5Y7yA1-QFPFTBep3DQiLQY_8YsxLD0Wtr0CE7w8n-59b4Lq_YiYgieBCC=w1137-h900-no"],
        "keepDiscount":true
      },
      {
        "lotID": 77640171,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.01,
        "pricePerCarat": 4665,
        "discount": 37,
        "list": 7400,
        "clarity": "SI1",
        "color": "G",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": "",
        "fluorescenceColor": "",
        "depth": 61.4,
        "table": 60,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Cloud, Crystal, Feather, Needle",
        "owner": "1",
        "links": ["https://lh3.googleusercontent.com/DG5uR8AnplfFaRYquPogrhi8sIHdQKka2mrtmnqSR-_a-vdL-p3xKat5XSwGPt83-N-p-8dmk9TqlK7lmdYMDzTX-ZAgUQTaWQnLCMOKHQiTkxcgC6hC4UwHszkFoGQsPfkMfyHkBERQPh_coa5R4xF4IYwDG05cumSglLGl0gsi57NAnpFQkmtHb-XszR4KsKIy7KE_rbUxV7fRmg4QihYBQgi-tEQ73BIEAp4eyk82u7VhKq4wjz5VAMfYUEJxJf7PPhJ8TkIwhLKLWbbW7ynqm_UMNUmJWzG6o_Nt6_-fOMVulTkZ7T0_x6fqHVOYvRUMfF561LlB-P8XybWBpFy1zXawq98WXm6XTYUQGypYesQgMXr2CXPpqEu5PmXLufhJRD3nTm4fxUqp8QJ0KBr8bUWDbznJ_to9HOTke4mqtDhFnDfTgBjQcqF9aYr0YPu_Cj8NLcki_HDwLadWUzQ-wI1c0bhP9Ia8dH2g5NimV1DcEGDcrCeciM50PaZ5SDT6v0XdIz7y75KfNMJl_QOnzL-62QP4JhhTgZTCceBHUlpmp0ZiY9pddaaHey1LK4mLxqWqxNjRPxoQoeKHEgT8JZnkVOj2KkukAHlQQzEgAk2wNvJCsN5hm0IJe7I5Y7yA1-QFPFTBep3DQiLQY_8YsxLD0Wtr0CE7w8n-59b4Lq_YiYgieBCC=w1137-h900-no", "https://lh3.googleusercontent.com/DG5uR8AnplfFaRYquPogrhi8sIHdQKka2mrtmnqSR-_a-vdL-p3xKat5XSwGPt83-N-p-8dmk9TqlK7lmdYMDzTX-ZAgUQTaWQnLCMOKHQiTkxcgC6hC4UwHszkFoGQsPfkMfyHkBERQPh_coa5R4xF4IYwDG05cumSglLGl0gsi57NAnpFQkmtHb-XszR4KsKIy7KE_rbUxV7fRmg4QihYBQgi-tEQ73BIEAp4eyk82u7VhKq4wjz5VAMfYUEJxJf7PPhJ8TkIwhLKLWbbW7ynqm_UMNUmJWzG6o_Nt6_-fOMVulTkZ7T0_x6fqHVOYvRUMfF561LlB-P8XybWBpFy1zXawq98WXm6XTYUQGypYesQgMXr2CXPpqEu5PmXLufhJRD3nTm4fxUqp8QJ0KBr8bUWDbznJ_to9HOTke4mqtDhFnDfTgBjQcqF9aYr0YPu_Cj8NLcki_HDwLadWUzQ-wI1c0bhP9Ia8dH2g5NimV1DcEGDcrCeciM50PaZ5SDT6v0XdIz7y75KfNMJl_QOnzL-62QP4JhhTgZTCceBHUlpmp0ZiY9pddaaHey1LK4mLxqWqxNjRPxoQoeKHEgT8JZnkVOj2KkukAHlQQzEgAk2wNvJCsN5hm0IJe7I5Y7yA1-QFPFTBep3DQiLQY_8YsxLD0Wtr0CE7w8n-59b4Lq_YiYgieBCC=w1137-h900-no"],
        "keepDiscount":true
      },
      {
        "lotID": 77620387,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.01,
        "pricePerCarat": 4845,
        "discount": 34.5,
        "list": 7400,
        "clarity": "SI1",
        "color": "G",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 62,
        "table": 60,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Crystal, Needle, Cloud, Indented Natural",
        "owner": "2",
        "links": ["https://lh3.googleusercontent.com/DG5uR8AnplfFaRYquPogrhi8sIHdQKka2mrtmnqSR-_a-vdL-p3xKat5XSwGPt83-N-p-8dmk9TqlK7lmdYMDzTX-ZAgUQTaWQnLCMOKHQiTkxcgC6hC4UwHszkFoGQsPfkMfyHkBERQPh_coa5R4xF4IYwDG05cumSglLGl0gsi57NAnpFQkmtHb-XszR4KsKIy7KE_rbUxV7fRmg4QihYBQgi-tEQ73BIEAp4eyk82u7VhKq4wjz5VAMfYUEJxJf7PPhJ8TkIwhLKLWbbW7ynqm_UMNUmJWzG6o_Nt6_-fOMVulTkZ7T0_x6fqHVOYvRUMfF561LlB-P8XybWBpFy1zXawq98WXm6XTYUQGypYesQgMXr2CXPpqEu5PmXLufhJRD3nTm4fxUqp8QJ0KBr8bUWDbznJ_to9HOTke4mqtDhFnDfTgBjQcqF9aYr0YPu_Cj8NLcki_HDwLadWUzQ-wI1c0bhP9Ia8dH2g5NimV1DcEGDcrCeciM50PaZ5SDT6v0XdIz7y75KfNMJl_QOnzL-62QP4JhhTgZTCceBHUlpmp0ZiY9pddaaHey1LK4mLxqWqxNjRPxoQoeKHEgT8JZnkVOj2KkukAHlQQzEgAk2wNvJCsN5hm0IJe7I5Y7yA1-QFPFTBep3DQiLQY_8YsxLD0Wtr0CE7w8n-59b4Lq_YiYgieBCC=w1137-h900-no", "https://lh3.googleusercontent.com/DG5uR8AnplfFaRYquPogrhi8sIHdQKka2mrtmnqSR-_a-vdL-p3xKat5XSwGPt83-N-p-8dmk9TqlK7lmdYMDzTX-ZAgUQTaWQnLCMOKHQiTkxcgC6hC4UwHszkFoGQsPfkMfyHkBERQPh_coa5R4xF4IYwDG05cumSglLGl0gsi57NAnpFQkmtHb-XszR4KsKIy7KE_rbUxV7fRmg4QihYBQgi-tEQ73BIEAp4eyk82u7VhKq4wjz5VAMfYUEJxJf7PPhJ8TkIwhLKLWbbW7ynqm_UMNUmJWzG6o_Nt6_-fOMVulTkZ7T0_x6fqHVOYvRUMfF561LlB-P8XybWBpFy1zXawq98WXm6XTYUQGypYesQgMXr2CXPpqEu5PmXLufhJRD3nTm4fxUqp8QJ0KBr8bUWDbznJ_to9HOTke4mqtDhFnDfTgBjQcqF9aYr0YPu_Cj8NLcki_HDwLadWUzQ-wI1c0bhP9Ia8dH2g5NimV1DcEGDcrCeciM50PaZ5SDT6v0XdIz7y75KfNMJl_QOnzL-62QP4JhhTgZTCceBHUlpmp0ZiY9pddaaHey1LK4mLxqWqxNjRPxoQoeKHEgT8JZnkVOj2KkukAHlQQzEgAk2wNvJCsN5hm0IJe7I5Y7yA1-QFPFTBep3DQiLQY_8YsxLD0Wtr0CE7w8n-59b4Lq_YiYgieBCC=w1137-h900-no"],
        "keepDiscount":true
      },
      {
        "lotID": 76090243,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.02,
        "pricePerCarat": 4950,
        "discount": 33.1,
        "list": 7400,
        "clarity": "SI1",
        "color": "G",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 61.2,
        "table": 58,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Cloud, Crystal, Needle",
        "owner": "2",
        "links": ["../src/data/l8cb11pkn10.jpg", "../src/data/l8cb11pkn10.jpg"],
        "keepDiscount":true
      },
      {
        "lotID": 76470330,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.01,
        "pricePerCarat": 3880,
        "discount": 47.6,
        "list": 7400,
        "clarity": "SI1",
        "color": "G",
        "cut": "VG",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 64.3,
        "table": 58,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Cloud, Crystal, Needle, Natural",
        "owner": "2",
        "links": ["../src/data/l8cb11pkn10.jpg", "../src/data/l8cb11pkn10.jpg"],
        "keepDiscount":true
      },
      {
        "lotID": 76940182,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.01,
        "pricePerCarat": 3525,
        "discount": 52.4,
        "list": 7400,
        "clarity": "SI1",
        "color": "G",
        "cut": "GD",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 65.8,
        "table": 59,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Cloud, Crystal, Feather, Needle, Natural",
        "owner": "2",
        "links": ["../src/data/l8cb11pkn10.jpg", "../src/data/l8cb11pkn10.jpg"],
        "keepDiscount":true
      },
      {
        "lotID": 76470520,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.02,
        "pricePerCarat": 3735,
        "discount": 45.1,
        "list": 6800,
        "clarity": "SI1",
        "color": "H",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 61.9,
        "table": 59,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Crystal, Cloud, Needle, Indented Natural, Natural",
        "owner": "2",
        "links": ["../src/data/l8cb11pkn10.jpg", "../src/data/l8cb11pkn10.jpg"],
        "keepDiscount":true
      },
      {
        "lotID": 77970181,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.03,
        "pricePerCarat": 4400,
        "discount": 35.3,
        "list": 6800,
        "clarity": "SI1",
        "color": "H",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 59.2,
        "table": 59,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Crystal, Cloud, Feather, Needle",
        "owner": "2",
        "links": ["../src/data/l8cb11pkn10.jpg", "../src/data/l8cb11pkn10.jpg"],
        "keepDiscount":true
      },
      {
        "lotID": 77600141,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.02,
        "pricePerCarat": 4415,
        "discount": 35.1,
        "list": 6800,
        "clarity": "SI1",
        "color": "H",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 62.3,
        "table": 58,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Twinning Wisp, Crystal, Feather, Cloud",
        "owner": "2",
        "links": ["../src/data/l8cb11pkn10.jpg", "../src/data/l8cb11pkn10.jpg"],
        "keepDiscount":true
      },
      {
        "lotID": 76630058,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.02,
        "pricePerCarat": 4430,
        "discount": 34.9,
        "list": 6800,
        "clarity": "SI1",
        "color": "H",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 61.3,
        "table": 58,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Crystal, Feather, Cavity, Needle",
        "owner": "2",
        "links": ["../src/data/l8cb11pkn10.jpg", "../src/data/l8cb11pkn10.jpg"],
        "keepDiscount":true
      },
      {
        "lotID": 76420450,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.01,
        "pricePerCarat": 4580,
        "discount": 32.6,
        "list": 6800,
        "clarity": "SI1",
        "color": "H",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 61.9,
        "table": 59,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Feather, Cloud, Needle, Indented Natural",
        "owner": "1",
        "links": "",
        "keepDiscount":true
      },
      {
        "lotID": 78420106,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.01,
        "pricePerCarat": 4625,
        "discount": 32,
        "list": 6800,
        "clarity": "SI1",
        "color": "H",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 61,
        "table": 58,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Cloud, Crystal, Needle",
        "owner": "1",
        "links": "",
        "keepDiscount":true
      },
      {
        "lotID": 77670310,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.04,
        "pricePerCarat": 4655,
        "discount": 31.5,
        "list": 6800,
        "clarity": "SI1",
        "color": "H",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 62.3,
        "table": 58,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Cloud, Pinpoint",
        "owner": "1",
        "links": "",
        "keepDiscount":true
      },
      {
        "lotID": 76090489,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.02,
        "pricePerCarat": 4670,
        "discount": 31.3,
        "list": 6800,
        "clarity": "SI1",
        "color": "H",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 62.1,
        "table": 57,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Crystal, Pinpoint, Indented Natural, Natural",
        "owner": "1",
        "links": "",
        "keepDiscount":true
      },
      {
        "lotID": 77150055,
        "certificateNumber": 6331471554,
        "shape": "BR",
        "weight": 1.01,
        "pricePerCarat": 4930,
        "discount": 27.5,
        "list": 6800,
        "clarity": "SI1",
        "color": "H",
        "cut": "EX",
        "polish": "EX",
        "symmetry": "EX",
        "fluorescence": " ",
        "fluorescenceColor": "",
        "depth": 61.3,
        "table": 60,
        "diamMin":6.35,
        "diamMax":6.39,
        "deptAvg":3.98,
        "inclusions": "Feather, Knot, Crystal, Cloud, Needle",
        "owner": "1",
        "links": "",
        "keepDiscount":true
      }
      ]
      diamondsJson.forEach((diamond)=>{
        diamondArr.push(new Diamond(diamond))
      })
      // diamList.forEach((diam) => {
      //  diamondArr.push(new Diamond(diam))
      // })
     
      // let pricesList = pricesList.data.response.body.price;
      // pricesList.forEach(list => {
      //   prices.push(list)
      // })
      // axios.get("../src/data/diamonds-list.js").then(p => {
      //   let diamondData = p.data;
      //   console.log("sdgsdfgsdfgsdfgsdfgdsdfgs"+diamondData);
      //   diamondData.forEach((diam) => {
      //     this.state.diamondArr.push(new Diamond(diam))
      //   })
      //   axios.get("\src\data\prices.json").then(res => {
      //     let pricesList = res.data.response.body.price;
      //     pricesList.forEach(list => {
      //       this.state.prices.push(list)
      //     })
        
          this.setState({diamondArr,isLoading,prices})
  
      //   })
      // })
  
    }
    saveDiamond = (diamond, atEdit) => {
       let {edit,diamondArr}=this.state; 
      if (atEdit===-1) {
        diamondArr.concat(new Diamond(diamond))
      }
      else {
        diamondArr.splice(atEdit, 1, new Diamond(diamond));
      }
      edit = -1;
      this.setState({edit,diamondArr});
    }

    deleteDiamond = (index) => {
        let {diamondArr}=this.state; 
      var newArr = diamondArr.splice(index, 1);
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
      const { activeUser, handleLogout } = this.props;
      if (this.state.isLoading) return false;

      return (

        <Container >
          {/* <MyNavbar user={this.state.user}/> */}
          <DiamondNavbar activeUser={activeUser} handleLogout={handleLogout}/>
          <AddDiamond user={this.state.user}  activeUser={activeUser}  saveDiamond={this.saveDiamond} cancelEdit={this.cancelEdit} addEdit={this.addEdit} prices={this.state.prices} edit={this.state.edit} filter={this.state.filter} diamonds={this.state.diamondArr} />
          {/* <MyModal  user={this.state.user}  activeUser={activeUser} /> */}
          <DiamondList  ownerName={this.props.ownerName} user={this.state.user}  activeUser={activeUser}  deleteDiamond={this.deleteDiamond} editDiamond={this.editDiamond} list={this.state.diamondArr} />
        </Container>
      );
    }
  }
 
  export default Search;