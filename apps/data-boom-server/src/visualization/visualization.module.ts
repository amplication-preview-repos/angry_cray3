import { Module } from "@nestjs/common";
import { VisualizationModuleBase } from "./base/visualization.module.base";
import { VisualizationService } from "./visualization.service";
import { VisualizationController } from "./visualization.controller";
import { VisualizationResolver } from "./visualization.resolver";

@Module({
  imports: [VisualizationModuleBase],
  controllers: [VisualizationController],
  providers: [VisualizationService, VisualizationResolver],
  exports: [VisualizationService],
})
export class VisualizationModule {}
