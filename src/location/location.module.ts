/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationResolver } from './Location.resolver';
import { LocationSchema } from './location.schema';
import { LocationService } from './location.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Location', schema: LocationSchema }])],
  providers: [LocationResolver, LocationService],
})
export class LocationModule {}
