import { GetClearingCdrsRequest } from "../definitions/GetClearingCdrsRequest";
import { GetClearingCdrsResponse } from "../definitions/GetClearingCdrsResponse";
import { ConfirmClearingCdrsRequest } from "../definitions/ConfirmClearingCdrsRequest";
import { ConfirmClearingCdrsResponse } from "../definitions/ConfirmClearingCdrsResponse";

export interface SnhIntSystem {
    GetClearingCdrs(getClearingCdrsRequest: GetClearingCdrsRequest, callback: (err: any, result: GetClearingCdrsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ConfirmClearingCdrs(confirmClearingCdrsRequest: ConfirmClearingCdrsRequest, callback: (err: any, result: ConfirmClearingCdrsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
