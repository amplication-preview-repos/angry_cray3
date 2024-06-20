import { Module } from "@nestjs/common";
import { MachineLearningModelModuleBase } from "./base/machineLearningModel.module.base";
import { MachineLearningModelService } from "./machineLearningModel.service";
import { MachineLearningModelController } from "./machineLearningModel.controller";
import { MachineLearningModelResolver } from "./machineLearningModel.resolver";

@Module({
  imports: [MachineLearningModelModuleBase],
  controllers: [MachineLearningModelController],
  providers: [MachineLearningModelService, MachineLearningModelResolver],
  exports: [MachineLearningModelService],
})
export class MachineLearningModelModule {}
