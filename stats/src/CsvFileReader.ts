import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [
  string,
  string,
  string,
  number,
  string,
  number,
  string,
  string,
  number,
  string,
  MatchResult
];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((row: string[]): MatchData => {
        return [
          row[0],
          row[1],
          row[2],
          parseInt(row[3]),
          row[4],
          parseInt(row[5]),
          row[6],
          row[7],
          parseInt(row[8]),
          row[9],
          row[10] as MatchResult, // V, H, C
        ];
      });
  }
}
