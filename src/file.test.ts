import '@pefish/js-node-assist'
import assert from 'assert'
import FileUtil from './file'

describe('fileUtil', () => {
  // it('readSync', async () => {
  //   try {
  //     const result = await FileUtil.readSync('/Users/joy/Work/backend/js-common/tests/fixtures/sequelizeHelper.sql')
  //     // logger.error(result.toString())
  //     assert.strictEqual(result instanceof Buffer, true)
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

  // it('remove', async () => {
  //   try {
  //     FileUtil.remove('test.js')
  //     // assert.strictEqual(result instanceof Buffer, true)
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

  it('loadFromJsonFile', async () => {
    try {
      const result = FileUtil.loadFromJsonFile('tests/1.txt')
      global.logger.info(result)
      // assert.strictEqual(result instanceof Buffer, true)
    } catch (err) {
      global.logger.error(err)
      assert.throws(() => {}, err)
    }
  })

  // it('getAbsolutePath', async () => {
  //   try {
  //     const result = FileUtil.getAbsolutePath('FileUtil.js')
  //     global.logger.error(result.toString())
  //     // assert.strictEqual(result instanceof Buffer, true)
  //   } catch (err) {
  //     global.logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
  //
  // it('getAbsolutePathOfModule', async () => {
  //   try {
  //     const result = FileUtil.getAbsolutePathOfModule('amqplib')
  //     global.logger.error(result.toString())
  //     // assert.strictEqual(result instanceof Buffer, true)
  //   } catch (err) {
  //     global.logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
})
