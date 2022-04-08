/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class locationInput {
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