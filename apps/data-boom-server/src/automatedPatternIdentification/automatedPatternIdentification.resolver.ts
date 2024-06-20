import * as graphql from "@nestjs/graphql";
import { AutomatedPatternIdentificationResolverBase } from "./base/automatedPatternIdentification.resolver.base";
import { AutomatedPatternIdentification } from "./base/AutomatedPatternIdentification";
import { AutomatedPatternIdentificationService } from "./automatedPatternIdentification.service";

@graphql.Resolver(() => AutomatedPatternIdentification)
export class AutomatedPatternIdentificationResolver extends AutomatedPatternIdentificationResolverBase {
  constructor(
    protected readonly service: AutomatedPatternIdentificationService
  ) {
    super(service);
  }
}
