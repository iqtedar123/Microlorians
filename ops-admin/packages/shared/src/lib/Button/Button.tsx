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
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4
  }),
};
interface Props {
  label: string;
  onClick: () => void;
  Icon?: () => React.ReactElement;
}
const Button = ({ label, onClick, Icon }: Props) => {
  return (
    <button css={styles.button} onClick={onClick}>
      {Icon && Icon()}
      {label}
    </button>
  );
};

export default Button;
