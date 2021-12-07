"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
// import { dateStringToDate } from './utils'; There we'd had import
var reader = new CsvFileReader_1.CsvFileReader('ranking.csv');
reader.read();
console.log(reader.data);
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
// enum - enumeration
var MatchResult;
(function (MatchResult) {
    // const MatchResult = {
    MatchResult["HomeWin"] = "H";
    MatchResult["VisitorWin"] = "V";
    MatchResult["Canceled"] = "C";
})(MatchResult || (MatchResult = {}));
var chicagoBullsWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[4] === 'Chicago Bulls' && match[10] === MatchResult.HomeWin) {
        chicagoBullsWins++;
    }
    else if (match[2] === 'Chicago Bulls' &&
        match[10] === MatchResult.VisitorWin) {
        chicagoBullsWins++;
    }
}
console.log("The Chicago Bulls win: " + chicagoBullsWins + " games, this season from nowon.");
