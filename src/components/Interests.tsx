import React, { useState, useEffect, useRef } from 'react';
import styles from './Signup.module.css';
import { api } from '~/utils/api';
import style from './InterestList.module.css';
import { selectInterests, selectUser } from '~/redux/selector/user';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import useInterest from '~/hooks/useInterests';

const Interests = () => {
  const defaultInterests = useSelector(selectInterests);
  const [selectedInterests, setSelectedInterests] =
    useState<string[]>(defaultInterests);
  const [page, setPage] = useState(1);
  const { cachedInterests } = useInterest();
  const interests = cachedInterests;
  const userMutation = api.user.saveUserInterests.useMutation();
  const user = useSelector(selectUser);
  const router = useRouter();

  const startIndex = (page - 1) * 10;
  const endIndex = Math.min(startIndex + 10, interests.length);
  const interestsToShow = interests.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const throttleTime = 1000; // Throttle time in milliseconds (1 second)
  const throttleRef = useRef<NodeJS.Timeout | null>(null);

  const handleInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const updatedSelectedInterests = [...selectedInterests]; // Copy to avoid mutation

    if (checked) {
      updatedSelectedInterests.push(value);
    } else {
      const index = updatedSelectedInterests.indexOf(value);
      if (index !== -1) {
        updatedSelectedInterests.splice(index, 1);
      }
    }

    setSelectedInterests(updatedSelectedInterests);

    // Throttle sending interests to the API
    if (throttleRef.current) {
      clearTimeout(throttleRef.current);
    }

    throttleRef.current = setTimeout(() => {
      // Send updated selectedInterests to the API
      sendInterestsToApi(updatedSelectedInterests);
    }, throttleTime);
  };

  const sendInterestsToApi = (interests: string[]) => {
    // Implement your logic to send the selected interests to the API
    // This could involve using the `api` object or a separate HTTP library
    userMutation.mutate({ email: user, interests });
    console.log('Sending interests to API:', interests); // Example placeholder
  };

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.signupcontainer}>
      <div className={styles.signuptitle}>Please mark your interests</div>
      <div className={styles.signuphelpertext}>My saved interests</div>
      <div className={styles.interestscontainer}>
        {interestsToShow.map((interest, key) => (
          <div key={key} className={styles.interestscheckbox}>
            <input
              className={styles.interestscheck}
              type="checkbox"
              id={interest} // Assuming "interest" property
              name={interest}
              value={interest}
              checked={selectedInterests.includes(interest)}
              onChange={handleInterestChange}
            />
            <label className={styles.interestslabel} htmlFor={interest}>
              {interest}
            </label>
            <br />
          </div>
        ))}
        <div className={style.pagination}>
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            {'<'}
          </button>

          {Array.from(
            { length: Math.ceil(interests.length / 10) },
            (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={index + 1 === page ? style.active : style.inactive}
              >
                {index + 1}
              </button>
            ),
          )}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === Math.ceil(interests.length / 10)}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interests;
