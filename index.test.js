import { formatMobileNumber } from "./index";

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});
describe("formatMobileNumber", () => {
  it("formats correctly with valid 10 digit phone number", () => {
    expect(formatMobileNumber("1234567890")).toBe("(123) 456-7890");
  });

  it("truncates extra digits", () => {
    expect(formatMobileNumber("1234567890123")).toBe("(123) 456-7890");
  });

  it("handles non-digit", () => {
    expect(formatMobileNumber("123a456b7890c")).toBe("(123) 456-7890");
  });

  it("is called every time the input changes", () => {
    document.body.innerHTML = `<input id="phone" />`;
    const phoneInput = document.querySelector("#phone");

    const mockFormatMobileNumber = jest.fn(formatMobileNumber);
    phoneInput.addEventListener("input", function (event) {
      this.value = mockFormatMobileNumber(this.value);
    });

    phoneInput.value = "123";
    phoneInput.dispatchEvent(new Event("input"));

    phoneInput.value = "123456";
    phoneInput.dispatchEvent(new Event("input"));

    phoneInput.value = "1234567890";
    phoneInput.dispatchEvent(new Event("input"));

    expect(mockFormatMobileNumber).toHaveBeenCalledTimes(3);
  });
});
