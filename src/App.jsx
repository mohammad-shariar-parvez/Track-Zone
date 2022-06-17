import TotalClocks from './component/clocks/TotalClocks';
import SelectionCountry from './component/selection/SelectionCountry';
import useCountryCode from './hooks/useCountryCode';
SelectionCountry;

function App() {
  const { time, countryCodes, handleChange, handleCountryChange } =
    useCountryCode();
  // console.log('From app', countryCodes);

  return (
    <div className=' container text-center'>
      <h1>Track Zone</h1>
      <SelectionCountry handleChange={handleChange} />
      <TotalClocks
        countryCodes={countryCodes}
        handleChange={handleChange}
        handleCountryChange={handleCountryChange}
        time={time}
      />
    </div>
  );
}

export default App;
