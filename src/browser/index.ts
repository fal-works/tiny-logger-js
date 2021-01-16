/**
 * Function that prints any message.
 */
export type PrintFunction = (message?: any, ...optionalParams: any[]) => void;

/** Creates a function that calls any printing function with a given prefix. */
export const create = (prefix: string, print: PrintFunction): PrintFunction => (
  message,
  optionalParams
) => {
  if (typeof message === "string") {
    print(`${prefix}${message}`, ...optionalParams);
  } else {
    print(prefix, message, ...optionalParams);
  }
};
