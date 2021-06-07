import chalk from "chalk"

export const log = (moduleName: string, message: any) => {
  console.log(
    chalk.blue("[LOG] ") +
      chalk.rgb(130, 130, 130)(`[${moduleName}] ` + chalk.greenBright(message))
  );
};

export const warn = (moduleName: string, message: any) => {
  console.log(
    chalk.keyword("orange")("[WARN] ") +
      chalk.rgb(130, 130, 130)(`[${moduleName}] ` + chalk.greenBright(message))
  );
};

export const error = (moduleName: string, message: any) => {
  console.log(
    chalk.redBright("[ERROR] ") +
      chalk.rgb(130, 130, 130)(`[${moduleName}] ` + chalk.greenBright(message))
  );
};

export const success = (moduleName: string, message: any) => {
  console.log(
    chalk.greenBright("[SUCCESS] ") +
      chalk.rgb(130, 130, 130)(`[${moduleName}] ` + chalk.greenBright(message))
  );
};
