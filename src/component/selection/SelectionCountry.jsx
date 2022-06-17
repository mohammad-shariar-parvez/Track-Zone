const SelectionCountry = ({ handleChange }) => {
  return (
    <div>
      <select
        className='form-select w-50 container my-4'
        aria-label='Default select example'
        name='Select Country'
        id=''
        onChange={(e) => handleChange(e)}
      >
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
  );
};

export default SelectionCountry;
