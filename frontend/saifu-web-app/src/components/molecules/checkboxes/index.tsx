import React from 'react';
import {FormGroup} from '@material-ui/core';

import {Checkbox, CheckboxProps} from '../../atoms';

export interface CheckboxesProps {
  row?: boolean;
  checkboxProps: CheckboxProps[];
}

const Checkboxes = (props: CheckboxesProps): JSX.Element => {
  const {row = true, checkboxProps} = props;

  return (
    <FormGroup row={row}>
      {checkboxProps.map((item, index) => {
        return <Checkbox key={index} {...item} />;
      })}
    </FormGroup>
  );
};

export default Checkboxes;
