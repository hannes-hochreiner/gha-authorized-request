import * as core from '@actions/core';

describe("index", () => {
  it("should import core correctly", () => {
    expect(typeof core).not.toEqual('undefined');
    expect(typeof core.getInput).toEqual('function');
  });
});
