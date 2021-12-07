import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('ranking.csv');
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
//   if(match[5] === 'Bulls' && match[7] === MatchResult)
// }
