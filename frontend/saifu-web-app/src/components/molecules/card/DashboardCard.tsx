import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, CardActionArea} from '@material-ui/core';

import {Heading} from '../../atoms';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 'fit-content',
    },
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(1),
    },
    cover: {
      width: 120,
      height: 120,
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  }),
);

export interface DashboardCardProps {
  title: string;
  content: string;
  leftImg?: string;
  leftImgTitle?: string;
  rightImg?: string;
  rightImgTitle?: string;
  subContent?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  content,
  leftImg,
  leftImgTitle,
  rightImg,
  rightImgTitle,
  subContent,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div className={classes.main}>
          <CardMedia
            className={classes.cover}
            component="img"
            image={leftImg}
            title={leftImgTitle}
          />
          <CardContent className={classes.contentContainer}>
            <Heading variant="h4" align="center">
              {title}
            </Heading>
            <Heading variant="h4" align="center">
              {content}
            </Heading>
            <Heading variant="h6" align="center">
              {subContent}
            </Heading>
          </CardContent>
          <CardMedia
            className={classes.cover}
            component="img"
            image={rightImg}
            title={rightImgTitle}
          />
        </div>
      </CardActionArea>
    </Card>
  );
};

export default DashboardCard;
