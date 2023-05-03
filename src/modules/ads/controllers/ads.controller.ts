import { Body, Controller, Get, Param, Patch, Query } from "@nestjs/common";
import { ContextCreator } from "@nestjs/core/helpers/context-creator";
import { GetAllAdsQuery, IdParams, UpdateAdsDto } from "../dto";
import { AdsEntity } from "../schemas";
import { AdsService } from "../services";

@Controller("ads")
export class AdsController {
  constructor(
    private readonly adsService: AdsService
  ) {}

  @Get()
  async getAllAds(@Query() query: GetAllAdsQuery): Promise<AdsEntity> {
    return this.adsService.getAll(query);
  }

  @Patch(":id")
  async updateAdd(@Param() params: IdParams, @Body() body: UpdateAdsDto): Promise<any> {
    console.log(params, body);
    return this.adsService.update(params.id, body);
  }
}
