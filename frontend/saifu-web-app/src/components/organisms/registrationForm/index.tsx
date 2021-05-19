import React, {useState} from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

import {TextInputField, Button} from '../../atoms';
import {RadioButtons} from '../../molecules';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    },
    input: {
      marginTop: theme.spacing(1),
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

export const RegistrationForm: React.FC = () => {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const [checkPassword, setCheckPassword] = useState('');
  const handleInputCheckPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckPassword(event.target.value);
  };
  const [registrationMode, setRegistrationMode] = useState('createNewHome');
  const handleRegModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationMode((event.target as HTMLInputElement).value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.input}>
        <TextInputField
          fullWidth={true}
          label="E-Mail"
          name="e-mail"
          placeholder="aaa@bbb.com"
          size="medium"
          type="email"
          variant="outlined"
          helperText="登録するe-mailアドレスを入力してください"
        />
      </div>
      <div className={classes.input}>
        <TextInputField
          fullWidth={true}
          label="パスワード"
          name="password"
          placeholder="password"
          size="medium"
          type="password"
          variant="outlined"
          helperText="パスワードを入力してください"
          onChange={handleInputPassword}
        />
      </div>
      <div className={classes.input}>
        <TextInputField
          fullWidth={true}
          label="パスワード（確認）"
          name="passwordCheck"
          placeholder="password"
          size="medium"
          type="password"
          variant="outlined"
          helperText="パスワードを再度入力してください"
          onChange={handleInputCheckPassword}
          error={password !== checkPassword}
        />
      </div>

      <div className={classes.input}>
        <RadioButtons
          name="RegistrationMode"
          value={registrationMode}
          onChange={handleRegModeChange}
          radioProps={[
            {
              value: 'createNewHome',
              label: '新規ホーム作成',
            },
            {
              value: 'joinInHome',
              label: '招待ホームに参加',
            },
          ]}
        />
      </div>
      {}
      <div className={classes.input}>
        <TextInputField
          fullWidth={true}
          label="ホーム名"
          name="homeName"
          placeholder="Home Name"
          size="medium"
          type="text"
          variant="outlined"
          helperText="作成するホーム名を入力してください"
          disabled={registrationMode != 'createNewHome'}
        />
      </div>
      <div className={classes.input}>
        <TextInputField
          fullWidth={true}
          label="招待コード"
          name="inviteCode"
          placeholder="Your Invited Code"
          size="medium"
          type="text"
          variant="outlined"
          helperText="送付された招待コードを入力してください。"
          disabled={registrationMode != 'joinInHome'}
        />
      </div>
      <div className={classes.buttons}>
        <Button
          className={classes.button}
          onClick={() => alert('キャンセル')}
          color="secondary"
          variant="contained">
          キャンセル
        </Button>
        <Button
          className={classes.button}
          onClick={() => alert('登録')}
          color="primary"
          variant="contained">
          登録
        </Button>
      </div>
    </div>
  );
};

export default RegistrationForm;
