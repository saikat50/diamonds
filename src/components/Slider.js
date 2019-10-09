import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
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
];

export default function VerticalSlider() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography id="vertical-slider" gutterBottom>
        cOLOR
      </Typography>
      <div className={classes.root}>

        <Slider
          orientation="vertical"
          defaultValue={[0, 9]}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
          max={9}
        />
      </div>
    </React.Fragment>
  );
}
