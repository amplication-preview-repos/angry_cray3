import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnswerService } from "./answer.service";
import { AnswerControllerBase } from "./base/answer.controller.base";

@swagger.ApiTags("answers")
@common.Controller("answers")
export class AnswerController extends AnswerControllerBase {
  constructor(protected readonly service: AnswerService) {
    super(service);
  }
}
