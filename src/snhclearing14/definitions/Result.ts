import { ResultCode } from "./ResultCode";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.emobility-partner.de`
 */
export interface Result {
    /** resultCode */
    resultCode?: ResultCode;
    /** s:string|maxLength */
    resultDescription?: string;
}
