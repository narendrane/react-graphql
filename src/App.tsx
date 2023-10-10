import React, { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import { fetchListZellerCustomers } from './services'
import { CustomerList } from './CustomerList'
import { Customer } from './interface';
import type { RadioChangeEvent } from 'antd';
import { Card, Radio, Space } from 'antd';
import { headerStyle} from './style';

import awsconfig from './services/aws-exports';

Amplify.configure(awsconfig);

const App = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [userType, setUserType] = useState('Admin');
  const [filteredUser, setFilteredUser] = useState<Customer[]>([]);

  useEffect(() => {
    fetchListZellerCustomers(setCustomers);
  }, []);

  useEffect(() => {
    setFilteredUser(customers?.filter(user => user.role === userType.toUpperCase()));
  }, [userType, customers])

  const onChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    setUserType(value);
  };
  return (
    <>
      <Card title={<div>User Types</div>} style={headerStyle}>
        <Radio.Group onChange={onChange} defaultValue="Admin" value={userType}>
          <Space direction="vertical" style={{ textAlign: 'left' }}>
            <Radio value="Admin" name="admin">Admin</Radio>
            <Radio value="Manager" name="manager">Manager</Radio>
          </Space>
        </Radio.Group>
      </Card>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card title={<div>{userType} Users</div>} style={headerStyle}>
        <CustomerList {...{filteredUser, userType}}/>
        </Card>
      </Space>
    </>
  );
}

export default App;
