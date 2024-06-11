import React from 'react';
import Header from './components/Header';
import OnLeave from './components/OnLeave';
import LeaveCards from './components/LeaveCards';
import LeaveTable from './components/LeaveTable';
import ApplyLeaveForm from './components/ApplyLeaveForm';

function App() {
  return (
    <div>
      <Header />
      <OnLeave />
      <LeaveCards/>
      <LeaveTable/>
      <ApplyLeaveForm/>
    </div>
  );
}

export default App;
