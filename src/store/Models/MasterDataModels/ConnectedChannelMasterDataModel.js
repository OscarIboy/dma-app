/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseMasterDataItemModel from '../Abstract/BaseMasterDataItemModel';
import BaseMasterDataModel from '../Abstract/BaseMasterDataModel';
class ConnectedChannelMasterDataItemModel extends BaseMasterDataItemModel {
  constructor(entity) {
    if (entity) {
      super(entity);
      this.name = entity.name ?? '';
    }
  }

  toDropdownSelectionItem = () => {
    return {
      value: this.id,
      label: this.name,
    };
  };
}

class ConnectedChannelMasterDataModel extends BaseMasterDataModel {
  constructor(entities) {
    if (entities) {
      super(entities);
      const entityResult = entities.result;
      this.unTransformedItems = entityResult;
      this.items = entityResult.map((element) => {
        return new ConnectedChannelMasterDataItemModel(element);
      });
    }
  }
}
export { ConnectedChannelMasterDataModel, ConnectedChannelMasterDataItemModel };
