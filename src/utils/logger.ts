// Version: 1.2

const RESET = "\x1b[0m";

class Logger {
    constructor() {
        console.log(`${this.logstart("log")}`, RESET, "Logger initialized!");
    }

    types = {
        log:        '\x1b[36m',
        success:    '\x1b[32m',
        error:      '\x1b[31m',
        warn:       '\x1b[33m',
        info:       '\x1b[34m',
        
        // log:        '\x1b[36m\x1b[1m',
        // success:    '\x1b[32m\x1b[1m',
        // error:      '\x1b[31m\x1b[1m',
        // warn:       '\x1b[33m\x1b[1m',
        // info:       '\x1b[34m\x1b[1m',
    };

    currentTime() {
        const date = new Date().toLocaleTimeString();
        return `[${date}]`;
    }

    logstart(type: keyof typeof this.types) {
        return `${this.types[type]}${this.currentTime()} [${type.toUpperCase()}]`;
        // console.groupCollapsed(`%c${DEBUG_PREFIX} ${this.currentTime()} [${type}]`, this.types[type]);
    }

    log(...args: any[]) {
        console.log(`${this.logstart("log")}`, RESET,...args);
    }

    success(...args: any[]) {
        console.log(`${this.logstart("success")}`, RESET,...args);
    }

    error(...args: any[]) {
        console.error(`${this.logstart("error")}`, RESET,...args);
    }

    warn(...args: any[]) {
        console.warn(`${this.logstart("warn")}`, RESET,...args);
    }

    info(...args: any[]) {
        console.info(`${this.logstart("info")}`, RESET,...args);
    }
}

declare global {
    var log: Logger;
}
globalThis.log = new Logger();

export default Logger;