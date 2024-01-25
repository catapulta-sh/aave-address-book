import {ChainId} from '@bgd-labs/js-utils';
import {PoolConfig} from '../types';

export const polygonZkEvmProtoV3: PoolConfig = {
  name: 'PolygonZkEvm',
  chainId: ChainId.zkEVM,
  POOL_ADDRESSES_PROVIDER: '0x36616cf17557639614c1cdDb356b1B83fc0B2132',
  additionalAddresses: {
    L2_ENCODER: '0x777fBA024bA1228fDa76149A4ff8B23475ed057D',
    CAPS_PLUS_RISK_STEWARD: '0xAe13e4DA0952f0B8fE04E21df53716fCF799a923',
    FREEZING_STEWARD: '0x33AE1f41546a2e05368Bf789b3d868813c0Ae658',
    DEBT_SWAP_ADAPTER: '0xb9Ef6e27ef85fE393B9F8B8C23e794ff4596C7dF',
    CONFIG_ENGINE: '0x1D0f881Ce1a646E2f27Dec3c57Fa056cB838BCC2',
    POOL_ADDRESSES_PROVIDER_REGISTRY: '0x1236010CECea55998384e795B59815D871f5f94d',
    RATES_FACTORY: '0x78946C514C385248b13AAf3056529a99E7E26BFC',
    REPAY_WITH_COLLATERAL_ADAPTER: '0xBeC519531F0E78BcDdB295242fA4EC5251B38574',
    SWAP_COLLATERAL_ADAPTER: '0x589750BA8aF186cE5B55391B0b7148cAD43a1619',
    UI_INCENTIVE_DATA_PROVIDER: '0xCFDAdA7DCd2e785cF706BaDBC2B8Af5084d595e9',
    UI_POOL_DATA_PROVIDER: '0x86E2938daE289763D4e09a7e42c5cCcA62Cf9809',
    WALLET_BALANCE_PROVIDER: '0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D',
    WETH_GATEWAY: '0x6c23bAF050ec192afc0B967a93b83e6c5405df43',
    WITHDRAW_SWAP_ADAPTER: '0x06C35Cfd3FC61eC2aC437f0d08840d5776b945af',
  },
  initial: {
    COLLECTOR: '0xe892E40C92c2E4D281Be59b2E6300F271d824E75',
    DEFAULT_A_TOKEN_IMPL: '0xDe090EfCD6ef4b86792e2D84E55a5fa8d49D25D2',
    DEFAULT_VARIABLE_DEBT_TOKEN_IMPL: '0x988B5d3863bdEE83339Be41cD31344Dfd9FD197c',
    DEFAULT_STABLE_DEBT_TOKEN_IMPL: '0x96086C25d13943C80Ff9a19791a40Df6aFC08328',
  },
};