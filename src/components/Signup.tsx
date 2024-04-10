import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Signup.module.css';
import { useEffect, useState } from 'react';
import { api } from '~/utils/api';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mutation = api.user.signup.useMutation();
  const router = useRouter();

  useEffect(() => {
    if (mutation.isSuccess) {
      alert('Account created successfully');
      router.push('/verify').catch((e) => {
        console.error('Failed to navigate', e);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutation.isSuccess]);

  const handleSignup = async () => {
    mutation.mutate({ name, email, password });

    if (mutation.isError) {
      alert('Error creating account');
    }
  };

  return (
    <div className={styles.signupcontainer}>
      <div className={styles.signuptitle}>Create your account</div>
      <div className={styles.signupformcontainer}>
        <div className={styles.signupformlabel}>Name</div>
        <input
          className={styles.signupforminput}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.signupformcontainer}>
        <div className={styles.signupformlabel}>Email</div>
        <input
          className={styles.signupforminput}
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
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
      <div className={styles.signupbuttoncontainer}>
        <button
          disabled={mutation.isPending}
          className={styles.signupbutton}
          onClick={handleSignup}
        >
          CREATE ACCOUNT
        </button>
      </div>
      <div className={styles.signinindicator}>
        <span>Have an Account? </span>
        <Link href="/login">
          <span className={styles.signinlink}> LOGIN</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
