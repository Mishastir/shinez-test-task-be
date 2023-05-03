import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as process from "process";
import { GetAllAdsQuery, UpdateAdsDto } from "../dto";
import { AdsDocument, AdsEntity } from "../schemas";

@Injectable()
export class AdsService {
  constructor(
    @InjectModel(AdsEntity.name)
    private readonly adsModel: Model<AdsEntity>
  ) {}

  async getAll(query: GetAllAdsQuery): Promise<any> {
    return await this.adsModel.find<AdsDocument>(query);
  }

  async update(id: string, data: UpdateAdsDto): Promise<any> {
    const recordToUpdate = await this.adsModel.findById(id);

    if (!recordToUpdate) {
      throw new NotFoundException("No such ads");
    }

    await this.adsModel.updateOne({ _id: id }, data);

    return this.adsModel.findOne({ _id: id });
  }
}
