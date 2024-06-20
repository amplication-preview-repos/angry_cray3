import { AutomatedPatternIdentification as TAutomatedPatternIdentification } from "../api/automatedPatternIdentification/AutomatedPatternIdentification";

export const AUTOMATEDPATTERNIDENTIFICATION_TITLE_FIELD = "id";

export const AutomatedPatternIdentificationTitle = (
  record: TAutomatedPatternIdentification
): string => {
  return record.id?.toString() || String(record.id);
};
