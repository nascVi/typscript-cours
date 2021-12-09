import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
// import { dateStringToDate } from './utils'; There we'd had import

const reader = new CsvFileReader('ranking.csv');
reader.read();
const dateOffFirstMatch = reader.data[0][0];

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

let chicagoBullsWins = 0;

for (let match of reader.data) {
  if (match[4] === 'Chicago Bulls' && match[10] === MatchResult.HomeWin) {
    chicagoBullsWins++;
  } else if (
    match[2] === 'Chicago Bulls' &&
    match[10] === MatchResult.VisitorWin
  ) {
    chicagoBullsWins++;
  }
}

console.log(reader.data);
console.log(
  `The Chicago Bulls win: ${chicagoBullsWins} games, this season from nowon.`
);
