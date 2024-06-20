import * as graphql from "@nestjs/graphql";
import { AnswerResolverBase } from "./base/answer.resolver.base";
import { Answer } from "./base/Answer";
import { AnswerService } from "./answer.service";

@graphql.Resolver(() => Answer)
export class AnswerResolver extends AnswerResolverBase {
  constructor(protected readonly service: AnswerService) {
    super(service);
  }
}
