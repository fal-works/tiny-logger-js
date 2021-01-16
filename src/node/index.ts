/**
 * Function that prints any message.
 */
type PrintFunction = (message?: any, ...optionalParams: any[]) => void;

/**
 * Object that has `write` method which simply outputs any `string`, such as `process.stdout`.
 */
type Out = { write: (str: Uint8Array | string) => any };

/**
 * Creates a function that outputs given prefix and then calls any printing function.
 * @param out Any object with `write()`, such as `process.stdout`.
 * @param print Any printing function such as `console.log`.
 */
export const create = (
  prefix: string,
  out: Out,
  print: PrintFunction
): PrintFunction => (message, ...optionalParams) => {
  out.write(prefix);
  print(message, ...optionalParams);
};

/**
 * Creates a function that prints any `string` with a given prefix.
 * @param out Any object with `write()`, such as `process.stdout`.
 */
export const createSimple = (prefix: string, out: Out): PrintFunction => (
  message: string
) => {
  out.write(prefix);
  out.write(message);
  out.write("\n");
};
