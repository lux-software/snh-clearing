import { DurationUnit } from "./DurationUnit";

/**
 * durationInfo
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.emobility-partner.de`
 */
export interface DurationInfo {
    /** Amount|s:decimal|totalDigits,fractionDigits */
    durationPrice: string;
    /** durationUnit */
    durationUnit: DurationUnit;
}
