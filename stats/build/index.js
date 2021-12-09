"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
// import { dateStringToDate } from './utils'; There we'd had import
var reader = new CsvFileReader_1.CsvFileReader('ranking.csv');
reader.read();
var dateOffFirstMatch = reader.data[0][0];
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
//
// // enum - enumeration
// enum MatchResult {
//   // const MatchResult = {
//   HomeWin = 'H',
//   VisitorWin = 'V',
//   Canceled = 'C',
// }
var chicagoBullsWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[4] === 'Chicago Bulls' && match[10] === MatchResult_1.MatchResult.HomeWin) {
        chicagoBullsWins++;
    }
    else if (match[2] === 'Chicago Bulls' &&
        match[10] === MatchResult_1.MatchResult.VisitorWin) {
        chicagoBullsWins++;
    }
}
console.log(reader.data);
console.log("The Chicago Bulls win: " + chicagoBullsWins + " games, this season from nowon.");
