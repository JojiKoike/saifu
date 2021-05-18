import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

import {TextInputField, Button} from '../../atoms';
import {Checkboxes} from '../../molecules';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    },
    email: {
      marginTop: theme.spacing(1),
    },
    password: {
      marginTop: theme.spacing(2),
    },
    setting: {
      marginTop: theme.spacing(2),
    },
    buttons: {
      marginTop: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  }),
);

export interface LoginFormProps {
  onClickCancel?: () => void;
  onClickLogin?: () => void;
}

export const LoginForm = (props: LoginFormProps): JSX.Element => {
  const classes = useStyles();
  const {onClickCancel, onClickLogin} = props;

  return (
    <div className={classes.root}>
      <div className={classes.email}>
        <TextInputField
          fullWidth={true}
          label="E-Mail"
          name="e-mail"
          placeholder="aaa@bbb.com"
          size="medium"
          type="email"
          variant="outlined"
          helperText="登録したe-mailアドレスを入力してください"
        />
      </div>
      <div className={classes.password}>
        <TextInputField
          fullWidth={true}
          label="Password"
          name="password"
          placeholder="password"
          size="medium"
          type="password"
          variant="outlined"
        />
      </div>
      <div className={classes.setting}>
        <Checkboxes
          checkboxProps={[
            {
              label: 'E-Mailアドレスを記憶する',
              name: 'rememberEmail',
              color: 'primary',
            },
          ]}
        />
      </div>
      <div className={classes.buttons}>
        <Button
          className={classes.button}
          onClick={onClickCancel}
          color="secondary"
          variant="contained">
          キャンセル
        </Button>
        <Button
          className={classes.button}
          onClick={onClickLogin}
          color="primary"
          variant="contained">
          ログイン
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
