import Link from 'next/link';
import styles from './Signup.module.css';

const Signup = () => {
    
    return (
        <div className={styles.signupcontainer}>
        <div className={styles.signuptitle}>Create your account</div>
        <div className={styles.signupformcontainer}>
            <div className={styles.signupformlabel}>Name</div>
            <input className={styles.signupforminput} type="text" placeholder="Enter Name"/>
        </div>
        <div className={styles.signupformcontainer}>
            <div className={styles.signupformlabel} >Email</div>
            <input className={styles.signupforminput} type="email" placeholder="Enter Email" />
        </div>
        <div className={styles.signupformcontainer}>
            <div className={styles.signupformlabel}>Password</div>
            <input className={styles.signupforminput} type="password" placeholder="Enter Password" />
        </div>
        <div className={styles.signupbuttoncontainer}>
            <button className={styles.signupbutton}>CREATE ACCOUNT</button>
        </div>

        <div className={styles.signinindicator}>
            <span>Have an Account?   </span>
            <Link href="/login">
            <span className={styles.signinlink}> LOGIN</span>
            </Link>
        </div>
     </div>
    )

}

export default Signup