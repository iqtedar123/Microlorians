import { css } from '@emotion/react';
import MicroloriansImage from '../../assets/microlorians.png';

import { useNavigate } from 'react-router-dom';
import Button from '@shared/Button/Button';
import { Breakpoints } from '@shared/utils/breakpoints';

const styles = {
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 100px',
    marginTop: 30,
    justifyContent: 'center',
    gap: 16,
    color: 'white',
    [Breakpoints.sm]: {
      margin: '0 16px',
    },
  }),
  title: css({
    color: 'white',
  }),
  block: css({
    display: 'block',
  }),
  appTitle: css({
    color: 'transparent',
    backgroundClip: 'text',
    backgroundImage: 'linear-gradient(to right, #3b82f6, #06b6d4)',
  }),
  content: css({
    display: 'flex',
    flexDirection: 'row',
    gap: '5em',
    [Breakpoints.sm]: {
      flexDirection: 'column',
    },
  }),
  leftContainer: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
};

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div css={styles.wrapper}>
      <div css={styles.content}>
        <div css={styles.leftContainer}>
          <h1 css={styles.title}>
            Welcome to <span css={styles.appTitle}>Ops-Admin</span>.
            <span css={styles.block}>
              Developed by the <span css={styles.appTitle}>Microlorians</span>!
            </span>
          </h1>
          <h2>
            Each page in this application is an independent microapp part of a
            larger monorepo.
          </h2>
          <Button label={'Login'} onClick={() => navigate('/login')} />
        </div>
        <img src={MicroloriansImage} alt={'Microlorians Logo'} />
      </div>
    </div>
  );
};

export default LandingPage;
