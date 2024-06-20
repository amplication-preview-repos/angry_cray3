import * as graphql from "@nestjs/graphql";
import { VisualizationResolverBase } from "./base/visualization.resolver.base";
import { Visualization } from "./base/Visualization";
import { VisualizationService } from "./visualization.service";

@graphql.Resolver(() => Visualization)
export class VisualizationResolver extends VisualizationResolverBase {
  constructor(protected readonly service: VisualizationService) {
    super(service);
  }
}
