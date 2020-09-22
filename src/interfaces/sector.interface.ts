interface Ticket {
  value: string
  epoch: number
}

export interface SectorLog {
  kind: string
  timestamp: number
  trace: string
  message: string
}

export interface SectorPreCommitInfo {
  sealProof: string
  sectorNumber: number
  sealedCID: string // CommR
  sealRandEpoch: number
  dealIDs: string[]
  expiration: number
  replaceCapacity: boolean // Whether to replace a "committed capacity" no-deal sector (requires non-empty DealIDs)
  // The committed capacity sector to replace, and it's deadline/partition location
  replaceSectorDeadline: number
  replaceSectorPartition: number
  replaceSectorNumber: number
}

export interface SectorPreCommitOnChainInfo {
  info: SectorPreCommitInfo
  preCommitDeposit: string
  preCommitEpoch: number
  dealWeight: string // Integral of active deals over sector lifetime
  verifiedDealWeight: string // Integral of active verified deals over sector lifetime
}

export interface SectorOnChainInfo {
  sectorNumber: number
  sealProof: number // The seal proof type implies the PoSt proof/s CommR
  sealedCID: string
  dealIDs: string[]
  activation: number
  expiration: number // Epoch during which the sector expires
  dealWeight: string // Integral of active deals over sector lifetime
  verifiedDealWeight: string // Integral of active verified deals over sector lifetime
  initialPledge: string // Pledge collected to commit this sector
  expectedDayReward: string // Expected one day projection of reward for sector computed at activation time
  expectedStoragePledge: string // Expected twenty day projection of reward for sector computed at activation time
}

export interface SectorInfo {
  sectorID: number
  state: string
  commD: string
  commR: string
  proof: string[]
  deals: number[]
  ticket: Ticket
  seed: Ticket
  preCommitMsg: string
  commitMsg: string
  retries: number
  toUpgrade: boolean

  lastErr: string
  log: SectorLog[]

  sealProof: number // The seal proof type implies the PoSt proof/s
  activation: number          // Epoch during which the sector proof was accepted
  expiration: number          // Epoch during which the sector expires
  dealWeight: string          // Integral of active deals over sector lifetime
  verifiedDealWeight: string          // Integral of active verified deals over sector lifetime
  initialPledge: string         // Pledge collected to commit this sector
  // Expiration Info
  onTime: number
  // non-zero if sector is faulty, epoch at which it will be permanently
  // removed if it doesn't recover
  early: number
}

export interface SectorExpiration {
  onTime: number
  early: number
}

export interface SectorLocation {
  deadline: number
  partition: number
}