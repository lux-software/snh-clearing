import { ClearingData } from "./ClearingData";

/**
 * cdrInfoArray
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.emobility-partner.de`
 */
export interface CdrInfoArray {
    /** CdrId|s:string|minLength,maxLength,pattern */
    CdrId?: string;
    /** s:integer */
    TransactionId?: string;
    /** s:string */
    TransparencyCode?: string;
    /** s:string */
    TransparencyUrl?: string;
    /** EvseId|s:string|pattern,pattern */
    evseId: string;
    /** RfidId|s:string|minLength,maxLength,pattern */
    rfidId: string;
    /** ChargingstationName|s:string|minLength,maxLength,pattern */
    chargingstationName: string;
    /** ChargePointOperatorName|s:string|minLength,maxLength,pattern */
    chargePointOperatorName: string;
    /** EnergyproviderName|s:string|minLength,maxLength,pattern */
    energyproviderName: string;
    /** EmobilityProviderName|s:string|minLength,maxLength,pattern */
    emobilityProviderName: string;
    /** clearingData */
    clearingData: ClearingData;
}
