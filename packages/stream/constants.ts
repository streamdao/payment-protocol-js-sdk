import { PublicKey } from "@solana/web3.js";

import { Cluster, LocalCluster } from "./types";

export const TX_FINALITY_CONFIRMED = "confirmed";

export const STREAM_STRUCT_OFFSET_SENDER = 49;
export const STREAM_STRUCT_OFFSET_RECIPIENT = 113;

export const PROGRAM_ID = {
  [Cluster.Devnet]: "7wTGkkRHnZnsgGDL4Ptp89SHWTYKcoaytFQ18ZPeyTg2",
  [Cluster.Mainnet]: "strmRqUCoQUgGUan5YhzUZa6KqdzwX5L6FpUxfmKg5m",
  [Cluster.Testnet]: "7wTGkkRHnZnsgGDL4Ptp89SHWTYKcoaytFQ18ZPeyTg2",
  [LocalCluster.Local]: "7wTGkkRHnZnsgGDL4Ptp89SHWTYKcoaytFQ18ZPeyTg2",
};

export const STREAMDAO_TREASURY_PUBLIC_KEY = new PublicKey(
  "6o8uHGmLRqLJDdv8xSDxt87uwdkQv9mNpdbwpQNoKYah"
);

export const WITHDRAW_OR_PUBLIC_KEY = new PublicKey(
  "wdrwhnCv4pzW8beKsbPa4S2UDZrXenjg16KJdKSpb5u"
);

export const STREAMDAO_FEE_ORACLE_PUBLIC_KEY = new PublicKey(
  "7cA2Amv5yPtvta82udfw8e55L5ofrwFn5Vt37TCDsefb"
);
