interface DataRef {
  transferType:string
  root: string
  pieceCid: string // Optional for non-manual transfer, will be recomputed from the data if not given
  pieceSize: number // Optional for non-manual transfer, will be recomputed from the data if not given
}

export interface DealInfo {
  proposalCid: string
  state: string
  message: string // more information about deal state, particularly errors
  provider: string
  dataRef: DataRef
  pieceCID: string
  size: number

  pricePerEpoch: string
  duration: number

  dealID: string

  creationTime: string
}