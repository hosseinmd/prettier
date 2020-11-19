"use strict";

function composeOptionsForSnapshot(baseOptions, parsers) {
  const {
    plugins,
    filepath,
    parser,
    errors,
    // Workaround to disable plugin search
    pluginSearchDirs,

    ...snapshotOptions
  } = baseOptions;

  return {
    ...snapshotOptions,
    parsers,
  };
}

module.exports = composeOptionsForSnapshot;
