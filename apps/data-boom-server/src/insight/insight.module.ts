import { Module } from "@nestjs/common";
import { InsightModuleBase } from "./base/insight.module.base";
import { InsightService } from "./insight.service";
import { InsightController } from "./insight.controller";
import { InsightResolver } from "./insight.resolver";

@Module({
  imports: [InsightModuleBase],
  controllers: [InsightController],
  providers: [InsightService, InsightResolver],
  exports: [InsightService],
})
export class InsightModule {}
