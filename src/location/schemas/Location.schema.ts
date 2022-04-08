/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Location extends Document {
  readonly title: string;
  readonly district: string;
  readonly sector: string;
  readonly cell: string;
  readonly village: string;
  readonly coordinates: string;
  readonly type: string;
}