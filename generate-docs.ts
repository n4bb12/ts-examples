import { titleCase } from "change-case"
import Nehemiah from "nehemiah"
import path from "path"

const n = new Nehemiah()

async function generateExample(filename: string): Promise<string> {
  const ts = await n.read(filename).asText()
  const ext = path.extname(filename)
  const name = path.basename(filename, ext)

  return [
    `#### ${titleCase(name)}`,
    "",
    "```" + ext.substr(1),
    ts!.trim(),
    "```",
    "<details>",
    "<summary>See JavaScript equivalent</summary>",

    "</details>",
  ].join("\n")
}

async function updateReadme(dir: string): Promise<void> {
  const filenames = await n.find(dir + "/*.tsx")
  const examples = await Promise.all(filenames.map(generateExample))
  const readme = [
    `## ${titleCase(path.basename(dir))}`,
    ...examples,
  ].join("\n\n")

  await n.write(dir + "/README.md").asText(readme)
}

(async () => {
  const dirs = await n.find("ts", { onlyDirectories: true })
  await Promise.all(dirs.map(updateReadme))
})()
