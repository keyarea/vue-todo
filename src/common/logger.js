import debug from 'debug';

const APP_NAME = 'app';
// debug.enabled = true;
export class Logger {
  debugInfo;
  errorInfo;
  warnInfo;
  constructor(prefix) {
    if (prefix) {
      this.debugInfo = debug(`${APP_NAME}:${prefix}`);
      this.warnInfo = debug(`${APP_NAME}:WARN:${prefix}`);
      this.errorInfo = debug(`${APP_NAME}:ERROR:${prefix}`);
    } else {
      this.debugInfo = debug(APP_NAME);
      this.warnInfo = debug(`${APP_NAME}:WARN`);
      this.errorInfo = debug(`${APP_NAME}:ERROR`);
    }

    /* eslint-disable no-console */
    // tslint:disable-next-line:no-console
    this.debugInfo.log = console.log.bind(console);
    this.warnInfo.log = console.warn.bind(console);
    this.errorInfo.log = console.error.bind(console);
    /* eslint-enable no-console */
  }

  get debug() {
    return this.debugInfo;
  }

  get warn() {
    return this.warnInfo;
  }

  get error() {
    return this.errorInfo;
  }
}