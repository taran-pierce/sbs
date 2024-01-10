import Styles from './navigation.module.scss';

const navigationLinks = [
  {
    path: '/',
    text: 'home',
  },
  {
    path: '/recipes/',
    text: 'Recipes',
  },
];

function Navigation({
  includeLogin,
}: {
  includeLogin: boolean,
}) {
  return (
    <>
      <div className={Styles.navigationWrapper}>
        <div className={Styles.container}>
          <span>SharingItUp</span>
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.text}>
                <a href={link.path}>{link.text}</a>
              </li>
            ))}
            {includeLogin && (
              <li>
                <a href="/signin/">Login</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
