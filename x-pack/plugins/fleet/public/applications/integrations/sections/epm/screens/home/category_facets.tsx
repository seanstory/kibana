/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { EuiFacetButton, EuiFacetGroup } from '@elastic/eui';
import type { IntegrationCategory } from '@kbn/custom-integrations-plugin/common';
import React from 'react';

import { i18n } from '@kbn/i18n';

import { Loading } from '../../../../components';

export interface CategoryFacet {
  count: number;
  id: string;
  title: string;
}

export const UPDATES_AVAILABLE = 'updates_available';
export type ExtendedIntegrationCategory = IntegrationCategory | typeof UPDATES_AVAILABLE | '';

export const ALL_CATEGORY = {
  id: '',
  title: i18n.translate('xpack.fleet.epmList.allPackagesFilterLinkText', {
    defaultMessage: 'All categories',
  }),
};

export const ALL_INSTALLED_CATEGORY = {
  id: '',
  title: i18n.translate('xpack.fleet.epmList.allPackagesInstalledFilterLinkText', {
    defaultMessage: 'All installed',
  }),
};

export const UPDATES_AVAILABLE_CATEGORY = {
  id: UPDATES_AVAILABLE,
  title: i18n.translate('xpack.fleet.epmList.updatesAvailableFilterLinkText', {
    defaultMessage: 'Updates available',
  }),
};

export interface Props {
  isLoading?: boolean;
  categories: CategoryFacet[];
  selectedCategory: string;
  onCategoryChange: (category: CategoryFacet) => unknown;
}

export function CategoryFacets({
  isLoading,
  categories,
  selectedCategory,
  onCategoryChange,
}: Props) {
  const controls = (
    <EuiFacetGroup>
      {isLoading ? (
        <Loading />
      ) : (
        categories.map((category) => {
          return (
            <EuiFacetButton
              isSelected={category.id === selectedCategory}
              key={category.id}
              id={category.id}
              quantity={category.count}
              onClick={() => onCategoryChange(category)}
            >
              {category.title}
            </EuiFacetButton>
          );
        })
      )}
    </EuiFacetGroup>
  );

  return controls;
}
