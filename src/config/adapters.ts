import {IBasicProviderOptions} from "../sdk/basic-provider";

const ETHEREUM: IBasicProviderOptions[] = [
    {
        name: "element-ethereum-1",
        basicProvider: "element-bp-1",
        block: 15080677,
        deprecatedAt: 15794002,
        contract: "0x20f780a973856b93f63670377900c1d2a50a77c4",
        chainId: 1,
        defaultPaymentToken: "0x0000000000000000000000000000000000000000",
    },
    {
        name: "element-ethereum-2",
        basicProvider: "element-bp-2",
        block: 15794002,
        contract: "0x20f780a973856b93f63670377900c1d2a50a77c4",
        chainId: 1,
        defaultPaymentToken: "0x0000000000000000000000000000000000000000",
    },
    {
        name: "nftrade-ethereum-1",
        basicProvider: "nftrade-bp-1",
        block: 15554697,
        contract: "0xbf6bfe5d6b86308cf3b7f147dd03ef11f80bfde3",
        chainId: 1,
        defaultPaymentToken: "eth",
    },
    {
        name: "okx-ethereum-1",
        basicProvider: "okx-bp-1",
        block: 16681307,
        contract: "0x92701d42e1504ef9fce6d66a2054218b048dda43",
        chainId: 1,
        defaultPaymentToken: "eth",
    },
    {
        name: "okx-ethereum-2",
        basicProvider: "okx-bp-2",
        block: 18311795,
        contract: "0xa7fd99748ce527eadc0bdac60cba8a4ef4090f7c",
        chainId: 1,
        defaultPaymentToken: "eth",
    },
    {
        name: "galler-ethereum-1",
        basicProvider: "galler-bp-1",
        block: 14079071,
        contract: "0xe9fcdb934cfa605e149482d21b330b022ca12e48",
        chainId: 1,
        defaultPaymentToken: "eth",
    },
    {
        name: "alienswap-ethereum-1",
        basicProvider: "alienswap-bp-1",
        block: 17080133,
        contract: "0x83746de31fc8de985ffe46c1c20ea6d7d8f4ed3a",
        chainId: 1,
        defaultPaymentToken: "eth",
    },
    {
        name: "ens-ethereum-1",
        basicProvider: "ens-bp-1",
        block: 12855192,
        contract: "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5",
        chainId: 1,
        defaultPaymentToken: "0x0000000000000000000000000000000000000000",
    },
    {
        name: "golom-ethereum-1",
        basicProvider: "golom-bp-1",
        block: 14880514,
        contract: "0xd29e1fcb07e55eaceb122c63f8e50441c6acedc9",
        chainId: 1,
        defaultPaymentToken: "eth",
    },
    {
        name: "x-ethereum-1",
        basicProvider: "x-bp-1",
        block: 15127333,
        contract: "0xb4a2e49818dd8a5cdd818f22ab99263b62ddeb6c",
        chainId: 1,
    },
    {
        name: "sudoswap-ethereum-1",
        basicProvider: "sudoswap-bp-1",
        block: 14718943,
        blockRange: 100,
        contract: "0x2b2e8cda09bba9660dca5cb6233787738ad68329",
        chainId: 1,
        defaultPaymentToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    },
    {
        name: "mooar-ethereum-1",
        basicProvider: "mooar-bp-1",
        block: 17336472,
        contract: "0xaaaaaaaa33d3520a2266ce508bc079fcfe82c8e3",
        chainId: 1,
        defaultPaymentToken: "eth",
    },
];

