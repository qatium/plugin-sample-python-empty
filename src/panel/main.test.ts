import "./main"
import fs from 'fs'

describe("ui", () => {
  const domParser = new DOMParser()
  const html = fs.readFileSync("src/panel/index.html", "utf8")

  beforeEach(() => {
    window.document.body = domParser.parseFromString(html, "text/html").body
  })
})