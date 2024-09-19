import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
}));

const useCountries = () => {
  const getAll = () => {
    return formattedCountries;
  };

  const getByValue = (value: string) => {
    formattedCountries.find((country) => country.value === value);
  };

  return { getAll, getByValue };
};

export default useCountries;
