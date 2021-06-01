import React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {Stack, Animation} from '@devexpress/dx-react-chart';

const legendStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: 'auto',
      flexDirection: 'row',
      padding: theme.spacing(1),
    },
  }),
);

const legendRootBase: React.FC<Legend.RootProps> = ({...props}) => {
  const classes = legendStyles();
  return <Legend.Root className={classes.root} {...props} />;
};

const legendLabelStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      whiteSpace: 'nowrap',
      padding: theme.spacing(1),
    },
  }),
);

const legendLabelBase: React.FC<Legend.LabelProps> = ({...props}) => {
  const classes = legendLabelStyles();
  return <Legend.Label className={classes.label} {...props} />;
};

export interface SideBySideBarProps {
  title?: string;
  legendPosition: 'bottom' | 'top' | 'left' | 'right';
  argumentField: string;
  leftBarSeriesName: string;
  leftBarSeriesColor: string;
  leftValueField: string;
  rightBarSeriesName: string;
  rightBarSeriesColor: string;
  rightValueField: string;
  data: any;
}

const SideBySideBar: React.FC<SideBySideBarProps> = ({...props}) => {
  return (
    <Chart data={props.data}>
      <ArgumentAxis />
      <ValueAxis />

      <BarSeries
        name={props.leftBarSeriesName}
        valueField={props.leftValueField}
        argumentField={props.argumentField}
        color={props.leftBarSeriesColor}
      />

      <BarSeries
        name={props.rightBarSeriesName}
        valueField={props.rightValueField}
        argumentField={props.argumentField}
        color={props.rightBarSeriesColor}
      />

      <Animation />
      <Legend
        position={props.legendPosition}
        rootComponent={legendRootBase}
        labelComponent={legendLabelBase}
      />
      {props.title != undefined ? <Title text={props.title} /> : null}
      <Stack />
    </Chart>
  );
};

export default SideBySideBar;
