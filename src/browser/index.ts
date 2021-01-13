/**
 * Function that prints any message.
 */
export type PrintFunction = (...args: any[]) => void;

/** Creates a function that calls any printing function with a given prefix. */
export const create = (prefix: string, print: PrintFunction): PrintFunction => (
  message: any[]
) => {
  const first = message[0];
  if (typeof first === "string") {
    message[0] = `${prefix}${first}`;
    print(...message);
  } else {
    print(prefix, ...message);
  }
};
