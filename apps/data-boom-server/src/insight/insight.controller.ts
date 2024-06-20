import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InsightService } from "./insight.service";
import { InsightControllerBase } from "./base/insight.controller.base";

@swagger.ApiTags("insights")
@common.Controller("insights")
export class InsightController extends InsightControllerBase {
  constructor(protected readonly service: InsightService) {
    super(service);
  }
}
