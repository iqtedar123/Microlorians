import { css } from '@emotion/react';
import React from 'react';

const styles = {
  button: css({
    borderRadius: 9999,
    height: 50,
    fontSize: 18,
    fontWeight: 600,
    paddingTop: '0.75rem',
    paddingBottom: ' 0.75rem',
    paddingLeft: '1.5rem',
    paddingRight: ' 1.5rem',
    backgroundColor: 'rgb(50, 186, 246)',
    color: 'white',
  }),
};
interface Props {
  label: string;
  onClick: () => void;
}
const Button = ({ label, onClick }: Props) => {
  return (
    <button css={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
