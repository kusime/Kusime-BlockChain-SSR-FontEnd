import pkg from 'file-saver'
export function dumpString(string: string, filename: string) {
  const { saveAs } = pkg
  saveAs(new Blob([string], { type: 'text/plain' }), filename)
}
