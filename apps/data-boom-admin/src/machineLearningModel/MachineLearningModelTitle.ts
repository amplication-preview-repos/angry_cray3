import { MachineLearningModel as TMachineLearningModel } from "../api/machineLearningModel/MachineLearningModel";

export const MACHINELEARNINGMODEL_TITLE_FIELD = "id";

export const MachineLearningModelTitle = (
  record: TMachineLearningModel
): string => {
  return record.id?.toString() || String(record.id);
};
