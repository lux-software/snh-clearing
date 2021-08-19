
/** ConfirmClearingCdrsRequest */
export interface ConfirmClearingCdrsRequest {
    /** CdrId|s:string|minLength,maxLength,pattern */
    approved?: Array<string>;
    /** CdrId|s:string|minLength,maxLength,pattern */
    declined?: Array<string>;
}
