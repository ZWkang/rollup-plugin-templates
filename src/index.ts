import { createFilter } from 'rollup-pluginutils';

import { Plugin } from 'rollup';

type Options = {
  exclude?: string | RegExp | (string | RegExp)[];
  include?: string | RegExp | (string | RegExp)[];
};

export default function myPlugin(options: Options = {}): Plugin {
  const filter = createFilter(options.include, options.exclude);
  return {
    name: 'pkg-name',
    load(id) {
      if (!filter(id)) return null;
    },
    transform(code, id) {
      if (!filter(id)) return null;
    },
  };
}
