type SafeToString = string | number | object | boolean

interface Options {
  separator: SafeToString
  finalWord: SafeToString | boolean
}

declare function listify(list: SafeToString[], options?: Options): string;

export = listify
