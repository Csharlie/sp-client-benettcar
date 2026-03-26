export interface BcBrandItem {
  name: string
  logo?: string
  alt?: string
  /** Brands needing CSS invert for dark backgrounds */
  invert?: boolean
}

export interface BcBrandData {
  title?: string
  description?: string
  brands: BcBrandItem[]
}
