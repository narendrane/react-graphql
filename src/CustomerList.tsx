import { List } from 'antd';
import { siderStyle, rightStyle, listStyle } from './style';
import { Customer } from './interface';
type filteredUserProps = {
    filteredUser: Customer[];
    userType: string;
 };

export const CustomerList = ({filteredUser, userType}: filteredUserProps) : React.ReactElement | JSX.Element =>
<List
data-testid="customer-lists"
style={listStyle}
size="large"
itemLayout="horizontal"
dataSource={filteredUser}
renderItem={(item: Customer, index) => (
  <List.Item>
    <div style={{ width: "50%" }}>
      <div style={siderStyle}>{item?.name[0]}</div>
      <div style={rightStyle}>
        <List.Item.Meta
          title={item?.name}
          description={userType}
        />
      </div>
    </div>
  </List.Item>
)}
/>