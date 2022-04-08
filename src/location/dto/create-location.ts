/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class LocationType{
    @Field(() => ID)
    id: string;
    @Field()
    readonly title: string;
    @Field()
    readonly district: string;
    @Field()
    readonly sector: string;
    @Field()
    readonly cell: string;
    @Field()
    readonly village: string;
    @Field()
    readonly coordinates: string;
    @Field()
    readonly type: string;
  }