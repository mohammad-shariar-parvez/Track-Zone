import { useEffect, useState } from 'react';
let defaultCountryCode = new Date().toLocaleTimeString({ timeStyle: 'long' });
let defaultCountryCode2 = "";

const useCountryCode = () => {
	const [countryCodes, setCountryCodes] = useState([]);
	const [time, setTime] = useState('');

	const handleChange = (e) => {

		if (e.target.value == "") {
			// setCountryCodes(countryCodes);
			// console.log("EMPTY KI ", countryCodes);
			return;

		}
		if (countryCodes.includes(e.target.value)) {

			setCountryCodes(countryCodes);
		} else {
			setCountryCodes([...countryCodes, e.target.value]);
		}

	};

	const handleCountryChange = (e) => {
		if (e.target.value != "") {
			defaultCountryCode2 = e.target.value.split(" ")[0];
			setTime(new Date().toLocaleTimeString('en-US', { timeZone: (e.target.value.split(" ")[0]), timeStyle: 'long' }));

		}

	};
	useEffect(() => {

		setInterval(() => {

			// new Date().toLocaleTimeString('en-US', { timeZone: "", timeStyle: 'long' });

			if (defaultCountryCode2 == "") {
				setTime(new Date().toLocaleTimeString('en-US', { timeStyle: 'long' }));
			}
			else {
				setTime(new Date().toLocaleTimeString('en-US', { timeZone: defaultCountryCode2, timeStyle: 'long' }));
			}
			return () => {
				console.log('Component Unmounted');
				clearInterval(interval);
			};
		}, 1000);
	}, []);
	return {
		time,
		setTime,
		countryCodes,
		setCountryCodes,
		handleChange,
		handleCountryChange
	};
};

export default useCountryCode;