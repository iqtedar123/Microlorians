import { css } from '@emotion/react';
import React from 'react';

const styles = {
  wrapper: css({
    color: 'rgb(148, 163, 184)',
    borderColor: '#5090D3',
    backgroundColor: 'rgb(51, 65, 85)',
    input: {
      backgroundColor: 'rgb(51, 65, 85)',
      border: 'none',
      ':focus': {
        outline: 'none',
      },
    },
  }),
  input: css({
    color: '#5090D3',
    borderColor: '#5090D3',
  }),
};

interface Props {
  label: string;
  type: string;
}

const Input = ({ type, label }: Props) => {
  return (
    <fieldset css={styles.wrapper}>
      <legend>{label}</legend>
      <input css={styles.input} type={type}></input>
    </fieldset>
  );
};

export default Input;
