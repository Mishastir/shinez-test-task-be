import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AdsController } from "./controllers";
import { AdsEntity, AdsSchema } from "./schemas";
import { AdsService } from "./services";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AdsEntity.name, schema: AdsSchema }])
  ],
  controllers: [AdsController],
  providers: [AdsService]
})
export class AdsModule {}
