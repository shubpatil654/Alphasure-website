import React from 'react';
import PricingSection from './PricingSection';

export default function PackageBreakdownSection({ onOpenModal, structureType = 'pvt-ltd', items, total }) {
  return <PricingSection onOpenModal={onOpenModal} structureType={structureType} items={items} total={total} />;
}

