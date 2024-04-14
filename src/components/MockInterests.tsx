import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
interface Interest {
  id: string;
  name: string;
}

const PAGE_SIZE = 10; // Number of checkboxes per page

const InterestsList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Generate fake interests data
  const interests: Interest[] = Array.from({ length: 50 }, () => ({
    id: faker.datatype.uuid(),
    name: faker.person.jobType(),
  }));

  // Calculate start and end index for the current page
  const startIndex: number = (currentPage - 1) * PAGE_SIZE;
  const endIndex: number = Math.min(startIndex + PAGE_SIZE, interests.length);

  // Slice the interests array to display only the interests for the current page
  const interestsToShow: Interest[] = interests.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2>Interests</h2>
      {interestsToShow.map((interest) => (
        <div key={interest.id}>
          <input type="checkbox" id={interest.id} />
          <label htmlFor={interest.id}>{interest.name}</label>
        </div>
      ))}
      {/* Pagination */}
      <div>
        {Array.from(
          { length: Math.ceil(interests.length / PAGE_SIZE) },
          (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ),
        )}
      </div>
    </div>
  );
};

export default InterestsList;
