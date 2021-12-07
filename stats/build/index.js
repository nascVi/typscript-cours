"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('ranking.csv');
reader.read();
// const matches = fs
// .readFileSync(basketball.csv, {
//   encoding: 'utf-8'
// })
// .split('\n')
// .map(
//   (row: string): string[] => {
//     return row.split(',');
//   }
// );
// // enum - enumeration
// enum MatchResult {
// HomeWin = 'H',
// AwayWin = 'A',
// Draw = ''
// }
// let BullsWins = 0;
// for(let match of reader.data) {
//   if(matche[1] === 'Bulls' && match[5] === MatchResult)
// }
