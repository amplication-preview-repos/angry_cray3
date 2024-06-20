import * as graphql from "@nestjs/graphql";
import { MachineLearningModelResolverBase } from "./base/machineLearningModel.resolver.base";
import { MachineLearningModel } from "./base/MachineLearningModel";
import { MachineLearningModelService } from "./machineLearningModel.service";

@graphql.Resolver(() => MachineLearningModel)
export class MachineLearningModelResolver extends MachineLearningModelResolverBase {
  constructor(protected readonly service: MachineLearningModelService) {
    super(service);
  }
}
