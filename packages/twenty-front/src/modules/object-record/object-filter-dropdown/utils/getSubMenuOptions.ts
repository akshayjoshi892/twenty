import { FilterableFieldType } from '@/object-record/object-filter-dropdown/types/FilterableFieldType';

export const getSubMenuOptions = (subMenu: FilterableFieldType | null) => {
  switch (subMenu) {
    case 'ACTOR':
      return [
        {
          name: 'Creation Source',
          icon: 'IconPlug',
          type: 'SOURCE',
        },
        {
          name: 'Creator Name',
          icon: 'IconId',
          type: 'ACTOR',
        },
      ];
    default:
      return [];
  }
};
