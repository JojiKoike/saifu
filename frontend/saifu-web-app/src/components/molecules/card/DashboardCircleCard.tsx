import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, CardActionArea} from '@material-ui/core';

import {Heading} from '../../atoms';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 300,
      height: 300,
      padding: theme.spacing(1),
      borderRadius: '50%',
    },
    cover: {
      width: 70,
      height: 70,
      padding: theme.spacing(1),
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);

export interface DashboardCircleCardProps {
  mainTitle: string;
  mainContent: string;
  previousContent: string;
  topImg: string;
  topImgTitle: string;
  bottomImg: string;
  bottomImgTitle: string;
}

const DashboardCircleCard: React.FC<DashboardCircleCardProps> = ({
  mainTitle,
  mainContent,
  previousContent,
  topImg,
  topImgTitle,
  bottomImg,
  bottomImgTitle,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.contentContainer}>
          <CardMedia
            className={classes.cover}
            component="img"
            image={topImg}
            title={topImgTitle}
          />
          <Heading variant="h4" align="center">
            {mainTitle}
          </Heading>
          <Heading variant="h4" align="center">
            {mainContent}
          </Heading>
          <Heading variant="h6" align="center">
            {previousContent}
          </Heading>
          <CardMedia
            className={classes.cover}
            component="img"
            image={bottomImg}
            title={bottomImgTitle}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DashboardCircleCard;
