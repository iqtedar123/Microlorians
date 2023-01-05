import { css } from '@emotion/react';
import { isSignedIn, logout } from '@shared/firebase/firebase';

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
  logo: css({
    display: 'flex',
    alignItems: 'center',
  }),
  logoLink: css({}),
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
  }),
};

const navItems = [
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
    url: `${window.location.protocol}//${window.document.location.hostname}:4200`,
    key: 'AngularDemo'
  }
];

const Header = () => {
  const currentURL = window.location.pathname;
  return (
    <header css={styles.header}>
      <a css={styles.logoLink} href="/">
        <div css={styles.logo}>
          <div css={styles.circle}>H</div>
        </div>
      </a>
      <nav css={styles.nav}>
        {navItems.map(({ name, url, key }) => (
          <li key={key}>
            <a href={url} css={currentURL !== url ? styles.inactiveLink : ''}>
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
