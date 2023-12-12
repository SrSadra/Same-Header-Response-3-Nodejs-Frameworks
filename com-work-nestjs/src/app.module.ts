import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JsonService } from './json/json.service';
import { JsonModule } from './json/json.module';

@Module({
  imports: [JsonModule],
  controllers: [AppController],
  providers: [AppService, JsonService],
})
export class AppModule {}
