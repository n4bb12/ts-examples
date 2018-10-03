import { titleCase } from "change-case"
import Nehemiah from "nehemiah"
import path from "path"

const n = new Nehemiah()

async function generateExample(tsFilename: string): Promise<string> {
  const code = await n.read(tsFilename).asText()
  const ext = path.extname(tsFilename)
  const name = path.basename(tsFilename, ext)

  return [
    `### ${titleCase(name)}`,
    "",
    "```" + ext.substr(1),
    code!.trim(),
    "```",
  ].join("\n")
}

async function updateReadme(dir: string): Promise<void> {
  const filenames = await n.find(dir + "/*.tsx")
  const examples = await Promise.all(filenames.sort().map(generateExample))
  const readme = [
    `## ${titleCase(path.basename(dir))}`,
    ...examples,
  ].join("\n\n")

  await n.write(dir + "/README.md").asText(readme)
}

(async () => {
  const dirs = await n.find("examples", { onlyDirectories: true })
  await Promise.all(dirs.map(updateReadme))
})()
