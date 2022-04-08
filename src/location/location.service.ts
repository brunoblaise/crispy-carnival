/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Location } from './schemas/Location.schema';

import { locationInput } from './inputs/location.input';


@Injectable()
export class LocationService {
 
  constructor(@InjectModel('Location') private readonly LocationModel: Model<Location>) {}
  
  async create(createLocationDto: locationInput): Promise<Location> {
    const createdLocation = new this.LocationModel(createLocationDto);
    return createdLocation.save();
  }

  async findAll(): Promise<Location[]> {
    return this.LocationModel.find().exec();
  }
}