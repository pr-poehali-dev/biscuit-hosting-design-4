import { useState } from 'react';
import ServerSidebar from './ServerSidebar';
import Console from './Console';
import FileManager from './FileManager';
import Monitoring from './Monitoring';
import DNSSettings from './DNSSettings';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('console');

  const renderContent = () => {
    switch (activeSection) {
      case 'console':
        return <Console />;
      case 'files':
        return <FileManager />;
      case 'monitoring':
        return <Monitoring />;
      case 'dns':
        return <DNSSettings />;
      default:
        return <Console />;
    }
  };

  return (
    <div className="flex h-screen">
      <ServerSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-y-auto bg-background p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;