import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, CardActionArea} from '@material-ui/core';

import {Heading, Text} from '../../atoms';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      padding: theme.spacing(1),
    },
    cover: {
      width: 120,
      height: 120,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);

export interface SimpleCardProps {
  title: string;
  date: string;
  image: string;
  content: string;
}

const SimpleCard = (props: SimpleCardProps): JSX.Element => {
  const classes = useStyles();
  const {title, date, image, content} = props;
  return (
    <Card>
      <CardActionArea>
        <div className={classes.root}>
          <CardMedia
            className={classes.cover}
            component="img"
            image={image}
            title={title}
          />
          <CardContent className={classes.content}>
            <Heading variant="h6">{title}</Heading>
            <Heading variant="subtitle2">{date}</Heading>
            <Text variant="body2">{content}</Text>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default SimpleCard;
