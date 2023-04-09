const inputValidation = (inputName) => {
  const input = document.getElementById(`input-${inputName}`);
  const inputDiv = document.getElementById(`input-${inputName}-div`);
  const errorMsg = document.getElementById(`invalid-${inputName}-error`);
  const currentYear = new Date().getFullYear();
  const isValid = input.checkValidity();

  if (!isValid || (inputName === "year" && input.value > currentYear)) {
    inputDiv.classList.add("error");
    errorMsg.innerHTML = `
    Must be a valid ${inputName}`;

    errorMsg.style.display = "block";

    return;
  }

  inputDiv.classList.remove("error");
  errorMsg.style.display = "none";

  return;
};

const inputEmptyValidation = (inputName) => {
  const input = document.getElementById(`input-${inputName}`);
  const inputDiv = document.getElementById(`input-${inputName}-div`);
  const errorMsg = document.getElementById(`invalid-${inputName}-error`);
  console.log("input.value", input.value);

  if (!input.value) {
    inputDiv.classList.add("error");
    errorMsg.innerHTML = "This field is required";
    errorMsg.style.display = "block";

    return;
  }

  inputDiv.classList.remove("error");
  errorMsg.style.display = "none";

  return;
};

const ageCalculator = (event) => {
  event.preventDefault();

  const inputDay = document.getElementById("input-day");
  const inputMonth = document.getElementById("input-month");
  const inputYear = document.getElementById("input-year");
  const currentYear = new Date().getFullYear();

  inputEmptyValidation("day");
  inputEmptyValidation("month");
  inputEmptyValidation("year");

  if (inputDay.value < 1 || inputDay.value > 31 || !inputDay.value) {
    console.log("day error");
    return;
  }

  if (inputMonth.value - 1 < 0 || inputMonth.value - 1 > 11) {
    console.log("month error");
    return;
  }

  if (inputYear.value > currentYear.value || !inputYear.value) {
    console.log("year error", currentYear);
    return;
  }

  const birthDate = new Date(inputYear.value, inputMonth.value -1, inputDay.value);
  const dateDiff = Date.now() - birthDate.getTime();

  //convert the calculated difference in date format
  const age = new Date(dateDiff);

  const year = age.getUTCFullYear();
  const months = age.getMonth();
  const days = age.getDate();
  const years = Math.abs(year - 1970);

  document.getElementById("result-years").innerHTML = years;
  document.getElementById("result-months").innerHTML = months;
  document.getElementById("result-days").innerHTML = days - 1;
};
