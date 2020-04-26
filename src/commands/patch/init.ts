import {Command, flags} from '@oclif/command'

export default class PatchInit extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {name: 'issueNumber', required: true, description: 'The number of the issue which describes the patch'},
  ]

  async run() {
    const {args} = this.parse(PatchInit)

    const issueNumber = args.issueNumber || 'world'
    this.log(`[TODO] Create patch for issue #${issueNumber}`)
  }
}
