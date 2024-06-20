import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InsightServiceBase } from "./base/insight.service.base";

@Injectable()
export class InsightService extends InsightServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
