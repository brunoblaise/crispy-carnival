/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema({
  title: String,
  district: String,
  cell: String,
  village: String,
  coordinates: String,
  type: String,
});