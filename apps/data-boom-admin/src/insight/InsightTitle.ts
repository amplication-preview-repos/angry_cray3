import { Insight as TInsight } from "../api/insight/Insight";

export const INSIGHT_TITLE_FIELD = "id";

export const InsightTitle = (record: TInsight): string => {
  return record.id?.toString() || String(record.id);
};
