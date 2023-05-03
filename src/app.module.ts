import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { validationSchema } from "./config";
import { AdsModule } from "./modules/ads";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema
    }),
    MongooseModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        uri: config.get("DB_URL")
      }),
      inject: [ConfigService]
    }),
    AdsModule
  ]
})
export class AppModule {}
