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
    textDecoration: 'none',
  }),
};
interface Props {
  label: string;
  href: string;
}
const ButtonLink = ({ label, href }: Props) => {
  return (
    <a css={styles.button} href={href}>
      {label}
    </a>
  );
};

export default ButtonLink;
