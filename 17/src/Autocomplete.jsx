import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
export default function Autocomplete() {
  const [term, setTerm] = React.useState('');
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    if (term.trim() === '') {
      setCountries([]);
      return;
    }

    const fetchCountries = async () => {
      try {
        const res = await axios.get('/countries', { params: { term } });
        setCountries(res.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, [term]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Country"
          value={term}
          onChange={handleChange}
        />
      </form>
      {countries.length > 0 && (
        <ul>
          {countries.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
// END
