// import dependencies
const axios = require('axios');

async function fetchEmployeeData() {
  const apiKey = 'patawZWIa4hg1HinJ.260bae64187b68bb9e6de8c081b10a1d2f5b66e750839c84f616e978267ea31d';
  const endpoint = 'https://api.airtable.com/v0/appekA493GuXz8uDK/tbllLFdZDMfLjAT4N';

  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });

    // Data is available in response.data
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching employee data:', error.message);
  }
}

fetchEmployeeData();
