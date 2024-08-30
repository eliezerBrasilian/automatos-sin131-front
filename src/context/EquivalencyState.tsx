import { WordStatus } from "../data/enums/WordStatus";

export interface EquivalencyState {
  afdConvertedFromAfn: WordStatus;
  originalAfn: WordStatus;
}
