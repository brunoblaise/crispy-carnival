/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LocationType } from './dto/create-location';
import { locationInput } from './inputs/location.input';
import { LocationService } from './location.service';

@Resolver()
export class LocationResolver {
    
  constructor(private readonly locationService:LocationService) {}
  

  @Query(() => LocationType)
  async Location() {
    return this.locationService.findAll();
  }
  @Mutation(() => LocationType)
  async createLocate(@Args('input') input: locationInput) {
    return this.locationService.create(input);
  }
}
