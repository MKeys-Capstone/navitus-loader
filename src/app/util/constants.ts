export type PrepStatus =
  | 'BUILDING_PDF'
  | 'SENDING_TO_PROVIDER'
  | 'READY'
  | 'FAILED';

export enum StepStatus {
  BUILDING_PDF = 'Building PDF',
  SENDING_TO_PROVIDER = 'Sending to Provider',
  READY = 'Ready',
  FAILED = 'Failed',
}

export const PREP_STATUS_VALUES: PrepStatus[] = [
  'BUILDING_PDF',
  'SENDING_TO_PROVIDER',
  'READY',
];
