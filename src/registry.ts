import { createSectionRegistry, registerSections } from '@spektra/runtime'
import type { AnySectionDefinition } from '@spektra/runtime'

import { bcHeroDefinition } from './sections/bc-hero'
import { bcBrandDefinition } from './sections/bc-brand'
import { bcGalleryDefinition } from './sections/bc-gallery'
import { bcServicesDefinition } from './sections/bc-services'
import { bcServiceDefinition } from './sections/bc-service'
import { bcAboutDefinition } from './sections/bc-about'
import { bcTeamDefinition } from './sections/bc-team'
import { bcAssistanceDefinition } from './sections/bc-assistance'
import { bcContactDefinition } from './sections/bc-contact'
import { bcMapDefinition } from './sections/bc-map'

/**
 * Benettcar section definitions — site.ts section sorrenddel megegyező.
 * Platform section-ök NINCSENEK importálva: 0 platformSections függőség.
 */
const bcSections: readonly AnySectionDefinition[] = [
  bcHeroDefinition,
  bcBrandDefinition,
  bcGalleryDefinition,
  bcServicesDefinition,
  bcServiceDefinition,
  bcAboutDefinition,
  bcTeamDefinition,
  bcAssistanceDefinition,
  bcContactDefinition,
  bcMapDefinition,
]

export const registry = createSectionRegistry()
registerSections(registry, bcSections)
