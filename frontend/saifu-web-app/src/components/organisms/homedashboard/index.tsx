import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';

import {Heading} from '../../atoms';
import {
  DashboardCard,
  DashboardCardProps,
  DashboardCircleCard,
  DashboardCircleCardProps,
} from '../../molecules';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      width: 'fit-content',
    },
    header: {
      zIndex: 1,
    },
    row: {
      display: 'flex',
      width: 'fit-content',
      zIndex: 1,
    },
    center: {
      position: 'absolute',
      left: 380,
      top: 180,
      zIndex: 2,
    },
  }),
);

export interface HomeDashboardProps {
  title: string;
  note: string;
  incomeDashboardCardProps: DashboardCardProps;
  expenseDashboardCardProps: DashboardCardProps;
  assetDashboardCardProps: DashboardCardProps;
  debtDashboardCardProps: DashboardCardProps;
  saifuDashboardCardProps: DashboardCircleCardProps;
}

const HomeDashboard: React.FC<HomeDashboardProps> = ({...props}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <div className={classes.header}>
        <Heading variant="h4" align="center">
          {props.title}
        </Heading>
        <Heading variant="h6" align="center">
          {props.note}
        </Heading>
      </div>
      <div className={classes.row}>
        <DashboardCard {...props.expenseDashboardCardProps} />
        <DashboardCard {...props.incomeDashboardCardProps} />
      </div>
      <div className={classes.row}>
        <DashboardCard {...props.assetDashboardCardProps} />
        <DashboardCard {...props.debtDashboardCardProps} />
      </div>
      <div className={classes.center}>
        <DashboardCircleCard {...props.saifuDashboardCardProps} />
      </div>
    </Paper>
  );
};

export default HomeDashboard;
