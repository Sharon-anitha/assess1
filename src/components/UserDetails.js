import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './UserDetails.css';
import './Navbar.css'
const User = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const user = location.state;

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <>
   
      
      <div className="user-container">
      <div className="user-card">
        <div className="card-header">
          <img src={user.avatar} alt="Avatar" />
        </div>
        <div className="card-body">
          <h3>{user.first_name}</h3>
          <div className="card-details">
            <div className="question">
              <strong>ID:</strong>
            </div>
            <div className="answer">{user.id}</div>
            <div className="question">
              <strong>Last Name:</strong>
            </div>
            <div className="answer">{user.last_name}</div>
            <div className="question">
              <strong>Password:</strong>
            </div>
            <div className="answer">{user.password}</div>
            <div className="question">
              <strong>Phone Number:</strong>
            </div>
            <div className="answer">{user.phone_number}</div>
            <div className="question">
              <strong>Social Insurance Number:</strong>
            </div>
            <div className="answer">{user.social_insurance_number}</div>
            <div className="question">
              <strong>Date of Birth:</strong>
            </div>
            <div className="answer">{user.date_of_birth}</div>
            <div className="question">
              <strong>Email:</strong>
            </div>
            <div className="answer">{user.email}</div>
          </div>
        </div>
      </div>
</div>
<br/>
<br/>

      <div className="tab-container">
        <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
          <TabList className="tab-list">
            {user.address && <Tab className="tab">Address</Tab>}
            {user.credit_card && <Tab className="tab">Credit Card</Tab>}
            {user.subscription && <Tab className="tab">Subscription</Tab>}
            {user.employment && <Tab className="tab">Employment</Tab>}
          </TabList>

          <TabPanel className="tab-panel">
            {user.address && (
              <div className="panel-content">
                <h2 className="panel-heading">Address Details</h2>
                <div>
                  <strong>City:</strong> {user.address.city}
                </div>
                <div>
                  <strong>Latitude:</strong> {user.address.coordinates.lat}
                </div>
                <div>
                  <strong>Longitude:</strong> {user.address.coordinates.lng}
                </div>
              </div>
            )}
          </TabPanel>

          <TabPanel className="tab-panel">
            {user.credit_card && (
              <div className="panel-content">
                <h2 className="panel-heading">Credit Card Details</h2>
                <div>
                  <strong>Card Number:</strong> {user.credit_card.cc_number}
                </div>
              </div>
            )}
          </TabPanel>

          <TabPanel className="tab-panel">
            {user.subscription && (
              <div className="panel-content">
                <h2 className="panel-heading">Subscription Details</h2>
                <div>
                  <strong>Plan:</strong> {user.subscription.plan}
                </div>
                <div>
                  <strong>Status:</strong> {user.subscription.status}
                </div>
                <div>
                  <strong>Payment Method:</strong> {user.subscription.payment_method}
                </div>
                <div>
                  <strong>Term:</strong> {user.subscription.term}
                </div>
              </div>
            )}
          </TabPanel>

          <TabPanel className="tab-panel">
            {user.employment && (
              <div className="panel-content">
                <h2 className="panel-heading">Employment Details</h2>
                <div>
                  <strong>Title:</strong> {user.employment.title}
                </div>
                <div>
                  <strong>Key Skill:</strong> {user.employment.key_skill}
                </div>
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    
  </>
  );
};

export default User;
