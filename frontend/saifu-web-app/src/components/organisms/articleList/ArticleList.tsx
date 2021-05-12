import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

import {Heading, Pagination} from '../../atoms';
import {SimpleCard, SimpleCardProps} from '../../molecules';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    },
    contents: {
      marginTop: theme.spacing(1),
    },
    content: {
      marginTop: theme.spacing(1),
    },
    pagination: {
      marginTop: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

export interface ArticleListProps {
  title: string;
  articles?: SimpleCardProps[];
}

const ArticleList = (props: ArticleListProps): JSX.Element => {
  const classes = useStyles();
  const {title, articles} = props;

  if (articles != undefined && articles.length > 0) {
    return (
      <div className={classes.root}>
        <Heading variant="h4">{title}</Heading>
        <div className={classes.contents}>
          {articles.map((item, index) => {
            return (
              <div key={index} className={classes.content}>
                <SimpleCard
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  content={item.content}
                />
              </div>
            );
          })}
        </div>
        <div className={classes.pagination}>
          <Pagination count={articles.length} color="primary" />
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <Heading variant="h4">{title}</Heading>
        <div className={classes.contents}>No Content.</div>
      </div>
    );
  }
};

export default ArticleList;
