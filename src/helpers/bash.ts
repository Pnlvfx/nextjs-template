type AllowedValue = string | boolean | undefined;

type BashOptions = Record<string, AllowedValue>;

export const parseBashOptions = (options: BashOptions) => {
  let parsedOptions = '';
  for (const [key, value] of Object.entries(options)) {
    if (value === undefined) continue;
    switch (typeof value) {
      case 'boolean': {
        const parsedValue = value ? 'true' : 'false';
        parsedOptions += ` --${key} ${parsedValue}`;
        break;
      }
      case 'string': {
        parsedOptions += ` --${key} ${value}`;
        break;
      }
      default: {
        throw new Error(`Invalid bash option value received at ${key}.`);
      }
    }
  }

  return parsedOptions;
};
