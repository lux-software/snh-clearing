import { createClientAsync, SnhClearing14Client } from "./snhclearing14"
import path from "path";
import { BasicAuthSecurity } from "soap";
import fs from 'fs/promises'
const INT_ENV = "https://int.emobility-partner.de/services/clearing/v1.4"
const PROD_ENV = "https://emobility-partner.de/services/clearing/v1.4"

class SNHClearing {

    async createClient({ credentials, env, url }: {
        credentials: {
            username: string,
            password: string
        },
        env?: 'int' | ' prod'
        url?: string
    }): Promise<SnhClearing14Client> {
        const filepath = await fs.realpath(__filename)
        const spec = path.join(path.dirname(filepath), '../spec/snh-clearing-1.4.wsdl');
        const client = await createClientAsync(spec)
        client.setSecurity(new BasicAuthSecurity(credentials.username, credentials.password))
        client.setEndpoint(this.url(env, url))
        return client
    }

    private url(env?: 'int' | ' prod', url?: string): string {
        if (url) {
            return url
        }
        return env === 'int' ? INT_ENV : PROD_ENV
    }

}

export default new SNHClearing()
export { GetClearingCdrsRequest } from './snhclearing14'
export { GetClearingCdrsResponse } from './snhclearing14'
export { Result } from './snhclearing14'
export { ResultCode } from './snhclearing14'
export { Cdr } from './snhclearing14'
export { ClearingData } from './snhclearing14'
export { StartDateTime } from './snhclearing14'
export { TarifInfo } from './snhclearing14'
export { DurationInfo } from './snhclearing14'
export { DurationUnit } from './snhclearing14'
export { ConfirmClearingCdrsRequest } from './snhclearing14'
export { ConfirmClearingCdrsResponse } from './snhclearing14'