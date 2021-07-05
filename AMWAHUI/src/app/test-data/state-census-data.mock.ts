import { StateCensusData } from '../services/state-census-data.service';

// id: number;
// stateFipsCode: string;
// stateName: string;
// postalCode: string;
// numberOfCounties: number;
// census2010POP: number;
// populationEstimate2019: number;
// domesticMigration2010: number;
// domesticMigration2019: number;
// internationalMigration2010: number;
// internationalMigration2019: number;
// landAreaSqMi: number;
// fillColor: string;

export const stateCensusDataIowa: StateCensusData = {
  id: 805,
  stateFipsCode: '19',
  stateName: 'Iowa',
  postalCode: 'IA',
  numberOfCounties: 99,
  census2010POP: 3046355,
  populationEstimate2019: 3155070,
  domesticMigration2010: -545,
  domesticMigration2019: -5011,
  internationalMigration2010: 1448,
  internationalMigration2019: 2663,
  landAreaSqMi: 56275.54,
  fillColor: 'lightblue'
};

export const stateCensusDataKansas: StateCensusData = {
  id: 905,
  stateFipsCode: '20',
  stateName: 'Kansas',
  postalCode: 'KS',
  numberOfCounties: 105,
  census2010POP: 2853118,
  populationEstimate2019: 2913314,
  domesticMigration2010: 219,
  domesticMigration2019: -12357,
  internationalMigration2010: 919,
  internationalMigration2019: 4104,
  landAreaSqMi: 82282.00,
  fillColor: 'lightblue'
};

export const stateCensusDataKentucky: StateCensusData = {
  id: 1011,
  stateFipsCode: '21',
  stateName: 'Kentucky',
  postalCode: 'KY',
  numberOfCounties: 120,
  census2010POP: 4339367,
  populationEstimate2019: 4467673,
  domesticMigration2010: 4041,
  domesticMigration2019: -1541,
  internationalMigration2010: 1510,
  internationalMigration2019: 765,
  landAreaSqMi: 40411.24,
  fillColor: 'lightblue'
};

export const stateCensusDataLouisiana: StateCensusData = {
  id: 1132,
  stateFipsCode: '22',
  stateName: 'Louisiana',
  postalCode: 'LA',
  numberOfCounties: 64,
  census2010POP: 4533372,
  populationEstimate2019: 4648794,
  domesticMigration2010: 4107,
  domesticMigration2019: -26045,
  internationalMigration2010: 1201,
  internationalMigration2019: 3040,
  landAreaSqMi: 51843.47,
  fillColor: 'lightblue'
};

export const mockStateCensusDatata: StateCensusData[] = [stateCensusDataIowa; stateCensusDataKansas; stateCensusDataLouisiana; stateCensusDataKentucky];
