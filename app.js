import xlsx from 'xlsx';
import fs from 'fs';
import dotenv from "dotenv";

dotenv.config();

const folder = process.env.FOLDER;
const file = process.env.FILE;

const workbook = xlsx.readFile(`${folder}/${file}.xlsx`);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 'B' });

fs.writeFileSync("data.json", JSON.stringify(jsonData), (error) => {
    if (error) {
      console.error(error);
    }
});