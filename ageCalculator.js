const ageCalculator = (event) => {
  event.preventDefault();

  const inputDay = document.getElementById("input-day").value;
  const inputMonth = document.getElementById("input-month").value - 1;
  const inputYear = document.getElementById("input-year").value;
  const currentYear = new Date().getFullYear();

  if (inputDay < 1 || inputDay > 31 || !inputDay) {
    console.log("day error");
    return;
  }

  if (inputMonth < 0 || inputMonth > 11) {
    console.log("month error");
    return;
  }

  if (inputYear > currentYear || !inputYear) {
    console.log("year error", currentYear);
    return;
  }

  const birthDate = new Date(inputYear, inputMonth, inputDay);
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

const inputValidation = (inputName) => {
  const input = document.getElementById(`input-${inputName}`);
  const inputDiv = document.getElementById(`input-${inputName}-div`);
  const errorMsg = document.getElementById(`invalid-${inputName}-error`);
  const currentYear = new Date().getFullYear();
  const isValid = input.checkValidity();

  if (!isValid || (inputName === "year" && input.value > currentYear)) {
    console.log("WRONG");

    inputDiv.classList.add("error");
    errorMsg.style.display = "block";

    return;
  }

  inputDiv.classList.remove("error");
  errorMsg.style.display = "none";

  return;
};
