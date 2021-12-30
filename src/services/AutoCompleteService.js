import COUNTRIES from './countries.json';


/**
 *  Dumb module for faking a rest API call.
 *  It has a setTimout with a random time
 *  for simulating different response times.
 */

// TODO: Need to change this method for getting data from a real API.
export default class AutoCompleteService {
  static getSuggestions(text) {
    return new Promise((resolve) => {
      let countries = COUNTRIES.filter((country) =>
      country.name.toLowerCase().includes(text.toLowerCase())
      );

      setTimeout(() => resolve(countries), Math.random() * 1000);
    });
  }
}
