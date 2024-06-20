import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AutomatedPatternIdentificationService } from "./automatedPatternIdentification.service";
import { AutomatedPatternIdentificationControllerBase } from "./base/automatedPatternIdentification.controller.base";

@swagger.ApiTags("automatedPatternIdentifications")
@common.Controller("automatedPatternIdentifications")
export class AutomatedPatternIdentificationController extends AutomatedPatternIdentificationControllerBase {
  constructor(
    protected readonly service: AutomatedPatternIdentificationService
  ) {
    super(service);
  }
}
