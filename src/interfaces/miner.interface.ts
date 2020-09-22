interface Power {
  rawBytePower: string
  qualityAdjPower: string
}

export interface MinerInfo {
  owner: string
  worker: string
  newWorker: string
  controlAddresses: string[]
  workerChangeEpoch: number
  peerId: string
  multiaddrs: string[]
  sealProofType: number
  sectorSize: number
  windowPoStPartitionSectors: number
}

export interface MinerPower {
  minerPower: Power
  totalPower: Power
}
