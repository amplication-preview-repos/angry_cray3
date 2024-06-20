import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutomatedPatternIdentificationServiceBase } from "./base/automatedPatternIdentification.service.base";

@Injectable()
export class AutomatedPatternIdentificationService extends AutomatedPatternIdentificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
