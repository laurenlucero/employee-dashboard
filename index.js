// import dependencies
const axios = require("axios");

async function fetchEmployeeData() {
  // hide api key
  const apiKey =
    "patawZWIa4hg1HinJ.260bae64187b68bb9e6de8c081b10a1d2f5b66e750839c84f616e978267ea31d";
  const endpoint =
    "https://api.airtable.com/v0/appekA493GuXz8uDK/tbllLFdZDMfLjAT4N";

  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // Data is available in response.data
    // console.log(response.data);
    const records = response.data.records;
    console.log(records);
    processEmployeeRecords(records);
  } catch (error) {
    console.error("Error fetching employee data:", error.message);
  }
}

function processEmployeeRecords(records) {
  const processedData = records.map((record) => {
    const fields = record.fields;
    const employeeName = fields["Name"];
    const planType = fields["Plan type"];
    const deductible = fields["Deductible"];

    return {
      employeeName,
      planType,
      deductible,
    };
  });
//   prepareAndDisplayData(processedData)
}

fetchEmployeeData();
