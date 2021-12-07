import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('ranking.csv');
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
enum MatchResult {
// const MatchResult = {
  HomeWin = 'H',
  VisitorWin = 'V',
  Canceled = 'C'
}

let chicagoBullsWins = 0;

for(let match of reader.data) {
  if(match[4] === 'Chicago Bulls' && match[10] === MatchResult.HomeWin) {
    chicagoBullsWins ++;
  } else if(match[2] === 'Chicago Bulls' && match[10] === MatchResult.VisitorWin) {
    chicagoBullsWins ++;
  }
}

console.log(`The Chicago Bulls win: ${chicagoBullsWins} games, this season from nowon.`);
