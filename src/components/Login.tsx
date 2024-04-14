import Link from 'next/link';
import styles from './Signup.module.css';
import { useEffect, useState } from 'react';
import { api } from '~/utils/api';
import { useRouter } from 'next/router';
import Toast from './Toast';
import { useDispatch } from 'react-redux';
import { setInterests, setName, setEmail } from '~/redux/reducer/user';

const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [password, setPassword] = useState('');
  const mutation = api.user.login.useMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (mutation.isSuccess) {
      dispatch(setName(mutation.data.name ?? ''));
      dispatch(setEmail(mutation.data.email ?? ''));
      if (mutation.data.interests) {
        dispatch(setInterests(mutation.data.interests));
      }

      router.push('/interests').catch((e) => {
        console.error('Failed to navigate', e);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutation.isSuccess]);

  const handleLogin = () => {
    mutation.mutate({ email: emailValue, password });
  };

  return (
    <div className={styles.signupcontainer}>
      <div className={styles.signuptitle}>Login</div>
      <div className={styles.loginhelpertitle}>Welcome back to ECOMMERCE</div>
      <div className={styles.loginhelpertext}>
        The next gen business marketplace
      </div>
      <div className={styles.signupformcontainer}>
        <div className={styles.signupformlabel}>Email</div>
        <input
          className={styles.signupforminput}
          type="emailValue"
          placeholder="Enter Email"
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>
      <div className={styles.signupformcontainer}>
        <div className={styles.signupformlabel}>Password</div>
        <input
          className={styles.signupforminput}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.verifybuttoncontainer}>
        <button className={styles.signupbutton} onClick={handleLogin}>
          LOGIN
        </button>
      </div>
      <hr className={styles.horizontal} />
      <div className={styles.signinindicator}>
        <span>Dont have an Account? </span>
        <Link href="/signup">
          <span className={styles.signinlink}> SIGN UP</span>
        </Link>
        {mutation.isSuccess && <Toast message="This is a toast message" />}
        {mutation.isError && <Toast message="Error logging in" />}
      </div>
    </div>
  );
};

export default Login;
