import { n as e, y as n } from "./chunk-KLNSKQRJ.js";
import { b as a } from "./chunk-2K64HG7Q.js";
n();
var o = {
    UNIVERSAL_PROVIDER_RELAY_URL: "wss://relay.walletconnect.org",
    HASH_PREFIX: "SPL Name Service",
    ROOT_DOMAIN_ACCOUNT: new e("58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx"),
    NAME_PROGRAM_ID: new e("namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX"),
    REVERSE_LOOKUP_CLASS: new e("33m47vH6Eav6jr5Ry86XjhRft2jRBLDnDgPSHoquXi2Z"),
    DEFAULT_CHAIN: {
      id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
      caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
      name: "Solana",
      chainNamespace: a.CHAIN.SOLANA,
      nativeCurrency: { name: "Solana", decimals: 9, symbol: "SOL" },
      blockExplorers: {
        default: { name: "Solscan", url: "https://solscan.io" },
      },
      rpcUrls: { default: { http: [`${a.BLOCKCHAIN_API_RPC_URL}/v1`] } },
    },
    CHAIN_IDS: {
      Mainnet: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
      Devnet: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
      Testnet: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
      Deprecated_Mainnet: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ",
      Deprecated_Devnet: "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K",
    },
    LAMPORTS_PER_SOL: 1e9,
  },
  s = {
    UNIT_PRICE_MICRO_LAMPORTS: 2e7,
    UNIT_LIMIT_TRANSFER_ONLY: 3e5,
    UNIT_LIMIT_WITH_ATA_CREATION: 4e5,
  };
export { o as a, s as b };
