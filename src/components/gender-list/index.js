import { useContext, useState } from 'react';
import { GenderContext } from 'context/GenderContext';

import './GenderList.css';

function GenderList() {
  const { genders } = useContext(GenderContext);

  const [activeGender, setActiveGender] = useState('');

  const handleSelect = (gender) => {
    setActiveGender(gender);
  };

  return (
    <section className="gender-container">
      {genders.map((gender) => (
        <div
          className={`gender-item ${
            activeGender?.id === gender.id ? 'is-active' : ''
          }`}
          key={gender.id}
          onClick={() => handleSelect(gender)}
        >
          {gender.name}
        </div>
      ))}
    </section>
  );
}

export default GenderList;
