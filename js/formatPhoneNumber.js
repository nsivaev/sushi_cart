function formatPhoneNumber(input) {
  const phoneNumber = input.value.replace(/\D/g, "");
  input.value = phoneNumber;
}
