// Contribution limits for different age groups (2023)
const CONTRIBUTION_LIMIT_STANDARD = 3900;
const CONTRIBUTION_LIMIT_CATCH_UP = 1000;
// Age at which catch-up contributions can be made (2023)
const CATCH_UP_AGE = 55;

async function fetchEmployeeData() {
  // TODO hide api key
  const apiKey =
    "patawZWIa4hg1HinJ.260bae64187b68bb9e6de8c081b10a1d2f5b66e750839c84f616e978267ea31d";
  const endpoint =
    "https://api.airtable.com/v0/appekA493GuXz8uDK/tbllLFdZDMfLjAT4N";

  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const records = data.records;
    processEmployeeRecords(records);
  } catch (error) {
    console.error("Error fetching employee data:", error.message);
  }
}

fetchEmployeeData();

function processEmployeeRecords(records) {
  const today = new Date();

  const processedData = records.map((record) => {
    const fields = record.fields;
    const employeeName = fields["Name"];
    const planType = fields["Plan type"];
    const deductible = fields["Deductible"];
    const birthdate = new Date(fields["Date of birth"]);
    const age = calculateAge(birthdate, today);

    return {
      employeeName,
      planType,
      deductible,
      age,
    };
  });

  prepareAndDisplayData(processedData);
}

function prepareAndDisplayData(processedData) {
  const displayedData = processedData.map((employee) => {
    const deductible = employee.deductible;
    const planType = employee.planType;
    const isHsaEligible = calculateHsaEligibility(deductible, planType);

    const maxContribution = calculateMaxContribution(employee);

    return {
      ...employee,
      isHsaEligible,
      maxContribution,
    };
  });

  createAndDisplayTable(displayedData);
}

function calculateAge(birthdate, currentDate) {
  const birthYear = birthdate.getFullYear();
  const birthMonth = birthdate.getMonth();
  const birthDay = birthdate.getDate();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let age = currentYear - birthYear;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
}

function calculateHsaEligibility(deductible, planType) {
  //   determine the HDHP minimum deductible based on the planType
  // For a "Family" plan, the minimum deductible is set to $2800, while for other plans ("Individual" or "Self-Only"), the minimum deductible is set to $1400
  const hdhpMinimumDeductible = planType === "Family" ? 2800 : 1400;
  // if the employee deductible is greater than the HDHP minimum deductible, the employee is considered eligible for an HSA, and the function returns true
  const isHsaEligible = deductible > hdhpMinimumDeductible;

  return isHsaEligible;
}

function calculateMaxContribution(employee) {
  const contributionLimit = getContributionLimit(employee.age);
  const catchUpContribution = getCatchUpContribution(employee.age);

  // Calculate and return the total max contribution
  return contributionLimit + catchUpContribution;
}

function getContributionLimit(age) {
  return age >= CATCH_UP_AGE
    ? CONTRIBUTION_LIMIT_STANDARD + CONTRIBUTION_LIMIT_CATCH_UP
    : CONTRIBUTION_LIMIT_STANDARD;
}

function getCatchUpContribution(age) {
  return age >= CATCH_UP_AGE ? CONTRIBUTION_LIMIT_CATCH_UP : 0;
}

function createAndDisplayTable(displayedData) {
  const tbody = document.querySelector("tbody");

  displayedData.forEach((employee) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${employee.employeeName}</td>
    <td>${employee.planType}</td>
    <td>${employee.deductible}</td>
    <td>${employee.age}</td>
    <td>${employee.isHsaEligible ? "Yes" : "No"}</td>
    <td>${employee.maxContribution}</td>
  `;

    tbody.appendChild(row);
  });
}
