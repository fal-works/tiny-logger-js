/**
 * Function that prints any message.
 */
export type PrintFunction = (message?: any, ...optionalParams: any[]) => void;

/**
 * Object that has `write` method which simply outputs any `string`, such as `process.stdout`.
 */
export type ProcessOut = { write: (str: Uint8Array | string) => any };

/**
 * Creates a function that outputs given prefix and then calls any printing function.
 * @param processOut Any `ProcessOut` object such as `process.stdout`.
 * @param print Any printing function such as `console.log`.
 */
export const create = (
  prefix: string,
  processOut: ProcessOut,
  print: PrintFunction
): PrintFunction => (message, ...optionalParams) => {
  processOut.write(prefix);
  print(message, ...optionalParams);
};

/**
 * Creates a function that prints any `string` with a given prefix.
 * @param processOut Any `ProcessOut` object such as `process.stdout`.
 */
export const createSimple = (
  prefix: string,
  processOut: ProcessOut
): PrintFunction => (message: string) => {
  processOut.write(prefix);
  processOut.write(message);
  processOut.write("\n");
};
