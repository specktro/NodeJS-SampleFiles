import {buildLogger, logger as winstonLogger } from "../../src/plugins/logger.plugin"

describe('logger.plugin', () => {
    test('buildLogger should return a function logger', () => {
        const logger = buildLogger('test')

        expect(typeof logger.log).toBe("function")
        expect(typeof logger.error).toBe('function')
    })

    test('buildLogger.log should log a message', () => {
        // GIVEN
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log')
        const message = 'test message'
        const service = 'test service'

        // WHEN
        const logger = buildLogger(service)
        logger.log(message)

        // THEN
        expect(winstonLoggerMock).toHaveBeenCalledWith('info', expect.objectContaining({
            level: 'info',
            message,
            service
        }))
    })
});