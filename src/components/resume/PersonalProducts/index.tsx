import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { PersonalProductCard } from './PersonalProductCard';
import type { PersonalProduct } from '../../../types/resume';

interface PersonalProductsProps {
  products: PersonalProduct[];
}

export const PersonalProducts: React.FC<PersonalProductsProps> = ({ products }) => {
  return (
    <section className="mb-12 sm:mb-16">
      <SectionTitle title="Personal Product" />
      <div className="space-y-8">
        {products.map((product) => (
          <PersonalProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
};
