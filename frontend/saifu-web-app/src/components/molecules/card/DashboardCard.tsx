import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, CardActionArea} from '@material-ui/core';

import {Heading} from '../../atoms';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 480,
      padding: theme.spacing(1),
      margin: theme.spacing(1),
    },
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    main_cover: {
      width: 120,
      height: 120,
    },
    sub: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sub_cover: {
      width: 60,
      height: 60,
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(1),
    },
  }),
);

interface SubContentProps {
  title: string;
  content: string;
  leftImg?: string;
  leftImgTitle?: string;
  rightImg?: string;
  rightImgTitle?: string;
}

export interface DashboardCardProps {
  mainTitle: string;
  mainContent: string;
  mainPreviousContent: string;
  leftImg: string;
  leftImgTitle: string;
  rightImg: string;
  rightImgTitle: string;
  subContentProps?: SubContentProps[];
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  mainTitle,
  mainContent,
  mainPreviousContent,
  leftImg,
  leftImgTitle,
  rightImg,
  rightImgTitle,
  subContentProps,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {subContentProps?.map((subContentProp, index) => {
          return (
            <div key={index} className={classes.main}>
              {subContentProp.leftImg !== undefined ? (
                <CardMedia
                  className={classes.sub_cover}
                  component="img"
                  image={leftImg}
                  title={leftImgTitle}
                />
              ) : null}
              <CardContent className={classes.contentContainer}>
                <Heading variant="h5" align="center">
                  {subContentProp.title}
                </Heading>
                <Heading variant="h5" align="center">
                  {subContentProp.content}
                </Heading>
              </CardContent>
              {subContentProp.rightImg !== undefined ? (
                <CardMedia
                  className={classes.sub_cover}
                  component="img"
                  image={rightImg}
                  title={rightImgTitle}
                />
              ) : null}
            </div>
          );
        })}
        <div className={classes.main}>
          <CardMedia
            className={classes.main_cover}
            component="img"
            image={leftImg}
            title={leftImgTitle}
          />
          <CardContent className={classes.contentContainer}>
            <Heading variant="h4" align="center">
              {mainTitle}
            </Heading>
            <Heading variant="h4" align="center">
              {mainContent}
            </Heading>
            <Heading variant="h6" align="center">
              {mainPreviousContent}
            </Heading>
          </CardContent>
          <CardMedia
            className={classes.main_cover}
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
