import { SnhProdSystem } from "../ports/SnhProdSystem";
import { SnhIntSystem } from "../ports/SnhIntSystem";

export interface SnhClearing {
    readonly SnhProdSystem: SnhProdSystem;
    readonly SnhIntSystem: SnhIntSystem;
}
