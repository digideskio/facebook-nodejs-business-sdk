/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * ProductCatalogExampleFeed
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogExampleFeed extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      example_feed: 'example_feed',
      id: 'id'
    });
  }

  get (fields, params): ProductCatalogExampleFeed {
    return this.read(
      fields,
      params
    );
  }
}
