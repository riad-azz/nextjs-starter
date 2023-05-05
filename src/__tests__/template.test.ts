describe("jest-test", () => {
  it("should pass the test with no problem", async () => {
    const itsWorking = true;
    expect(itsWorking).toBe(true);
  });
});

describe("env-test", () => {
  it("should have a NAME variable", () => {
    expect(process.env.NAME).toBeDefined();
  });

  it("should have a NAME equal to NEXTJS-TEMPLATE", () => {
    expect(process.env.NAME).toBe("NEXTJS-TEMPLATE");
  });
});
