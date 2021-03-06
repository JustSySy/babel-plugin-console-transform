import { match as mm } from 'minimatch';
import { PluginOptions } from './types';
import * as validateOptions from 'schema-utils';

const isMatch = (
  removeMethods: Array<string | Function>,
  methodName: string,
  args: any[],
): boolean => {
  let isRemove = false;
  for (let i = 0; i < removeMethods.length; i++) {
    if (typeof removeMethods[i] === 'function') {
      isRemove = (removeMethods[i] as Function)(args) ? true : isRemove;
    } else if (mm([methodName], removeMethods[i] as string).length > 0) {
      isRemove = true;
    }
  }
  return isRemove;
};

const validateSchema = (schema: object, options: PluginOptions): void => {
  validateOptions(schema, options, {
    name: 'babel-plugin-console-transform',
  });
};

export { isMatch, validateSchema };
