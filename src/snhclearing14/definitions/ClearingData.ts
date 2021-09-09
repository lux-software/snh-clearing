import { StartDateTime } from "./StartDateTime";
import { TarifInfo } from "./TarifInfo";

/**
 * clearingData
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.emobility-partner.de`
 */
export interface ClearingData {
    /** startDateTime */
    startDateTime: StartDateTime;
    /** endDateTime */
    endDateTime: StartDateTime;
    /** s:decimal */
    meterStart: number;
    /** s:decimal */
    meterEnd: number;
    /** tarifInfo */
    tarifInfo: TarifInfo;
}