const BSC: IBasicProviderOptions[] = [
    {
        name: "element-bsc-1",
        basicProvider: "element-bp-1",
        block: 16968105,
        deprecatedAt: 22357101,
        contract: "0xb3e3dfcb2d9f3dde16d78b9e6eb3538eb32b5ae1",
        chainId: 15,
        defaultPaymentToken: "bnb",
    },
    {
        name: "element-bsc-2",
        basicProvider: "element-bp-2",
        block: 22357101,
        contract: "0xb3e3dfcb2d9f3dde16d78b9e6eb3538eb32b5ae1",
        chainId: 15,
        defaultPaymentToken: "bnb",
    },
    {
        name: "nftrade-bsc-1",
        basicProvider: "nftrade-bp-1",
        block: 21416323,
        contract: "0xbf6bfe5d6b86308cf3b7f147dd03ef11f80bfde3",
        chainId: 15,
        defaultPaymentToken: "bnb",
    },
    {
        name: "okx-bsc-1",
        basicProvider: "okx-bp-1",
        block: 25862299,
        contract: "0xcce3e3f79cf9091386f84610bb06947e2fc232a3",
        chainId: 15,
        defaultPaymentToken: "bnb",
    },
    {
        name: "okx-bsc-2",
        basicProvider: "okx-bp-2",
        block: 32526441,
        contract: "0xa7fd99748ce527eadc0bdac60cba8a4ef4090f7c",
        chainId: 15,
        defaultPaymentToken: "bnb",
    },
    {
        name: "galler-bsc-1",
        basicProvider: "galler-bp-1",
        block: 14444440,
        contract: "0xb50a86874394f75d9388dd5bc47705145110d9a5",
        chainId: 15,
        defaultPaymentToken: "bnb",
    },
    {
        name: "bazaar-bsc-1",
        basicProvider: "bazaar-bp-1",
        block: 8114624,
        contract: "0x90099da42806b21128a094c713347c7885af79e2",
        chainId: 15,
        defaultPaymentToken: "0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab",
    },
    {
        name: "bhero-market-bsc-1",
        basicProvider: "b-market-bp-1",
        block: 15498601,
        contract: "0x376a10e7f125a4e0a567cc08043c695cd8edd704",
        chainId: 15,
    },
    {
        name: "bhouse-market-bsc-1",
        basicProvider: "b-market-bp-1",
        block: 14498666,
        contract: "0x049896f350c802cd5c91134e5f35ec55fa8f0108",
        chainId: 15,
    },
    {
        name: "radiocaca-bsc-1",
        basicProvider: "radiocaca-bp-1",
        block: 13219620,
        contract: "0xe97fdca0a3fc76b3046ae496c1502c9d8dfef6fc",
        chainId: 15,
    },
    {
        name: "thetan-arena-bsc-1",
        basicProvider: "thetan-arena-bp-1",
        block: 14551809,
        contract: "0x7bf5d1dec7e36d5b4e9097b48a1b9771e6c96aa4",
        chainId: 15,
    },
    {
        name: "xcad-bsc-1",
        basicProvider: "xcad-bp-1",
        block: 31085662,
        contract: "0x48ca89f26a9f7588148e1051c3ec5a8e073cf407",
        chainId: 15,
        defaultPaymentToken: "0xd069599e718f963bd84502b49ba8f8657faf5b3a"
    },
    {
        name: "kingdomstory-market-bsc-1",
        basicProvider: "kingdomstory-market-bp-1",
        block: 32932915,
        contract: "0x0e37943581489f7771981bb5ca882b474d0d5ad2",
        chainId: 15,
        defaultPaymentToken: "bnb",
    },
];

