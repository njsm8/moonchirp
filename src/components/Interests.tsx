import styles from './Signup.module.css';

const Interests = () => {
    return (
     <div className={styles.signupcontainer}>
        <div className={styles.signuptitle}>Please mark your interests</div>
        <div className={styles.signuphelpertext}>My saved interests</div>
        <div className={styles.interestscontainer}>
            <div className={styles.interestscheckbox}>
            <input className={styles.interestscheck} type="checkbox" id="coding" name="coding" value="coding"/>
            <label className={styles.interestslabel}  htmlFor="coding"> Coding</label><br/>
            </div>
            <div className={styles.interestscheckbox}>
            <input className={styles.interestscheck} type="checkbox" id="reading" name="reading" value="reading"/>
            <label className={styles.interestslabel}  htmlFor="reading"> Reading</label><br/>
            </div>
            <div className={styles.interestscheckbox}>
            <input className={styles.interestscheck} checked type="checkbox" id="gaming" name="gaming" value="gaming"/>
            <label className={styles.interestslabel}  htmlFor="gaming"> Gaming</label><br/>
            </div>
            <div className={styles.interestscheckbox}>
            <input className={styles.interestscheck} type="checkbox" id="sports" name="sports" value="sports"/>
            <label className={styles.interestslabel}  htmlFor="sports"> Sports</label><br/>
            </div>
            <div className={styles.interestscheckbox}>
            <input className={styles.interestscheck} type="checkbox" id="movies" name="movies" value="movies"/>
            <label className={styles.interestslabel}  htmlFor="movies"> Movies</label><br/>
            </div>
        </div>
    </div>
    );
}
    
export default Interests