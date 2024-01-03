import React from 'react';

import CategoryCards from '@/containers/CategoryCards';
import { EIconColor, EIconName } from '@/components/Icon';
import CollapseCards from '@/containers/CollapseCards';

import { TServicesProps } from './Services.types';
import './Services.scss';

const Services: React.FC<TServicesProps> = () => {
  return (
    <div className="Services">
      <CategoryCards
        style={{ margin: '-2.4rem 0 -1.6rem' }}
        title="Deal Hot"
        primaryBackground
        headerIcon={EIconName.Lightning}
        headerIconColor={EIconColor.WHITE}
        data={[
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
        ]}
      />
      <CollapseCards
        title="Trang điểm"
        data={[
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
        ]}
      />
      <CollapseCards
        style={{ marginBottom: '2.4rem' }}
        title="Gội đầu"
        data={[
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
        ]}
      />
    </div>
  );
};

export default Services;
