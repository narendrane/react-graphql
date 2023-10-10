import React, { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import { fetchListZellerCustomers } from './services'
import { Customer } from './interface';
import type { RadioChangeEvent } from 'antd';
import { Card, Radio, Space, List } from 'antd';
import { headerStyle, siderStyle, rightStyle, listStyle } from './style';

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
    setFilteredUser(customers?.filter(user => user.role == userType.toUpperCase()));
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
            <Radio value="Admin">Admin</Radio>
            <Radio value="Manager">Manager</Radio>
          </Space>
        </Radio.Group>
      </Card>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card title={<div>{userType} Users</div>} style={headerStyle}>
          <List
            style={listStyle}
            size="large"
            itemLayout="horizontal"
            dataSource={filteredUser}
            renderItem={(item, index) => (
              <List.Item>
                <div style={{ width: "50%" }}>
                  <div style={siderStyle}>{item.name[0]}</div>
                  <div style={rightStyle}>
                    <List.Item.Meta
                      title={item.name}
                      description={userType}
                    />
                  </div>
                </div>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    </>
  );
}

export default App;
