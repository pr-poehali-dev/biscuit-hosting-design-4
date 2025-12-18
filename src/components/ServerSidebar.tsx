import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface ServerSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const ServerSidebar = ({ activeSection, onSectionChange }: ServerSidebarProps) => {
  const menuItems = [
    { id: 'overview', label: 'Обзор', icon: 'LayoutDashboard' },
    { id: 'console', label: 'Консоль', icon: 'Terminal' },
    { id: 'files', label: 'Файлы', icon: 'FolderOpen' },
    { id: 'monitoring', label: 'Мониторинг', icon: 'Activity' },
    { id: 'backups', label: 'Бэкапы', icon: 'Database' },
    { id: 'dns', label: 'DNS', icon: 'Globe' },
    { id: 'ports', label: 'Порты', icon: 'Network' },
  ];

  const minecraftItems = [
    { id: 'configs', label: 'Конфигурации', icon: 'Settings' },
    { id: 'versions', label: 'Версии', icon: 'Package' },
    { id: 'players', label: 'Игроки', icon: 'Users' },
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-full">
      <div className="p-4 border-b border-sidebar-border flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="Server" className="text-primary-foreground" size={20} />
        </div>
        <div>
          <h2 className="font-bold text-sidebar-foreground">BisqVelocity</h2>
          <p className="text-xs text-sidebar-foreground/60">5.161.182.207:25567</p>
        </div>
      </div>

      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <button 
            className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded px-3 py-2 text-sm font-medium transition-colors"
            title="Запустить сервер"
          >
            <Icon name="Play" size={16} className="mx-auto" />
          </button>
          <button 
            className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded px-3 py-2 text-sm font-medium transition-colors"
            title="Остановить сервер"
          >
            <Icon name="Square" size={16} className="mx-auto" />
          </button>
          <button 
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white rounded px-3 py-2 text-sm font-medium transition-colors"
            title="Перезагрузить сервер"
          >
            <Icon name="RotateCw" size={16} className="mx-auto" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-xs font-semibold text-sidebar-foreground/60 uppercase mb-2">Основное</h3>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  activeSection === item.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                )}
              >
                <Icon name={item.icon as any} size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4">
          <h3 className="text-xs font-semibold text-sidebar-foreground/60 uppercase mb-2">Minecraft</h3>
          <nav className="space-y-1">
            {minecraftItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  activeSection === item.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                )}
              >
                <Icon name={item.icon as any} size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
          <Icon name="User" size={18} />
          <span>Аккаунт</span>
        </button>
      </div>
    </aside>
  );
};

export default ServerSidebar;
