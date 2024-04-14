import { useEffect, useState } from 'react';
import styles from './Toast.module.css';

type ToastProps = {
  message: string;
  duration?: number;
};

const Toast: React.FC<ToastProps> = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div className={`${styles.toast} ${visible ? styles.show : ''}`}>
      <div className={styles.toastMessage}>{message}</div>
    </div>
  );
};

export default Toast;
