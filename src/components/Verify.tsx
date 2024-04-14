import { useDispatch, useSelector } from 'react-redux';
import styles from './Signup.module.css';
import { selectUser, selectVerified } from '~/redux/selector/user';
import { maskEmail } from '~/utils/user';
import OTPInput from './OtpInput';
import { api } from '~/utils/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { setVerified } from '~/redux/reducer/user';

const Verify = () => {
  const user = useSelector(selectUser);
  const maskedEmail = maskEmail(user);
  const [otp, setOTP] = useState<string>('');
  const mutation = api.user.emailVerified.useMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const verified = useSelector(selectVerified);

  const handleOTPChange = (otp: string) => {
    setOTP(otp);
  };

  const handleSubmit = () => {
    if (otp === '12345678') {
      mutation.mutate({ email: user });
      dispatch(setVerified(true));
    } else {
      alert('Invalid OTP. Please enter 12345678');
    }
  };

  useEffect(() => {
    if (!user) {
      router.push('/signup').catch((err) => console.error(err));
    }
    if (verified) {
      router.push('/interests').catch((err) => console.error(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, verified]);

  return (
    <div className={styles.signupcontainer}>
      <div className={styles.signuptitle}>Verify your email</div>
      <div className={styles.verifyhelpertext}>
        Enter the 8 digit code you have received on
      </div>
      <div className={styles.verifyhelperemail}>{maskedEmail}</div>
      <div className={styles.signupformcontainer}>
        <div className={styles.signupformlabel}>Code</div>
        <div className={styles.otpforminputcontainer}>
          <OTPInput onComplete={handleOTPChange} length={8} />
        </div>
      </div>

      <div className={styles.verifybuttoncontainer}>
        <button className={styles.signupbutton} onClick={handleSubmit}>
          VERIFY
        </button>
      </div>
    </div>
  );
};

export default Verify;
