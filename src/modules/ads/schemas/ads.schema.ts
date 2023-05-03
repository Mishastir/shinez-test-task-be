import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AdsDocument = HydratedDocument<AdsEntity>;

@Schema({ collection: "agg_daily" })
export class AdsEntity {
  @Prop()
  ad_name: string;

  @Prop()
  total_revs: number;

  @Prop()
  total_spend: number;

  @Prop()
  total_profit: number;

  @Prop()
  total_sessions: number;

  @Prop()
  total_paid_clicks: number;

  @Prop()
  total_page_views: number;

  @Prop()
  cpc: number;

  @Prop()
  roas: number;

  @Prop({ isRequired: false })
  image_url?: string;

  @Prop()
  status: string;
}

export const AdsSchema = SchemaFactory.createForClass(AdsEntity);
