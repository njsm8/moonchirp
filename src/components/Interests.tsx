import styles from './Signup.module.css';
import { api } from '~/utils/api';

const Interests = () => {
  const query = api.interests.getInterests.useQuery();

  return (
    <div className={styles.signupcontainer}>
      <div className={styles.signuptitle}>Please mark your interests</div>
      <div className={styles.signuphelpertext}>My saved interests</div>
      <div className={styles.interestscontainer}>
        {query.data?.interests.map((interest, key) => (
          <div key={key} className={styles.interestscheckbox}>
            <input
              className={styles.interestscheck}
              type="checkbox"
              id={interest}
              name={interest}
              value={interest}
            />
            <label className={styles.interestslabel} htmlFor={interest}>
              {interest}
            </label>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
