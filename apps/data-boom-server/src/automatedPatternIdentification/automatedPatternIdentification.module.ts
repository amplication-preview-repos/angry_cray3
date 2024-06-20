import { Module } from "@nestjs/common";
import { AutomatedPatternIdentificationModuleBase } from "./base/automatedPatternIdentification.module.base";
import { AutomatedPatternIdentificationService } from "./automatedPatternIdentification.service";
import { AutomatedPatternIdentificationController } from "./automatedPatternIdentification.controller";
import { AutomatedPatternIdentificationResolver } from "./automatedPatternIdentification.resolver";

@Module({
  imports: [AutomatedPatternIdentificationModuleBase],
  controllers: [AutomatedPatternIdentificationController],
  providers: [
    AutomatedPatternIdentificationService,
    AutomatedPatternIdentificationResolver,
  ],
  exports: [AutomatedPatternIdentificationService],
})
export class AutomatedPatternIdentificationModule {}
