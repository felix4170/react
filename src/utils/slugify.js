/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

import slugify from 'slugify';

export default (string, directory) => {
  const filename = slugify(string) + '.html';

  return directory ? `/${directory}/${filename}` : filename;
};
