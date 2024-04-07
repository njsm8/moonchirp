import Link from 'next/link';
import styles from './Signup.module.css'

const Login = () => {
    return (
        <div className={styles.signupcontainer}>
        <div className={styles.signuptitle}>Login</div>
        <div className={styles.loginhelpertitle}>Welcome back to ECOMMERCE</div>
        <div className={styles.loginhelpertext}>The next gen business marketplace</div>
        <div className={styles.signupformcontainer}>
            <div className={styles.signupformlabel}>Email</div>
            <input className={styles.signupforminput} type="email" placeholder="Enter Email"/>
        </div>
        <div className={styles.signupformcontainer}>
            <div className={styles.signupformlabel}>Password</div>
            <input className={styles.signupforminput} type="password" placeholder="Enter Password" />
        </div>
        <div className={styles.verifybuttoncontainer}>
            <button className={styles.signupbutton}>LOGIN</button>
        </div>
        <hr className={styles.horizontal}/>
        <div className={styles.signinindicator}>
            <span>Dont have an Account?   </span>
            <Link href="/signup">
            <span className={styles.signinlink}> SIGN UP</span>
            </Link>
        </div>
        </div>
    );
}

export default Login;