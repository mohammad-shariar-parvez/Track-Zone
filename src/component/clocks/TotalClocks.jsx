import useCountryCode from '../../hooks/useCountryCode';
import IndivisualClock from './IndivisualClock';
import SelectionCountry from '../selection/SelectionCountry';

import { useEffect, useState } from 'react';

const TotalClocks = ({
  countryCodes,
  time,
  handleChange,
  handleCountryChange,
}) => {
  const count = useCountryCode();
  // console.log('TIME ISSS', time);

  const handleDelete = (item) => {
    const itemIndex = countryCodes.indexOf(item);
    count.setCountryCodes(countryCodes.splice(itemIndex, 1));
  };

  return (
    <div>
      <h2 className='my-3 text-info'>Your Local time is {time}</h2>
      <p>Change your Location</p>
      {/* <SelectionCountry handleChange={handleChange} /> */}
      <div>
        <select name='Select Country' onChange={(e) => handleCountryChange(e)}>
          <option value=''>Select</option>
          <option value='Asia/Dhaka +6 Bangladesh'>Bangladesh</option>
          <option value='Asia/Kolkata +5.30 India'>India</option>
          <option value='Asia/Karachi +5 Pakisthan'>Pakisthan</option>
          <option value='America/Barbados -4.25 Barbados'>Barbados</option>
          <option value='Asia/Kabul +4.30 Afganisthan'>Afganisthan</option>
          <option value='Australia/Adelaide +9.30 Australia'>Australia</option>
          <option value='Europe/Brussels +2 Brussels'>Brussels</option>
          <option value='America/Araguaina -3 Brazil'>Brazil</option>
          <option value='Asia/Shanghai +8 Barbados'>China</option>
          <option value='America/Bogota -5 Colombia'>Colombia</option>
          <option value='Asia/Nicosia +3 Cyprus'>Cyprus</option>
          <option value='Europe/Copenhagen +2 Denmark'>Denmark</option>
        </select>
      </div>

      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {countryCodes.map((item, index) => {
          return (
            <IndivisualClock
              key={index}
              item={item}
              time={time}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TotalClocks;
//             <IndivisualClock
//               index={index}
//               item={item}
//               handleDelete={handleDelete}
//             />;
