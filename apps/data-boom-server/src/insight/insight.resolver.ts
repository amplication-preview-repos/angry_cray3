import * as graphql from "@nestjs/graphql";
import { InsightResolverBase } from "./base/insight.resolver.base";
import { Insight } from "./base/Insight";
import { InsightService } from "./insight.service";

@graphql.Resolver(() => Insight)
export class InsightResolver extends InsightResolverBase {
  constructor(protected readonly service: InsightService) {
    super(service);
  }
}
