interface LoggerParams {
  type?: 'log' | 'trace' | 'warn' | 'info' | 'debug';
  inputs?: boolean;
  outputs?: boolean;
}

const defaultParams: Required<LoggerParams> = {
  type: 'debug',
  inputs: true,
  outputs: true,
};

export function Log(params?: LoggerParams) {
  const options: Required<LoggerParams> = {
    type: params?.type || defaultParams.type,
    inputs: params?.inputs === undefined ? defaultParams.inputs : params.inputs,
    outputs: params?.outputs === undefined ? defaultParams.outputs : params.outputs,
  };

  return function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`Enter in method ${propertyKey}`);
    const original = descriptor.value;
    descriptor.value = function (...args: unknown[]) {
      if (options.inputs) {
        console[options.type]('Logged inputs:', args);
      }
      const result = original.apply(this, args);
      if (options.outputs) {
        console[options.type]('Logged outputs:', result);
      }
      console.log('End of method');
      return result;
    };
  };
}
