import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { GetClearingCdrsRequest } from "./definitions/GetClearingCdrsRequest";
import { GetClearingCdrsResponse } from "./definitions/GetClearingCdrsResponse";
import { ConfirmClearingCdrsRequest } from "./definitions/ConfirmClearingCdrsRequest";
import { ConfirmClearingCdrsResponse } from "./definitions/ConfirmClearingCdrsResponse";
import { SnhClearing } from "./services/SnhClearing";

export interface SnhClearing14Client extends SoapClient {
    SnhClearing: SnhClearing;
    GetClearingCdrsAsync(getClearingCdrsRequest: GetClearingCdrsRequest): Promise<[result: GetClearingCdrsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ConfirmClearingCdrsAsync(confirmClearingCdrsRequest: ConfirmClearingCdrsRequest): Promise<[result: ConfirmClearingCdrsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetClearingCdrsAsync(getClearingCdrsRequest: GetClearingCdrsRequest): Promise<[result: GetClearingCdrsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ConfirmClearingCdrsAsync(confirmClearingCdrsRequest: ConfirmClearingCdrsRequest): Promise<[result: ConfirmClearingCdrsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create SnhClearing14Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<SnhClearing14Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
