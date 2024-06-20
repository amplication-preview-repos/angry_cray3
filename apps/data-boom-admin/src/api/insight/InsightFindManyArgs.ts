import { InsightWhereInput } from "./InsightWhereInput";
import { InsightOrderByInput } from "./InsightOrderByInput";

export type InsightFindManyArgs = {
  where?: InsightWhereInput;
  orderBy?: Array<InsightOrderByInput>;
  skip?: number;
  take?: number;
};
