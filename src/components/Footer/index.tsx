import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

var currentYear = (new Date).getFullYear()

export default () => (
  <DefaultFooter
    copyright={"burubur.com 2020 - "+ currentYear}
    links={[
      {
        key: 'github',
        title: <GithubOutlined />,
        href:  'https://github.com/burubur/open-pos-frontend',
        blankTarget: true,
      },
    ]}
  />
);
