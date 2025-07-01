// Mock for chalk module (ESM-only in tests)
const createChalkMock = () => {
  const chalk: any = {
    cyan: (str: string) => str,
    gray: (str: string) => str,
    yellow: (str: string) => str,
    green: (str: string) => str,
    red: (str: string) => str,
    white: (str: string) => str,
    blue: (str: string) => str,
    magenta: (str: string) => str,
    dim: (str: string) => str,
    bold: {
      blue: (str: string) => str,
      yellow: (str: string) => str,
      green: (str: string) => str,
      red: (str: string) => str,
      cyan: (str: string) => str,
      gray: (str: string) => str,
      white: (str: string) => str,
      magenta: (str: string) => str,
    },
  };

  // Make properties chainable
  Object.keys(chalk).forEach(key => {
    if (typeof chalk[key] === 'function') {
      Object.keys(chalk).forEach(subKey => {
        if (key !== subKey) {
          chalk[key][subKey] = chalk[subKey];
        }
      });
      // Also add bold property to each color
      chalk[key].bold = chalk.bold;
    }
  });

  return chalk;
};

const chalk = createChalkMock();

// Export for both ESM and CommonJS
export default chalk;
export const cyan = chalk.cyan;
export const gray = chalk.gray;
export const yellow = chalk.yellow;
export const green = chalk.green;
export const red = chalk.red;
export const white = chalk.white;
export const blue = chalk.blue;
export const magenta = chalk.magenta;
export const dim = chalk.dim;
export const bold = chalk.bold;