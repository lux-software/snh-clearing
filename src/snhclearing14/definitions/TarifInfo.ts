import { DurationInfo } from "./DurationInfo";

/**
 * tarifInfo
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.emobility-partner.de`
 */
export interface TarifInfo {
    /** s:string */
    uniqueTarifIdentifier?: string;
    /** Amount|s:decimal|totalDigits,fractionDigits */
    consumptionPrice?: string;
    /** durationInfo */
    durationInfo?: DurationInfo;
    /** Amount|s:decimal|totalDigits,fractionDigits */
    sessionPrice?: string;
    /** s:string */
    additionalInfo?: string;
}
