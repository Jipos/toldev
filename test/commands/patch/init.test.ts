import {expect, test} from '@oclif/test'

describe('patch:init', () => {
  test
  .stdout()
  .command(['patch:init', '1234'])
  .it('runs patch:init', ctx => {
    expect(ctx.stdout).to.contain('TODO')
  })
})
