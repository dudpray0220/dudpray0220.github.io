import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { PersonalProductCard } from './PersonalProductCard';
import type { PersonalProduct } from '../../../types/resume';

interface PersonalProductsProps {
  products: PersonalProduct[];
}

export const PersonalProducts: React.FC<PersonalProductsProps> = ({ products }) => {
  return (
    <section id="products" className="mb-16 scroll-mt-8 sm:mb-24">
      <SectionTitle title="Personal Products" />
      <div className="space-y-4">
        {products.map((product) => (
          <PersonalProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
};
