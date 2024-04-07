import styles from './Signup.module.css';

const Verify = () => {
        
        return (
            <div className={styles.signupcontainer}>
            <div className={styles.signuptitle}>Verify your email</div>
            <div className={styles.verifyhelpertext}>Enter the 8 digit code you have received on</div>
            <div className={styles.verifyhelperemail}>swa***@gmail.com</div>
            <div className={styles.signupformcontainer}>
                <div className={styles.signupformlabel}>Code</div>
                <div className={styles.otpforminputcontainer}>
                <input className={styles.otpforminput} type="text"/>
                <input className={styles.otpforminput} type="text"/>
                <input className={styles.otpforminput} type="text"/>
                <input className={styles.otpforminput} type="text"/>
                <input className={styles.otpforminput} type="text"/>
                <input className={styles.otpforminput} type="text"/>
                <input className={styles.otpforminput} type="text"/>
                <input className={styles.otpforminput} type="text"/>
                </div>


            </div>
           
            <div className={styles.verifybuttoncontainer}>
                <button className={styles.signupbutton}>VERIFY</button>
            </div>
    
        </div>
        )
    
    }

export default Verify