import { Result } from "./Result";
import { Cdr } from "./Cdr";

/** GetClearingCdrsResponse */
export interface GetClearingCdrsResponse {
    /** result */
    result?: Result;
    /** cdrInfoArray[] */
    cdrInfoArray?: Array<Cdr>;
}
