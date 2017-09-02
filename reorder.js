const MATCH_FILES = "_posts/*.md";
const START_DATE = new Date("2000-01-01T23:00:00.001Z");
const DATE_MONTHS_INTERVAL = 1;

const fs = require("fs");
const matter = require("gray-matter");
const glob = require("glob");
const { promisify } = require("util");

// promisify some fs functions
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const readdirAsync = promisify(fs.readdir);
const globAsync = promisify(glob);

/**
 * Reads a markdown file from the provided path and parses the front matter.
 * @param {String} path 
 */
async function readAndParseFile(path) {
    let data = await readFileAsync(path, "utf8")
    return matter(data);
}
/**
 * Writes modified files back to disk;
 * @param {Object} parsedFile 
 */
async function writeFile(parsedFile) {
    await writeFileAsync(parsedFile.originalFilename, matter.stringify(parsedFile.content, parsedFile.data));
}

/**
 * Formats the date to YYYY-MM-DD
 * @param {Date} date 
 */
function formatDate(date) {
    return date.toISOString().slice(0, 10); // this is good code
}

/**
 * Reads, reorders and writes all files matched by MATCH_FILES.
 */
async function reorderFiles() {
    let filenames = await globAsync(MATCH_FILES); // match all filenames
    let parsedFiles = await Promise.all(filenames.map(readAndParseFile)); // read all files in paralell

    parsedFiles.forEach((f, i) => {
        f.originalFilename = filenames[i];
    });

    parsedFiles.sort((a, b) => a.data.date - b.data.date); // sort all files by date

    let nextDate = new Date(START_DATE.getTime());
    
    parsedFiles.forEach(parsedFile => {
        parsedFile.data.date = formatDate(new Date(nextDate.getTime())); // copy next date and assign it
        nextDate.setMonth(nextDate.getMonth() + DATE_MONTHS_INTERVAL);
    });


    parsedFiles.forEach(writeFile);
}

reorderFiles().catch(console.error);
