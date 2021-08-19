import { Result } from "./Result";
import { CdrInfoArray } from "./CdrInfoArray";

/** GetClearingCdrsResponse */
export interface GetClearingCdrsResponse {
    /** result */
    result?: Result;
    /** cdrInfoArray[] */
    cdrInfoArray?: Array<CdrInfoArray>;
}
