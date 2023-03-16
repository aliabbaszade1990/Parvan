import styles from './other-citizen.module.scss';

/* eslint-disable-next-line */
export interface OtherCitizenProps {}

export function OtherCitizen(props: OtherCitizenProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OtherCitizen!</h1>
    </div>
  );
}

export default OtherCitizen;
