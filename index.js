export const formatMobileNumber = (mobNo) => {
  let mobileNumber = mobNo.replace(/[()-\D]/g, "");

  if (mobileNumber.length > 10) {
    mobileNumber = mobileNumber.substring(0, 10);
  }
  if (mobileNumber.length > 3) {
    mobileNumber = `(${mobileNumber.substring(0, 3)}) ${mobileNumber.substring(
      3
    )}`;
  }

  if (mobileNumber.length > 9) {
    mobileNumber = `${mobileNumber.substring(0, 9)}-${mobileNumber.substring(
      9
    )}`;
  }
  return mobileNumber;
};

window.addEventListener("DOMContentLoaded", (event) => {
  const phoneInput = document.querySelector("#phone");

  if (phoneInput) {
    phoneInput.addEventListener("input", function (event) {
      this.value = formatMobileNumber(this.value);
    });
  }
});