const POLYGON: IBasicProviderOptions[] = [
    {
        name: "element-matic-1",
        basicProvider: "element-bp-1",
        block: 27168140,
        deprecatedAt: 34601844,
        contract: "0xeaf5453b329eb38be159a872a6ce91c9a8fb0260",
        chainId: 16,
        defaultPaymentToken: "matic",
    },
    {
        name: "element-matic-2",
        basicProvider: "element-bp-2",
        block: 36047022,
        contract: "0xeaf5453b329eb38be159a872a6ce91c9a8fb0260",
        chainId: 16,
        defaultPaymentToken: "matic",
    },
    {
        name: "nftrade-polygon-1",
        basicProvider: "nftrade-bp-1",
        block: 33227140,
        contract: "0xbf6bfe5d6b86308cf3b7f147dd03ef11f80bfde3",
        chainId: 16,
        defaultPaymentToken: "matic",
    },
    {
        name: "okx-polygon-1",
        basicProvider: "okx-bp-1",
        block: 39574716,
        contract: "0x954dab8830ad2b9c312bb87ace96f6cce0f51e3a",
        chainId: 16,
        defaultPaymentToken: "matic",
    },
    {
        name: "okx-polygon-2",
        basicProvider: "okx-bp-2",
        block: 48612325,
        contract: "0xa7fd99748ce527eadc0bdac60cba8a4ef4090f7c",
        chainId: 16,
        defaultPaymentToken: "matic",
    },
    {
        name: "cryptopunks2-polygon-1",
        basicProvider: "cryptopunks2-bp-1",
        block: 20346370,
        contract: "0xc02d332abc7f9e755e2b1eb56f6ae21a7da4b7ad",
        chainId: 16,
        defaultPaymentToken: "matic",
    },
    {
        name: "glexchange-polygon-1",
        basicProvider: "glexchange-bp-1",
        block: 36044498,
        contract: "0x88cbb5881895d13fa3a35225b0fed9c81805f44b",
        chainId: 16,
        defaultPaymentToken: "matic",
    },
    {
        name: "mooar-polygon-1",
        basicProvider: "mooar-bp-1",
        block: 46455707,
        contract: "0xaaaaaaaa33d3520a2266ce508bc079fcfe82c8e3",
        chainId: 16,
        defaultPaymentToken: "matic",
    },
    {
        name: "arenagames-polygon-1",
        basicProvider: "arenagames-bp-1",
        block: 62053712,
        contract: "0xA24DA121a67631146F38928F9c77687F96fB8fd7",
        chainId: 16,
        defaultPaymentToken: "matic",
    },
];

const AVALANCHE: IBasicProviderOptions[] = [
    {
        name: "element-avalanche-1",
        basicProvider: "element-bp-1",
        block: 13749004,
        deprecatedAt: 21333894,
        contract: "0x18cd9270dbdca86d470cfb3be1b156241fffa9de",
        chainId: 19,
        defaultPaymentToken: "avax",
    },
    {
        name: "element-avalanche-2",
        basicProvider: "element-bp-2",
        block: 21333894,
        contract: "0x18cd9270dbdca86d470cfb3be1b156241fffa9de",
        chainId: 19,
        defaultPaymentToken: "avax",
    },
    {
        name: "nftrade-avalanche-1",
        basicProvider: "nftrade-bp-1",
        block: 19958164,
        contract: "0xbf6bfe5d6b86308cf3b7f147dd03ef11f80bfde3",
        chainId: 19,
        defaultPaymentToken: "avax",
    },
    {
        name: "okx-avalanche-1",
        basicProvider: "okx-bp-1",
        block: 26572369,
        contract: "0xa88ba7ea2912cde5d632c8de048a17f2ea3e75a0",
        chainId: 19,
        defaultPaymentToken: "avax",
    },
    {
        name: "okx-avalanche-2",
        basicProvider: "okx-bp-2",
        block: 36224739,
        contract: "0xa7fd99748ce527eadc0bdac60cba8a4ef4090f7c",
        chainId: 19,
        defaultPaymentToken: "avax",
    },
    {
        name: "nftkey-avalanche-1",
        basicProvider: "nftkey-bp-1",
        block: 6421617,
        contract: "0x1a7d6ed890b6c284271ad27e7abe8fb5211d0739",
        chainId: 19,
        defaultPaymentToken: "avax",
    },
];

const TEZOS: IBasicProviderOptions[] = [
    {
        name: "rarible-tezos-1",
        basicProvider: "rarible-bp-1",
        block: 0,
        contract: "KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS",
        chainId: 21,
        defaultPaymentToken: "xtz",
    },
];

export const ADAPTERS = [
    ...ETHEREUM,
    ...BSC,
    ...POLYGON,
    ...AVALANCHE,
    ...TEZOS,
]
