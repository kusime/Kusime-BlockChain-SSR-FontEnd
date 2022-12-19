import { saveAs } from 'file-saver'
export function dumpString(string: string, filename: string) {
  saveAs(new Blob([string], { type: 'text/plain' }), filename)
}
