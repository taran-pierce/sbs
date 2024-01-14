import Styles from './alert.module.scss';

function Alert({
  message,
}: {
  message: string,
}) {
  return (
    <>
      <div className={Styles.alertWrapper}>
        <p>{message}</p>
      </div>
    </>
  );
}

export default Alert;
