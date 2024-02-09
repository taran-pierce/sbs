import Styles from './navigation.module.scss';

const navigationLinks = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/recipes/',
    text: 'Recipes',
  },
];

interface Link {
  text: string,
  path: string,
}

function Navigation({
  includeLogin,
  userInfo,
}: {
  includeLogin: boolean,
  userInfo: any,
}) {
  return (
    <>
      <div className={Styles.navigationWrapper}>
        <div className="container">
          <div className={Styles.logoWrapper}>
            <div>
              <span>Recipe Storage Bin</span>
            </div>
            {userInfo && (
              <div className={Styles.loggedInUser}>
                <span>{userInfo.displayName}</span>,
                <form action="/api/auth/signout" className={Styles.form}>
                  <button type="submit">Sign out</button>
                </form>
              </div>
            )}
            {!userInfo && (
              <div>
                <a href="/signin/">Login</a>
              </div>
            )}
          </div>
          <ul className={Styles.navigation}>
            {navigationLinks.map((link: Link) => (
              <li
                key={link.text}
                className={Styles.navigationListItem}
              >
                <a href={link.path}>{link.text}</a>
              </li>
            ))}
            {includeLogin && !userInfo && (
              <li className={Styles.navigationListItem}>
                <a href="/register/">Sign Up</a>
              </li>
            )}
            {userInfo && (
              <>
                <li className={Styles.navigationListItem}>
                  <a href="/dashboard/">Dashboard</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
