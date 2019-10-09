import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



export default function HorizontalColorSlider(props) {
    
    const useStyles = makeStyles({
        root: {
          width: 500,
        },
      });
      
  const classes = useStyles();
  function valuetext(value) {
    return `${value}°C`;
  }
  let marks,max;
  if (props.name==="Color"){
  marks = [
    {
      value: 0,
      label: 'D',
    },
    {
      value: 1,
      label: 'E',
    },
    {
      value: 2,
      label: 'F',
    },
    {
      value: 3,
      label: 'G',
    },
    {
      value: 4,
      label: 'H',
    },
    {
      value: 5,
      label: 'I',
    },
    {
      value: 6,
      label: 'J',
    },
    {
      value: 7,
      label: 'K',
    },
    {
      value: 8,
      label: 'L',
    },
    {
      value: 9,
      label: 'M',
    },
    {
      value: 10,
      label: 'N',
    },
    {
      value: 11,
      label: 'OP',
    },
    {
      value: 12,
      label: 'QR',
    },
    {
      value: 13,
      label: 'ST',
    },
    {
      value: 14,
      label: 'UV',
    },
    {
      value: 15,
      label: 'WX',
    },
    {
      value: 16,
      label: 'YZ',
    },
  ];
  max=16;
}
else if (props.name==="Clarity"){
    marks = [
        {
          value: 0,
          label: 'FL',
        },
        {
          value: 1,
          label: 'IF',
        },
        {
          value: 2,
          label: 'VVS1',
        },
        {
          value: 3,
          label: 'VVS2',
        },
        {
          value: 4,
          label: 'VS1',
        },
        {
          value: 5,
          label: 'VS2',
        },
        {
          value: 6,
          label: 'SI1',
        },
        {
          value: 7,
          label: 'SI2',
        },
        {
          value: 8,
          label: 'SI3',
        },
        {
          value: 9,
          label: 'I1',
        },
        {
            value: 10,
            label: 'I2',
          },
          {
            value: 11,
            label: 'I3',
          },
      ];  
      max=11; 
}
  return (
    <React.Fragment>
      <Typography id="horizontal-slider" gutterBottom>
        
      </Typography>
      <div className={classes.root}>
        {props.name}
        <Slider
        onChangeCommitted={(e,val)=>{props.change(val)}}
          orientation="horizontal"
          defaultValue={[0, max]}
          aria-labelledby="horizontal-slider"
          getAriaValueText={valuetext}
          marks={marks}
          max={max}
        />
      </div>
    </React.Fragment>
  );
}
