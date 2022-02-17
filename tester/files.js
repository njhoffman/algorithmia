// const { watchFile } = require('fs');
const fs = require('fs')
const os = require('os');
const path = require('path')
const _ = require('lodash')
const glob = require('glob')
const logger = require('./logger')

const cleanFiles = (config) => {
  if (config.cleanFiles) {
    const tmpDirs = fs.readdirSync(`${os.tmpdir()}`)
    _.each(tmpDirs, tmpDir => {
      if (tmpDir.indexOf(`${config.dirPrefix}`) === 0) {
        const deleteDir = path.join(os.tmpdir(), tmpDir)
        logger.debug(`Deleting: ${deleteDir}`)
        fs.rmSync(deleteDir, { recursive: true })
      }
    })
  }
}

const commentProblem = (text, language) => {
  if (language === 'js') {
    return `/*\n${text}*/\n`
  }
  return text;
}

const copyProblem = (srcDir, destDir, language) => {
  logger.debug(`Creating: ${destDir}`)
  fs.mkdirSync(destDir);

  const dirFiles = fs.readdirSync(srcDir)
  let problemText = ""
  _.each(dirFiles, file => {
    if (file === 'problem.txt') {
      problemText = fs.readFileSync(path.join(srcDir, file));
    }
    logger.debug(`Copying: ${file} to ${destDir}/${file}`)
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file))
  })

  if (problemText == "") {
    throw new Error('No "problem.txt" file found')
  }

  const problemFile = `${destDir}/problem.${language}`
  problemText = commentProblem(problemText, language)
  logger.debug(`Writing: ${problemText.length} bytes to : ${problemFile}`)
  fs.writeFileSync(problemFile, problemText);
}

const initFiles = (config, language, { items, name }) => {
  cleanFiles(config)

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), config.dirPrefix))
  logger.log(`Initializing "${name}" files for ${items.length} items in: ${tmpDir}`)

  const outputDirs = []
  _.each(items, (item, i) => {
    const destItem = item.replace('/', '_').replace(/[^A-Za-z_]*/g, '')
    const srcDir = `${config.baseDir}/${item}`
    const destDir = `${tmpDir}/${i}-${destItem}`;
    copyProblem(srcDir, destDir, language)
    outputDirs.push({
      dir: destDir,
      category: destItem.split('_')[0],
      name: destItem.split('_')[1]
    });
  });
  // copy files without answer
  return outputDirs;
}

module.exports = { initFiles };


// watchFile('./temp/A-BubbleSort/problem.js', (curr, prev) => {
//   console.log(curr)
// });
