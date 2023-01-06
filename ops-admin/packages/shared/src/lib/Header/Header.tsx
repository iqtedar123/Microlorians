import { css } from '@emotion/react';
import { isSignedIn, logout } from '@shared/firebase/firebase';
import { FaGithub } from 'react-icons/fa';
import { useMemo } from 'react'

const styles = {
  header: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#64748b',
    zIndex: 3000,
    height: 75,
    width: '100%',
    paddingRight: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginBottom: 16,
  }),
  circle: css({
    borderRadius: '50%',
    backgroundColor: '#be94e9',
    width: 50,
    height: 50,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  }),
  github: css({
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
    color: 'black'
  }),
  logo: css({
    display: 'flex',
    alignItems: 'center',
  }),
  logoLink: css({
    textDecoration: 'none'
  }),
  nav: css({
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '-0.01em',
    textTransform: 'capitalize',
    listStyle: 'none',
    display: 'flex',
    gap: 24,
  }),
  inactiveLink: css({
    fontWeight: 500,
    opacity: 0.5,
    color: 'inherit'
  }),
  activeLink: css({
    color: 'black'
  }),
  leftContainer: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  })
};

const getNavItems = (isProd: boolean) => ([
  {
    name: 'Home',
    url: '/',
    key: 'Home',
  },
  {
    name: 'Invoices',
    url: '/invoices',
    key: 'Invoices',
  },
  {
    name: 'Products',
    url: '/products',
    key: 'Products',
  },
  {
    name: 'Angular Demo',
    url: `${window.location.protocol}//${isProd ? 'microlorians-angular.firebaseapp.com' : window.document.location.hostname + ':4200'}`,
    key: 'AngularDemo'
  }
]);

const Header = () => {
  const currentURL = window.location.pathname;
  const isProd = window.location.host.indexOf('microlorians') !== -1;
  const navItems = useMemo(() => getNavItems(isProd), [isProd]);
  return (
    <header css={styles.header}>
      <div css={styles.leftContainer}>
        <a href="/" css={styles.logoLink}>
          <div css={styles.logo}>
            <div css={styles.circle}>M</div>
          </div>
        </a>
        <a href={'https://github.com/iqtedar123/Microlorians'} css={styles.logoLink} >
          <div css={styles.logo}>
            <div css={styles.github}><FaGithub /></div>
          </div>
        </a>
      </div>
      <nav css={styles.nav}>
        {navItems.map(({ name, url, key }) => (
          <li key={key}>
            <a href={url} css={currentURL !== url ? styles.inactiveLink : styles.activeLink}>
              {name}
            </a>
          </li>
        ))}
        {isSignedIn() && (
          <li>
            <a href="" onClick={() => logout()} css={styles.inactiveLink}>
              Logout
            </a>
          </li>
        )}
      </nav>
    </header>
  );
};

export default Header;
