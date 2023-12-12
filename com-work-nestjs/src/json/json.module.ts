/* eslint-disable prettier/prettier */
import { JsonController } from './json.controller';
import { Module } from '@nestjs/common';
import { JsonService } from './json.service';

@Module({
    controllers : [JsonController],
    providers : [JsonService]
})
export class JsonModule {}
