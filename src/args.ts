import yargs from "yargs";

const argv = yargs
  .option("ci", {
    description: "Indicate that the script is running on a CI environment",
    type: "boolean",
  })
  .parseSync();

// test

export const gitCommand = (): string => {
  if (argv.ci) {
    return "git diff --name-only HEAD...base";
  } else {
    return "git diff --name-only --cached";
  }
};
