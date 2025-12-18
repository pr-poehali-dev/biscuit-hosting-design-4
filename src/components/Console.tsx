import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Console = () => {
  const [command, setCommand] = useState('');
  const [logs, setLogs] = useState([
    { time: '[01:14:23]', level: 'INFO', source: '[minecraft]', message: 'Starting Minecraft server on *:25565' },
    { time: '[01:14:24]', level: 'INFO', source: '[ServerMain]', message: 'Environment: Java 17 (OpenJDK 17.0.1)' },
    { time: '[01:14:25]', level: 'INFO', source: '[minecraft]', message: 'Loading properties...' },
    { time: '[01:14:26]', level: 'INFO', source: '[minecraft]', message: 'Default game type: SURVIVAL' },
    { time: '[01:14:27]', level: 'INFO', source: '[ServerMain]', message: 'Preparing level "world"' },
    { time: '[01:14:28]', level: 'WARN', source: '[ServerMain]', message: 'Found incomplete chunk at X:-12 Z:5' },
    { time: '[01:14:29]', level: 'INFO', source: '[ServerMain]', message: 'Preparing spawn area: 45%' },
    { time: '[01:14:30]', level: 'INFO', source: '[ServerMain]', message: 'Preparing spawn area: 89%' },
    { time: '[01:14:31]', level: 'INFO', source: '[minecraft]', message: 'Time elapsed: 6234 ms' },
    { time: '[01:14:32]', level: 'INFO', source: '[ServerMain]', message: 'Done! For help, type "help"' },
    { time: '[01:14:33]', level: 'INFO', source: '[Server]', message: 'Server is running! IP: bisqvit.mcdev.pol' },
  ]);

  const handleSendCommand = () => {
    if (command.trim()) {
      setLogs([...logs, { time: new Date().toLocaleTimeString('ru-RU'), level: 'CMD', source: '[You]', message: command }]);
      setCommand('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendCommand();
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Использование ЦП</p>
              <p className="text-2xl font-bold text-primary">0.58%</p>
              <p className="text-xs text-muted-foreground">1000%</p>
            </div>
            <Icon name="Cpu" className="text-primary" size={32} />
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Использование Памяти</p>
              <p className="text-2xl font-bold text-primary">706.43 MB</p>
              <p className="text-xs text-muted-foreground">/ 2 GB</p>
            </div>
            <Icon name="Database" className="text-primary" size={32} />
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Использование Диска</p>
              <p className="text-2xl font-bold text-primary">174.17 MB</p>
              <p className="text-xs text-muted-foreground">/ 2 GB</p>
            </div>
            <Icon name="HardDrive" className="text-primary" size={32} />
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Сеть</p>
              <p className="text-sm font-bold">↓ 1.09 MB / ↑ 177.1 KB</p>
            </div>
            <Icon name="Network" className="text-primary" size={32} />
          </CardContent>
        </Card>
      </div>

      <Card className="bg-sidebar border-sidebar-border">
        <CardHeader className="border-b border-sidebar-border flex flex-row items-center justify-between py-3">
          <CardTitle className="text-base font-semibold text-sidebar-foreground flex items-center">
            <Icon name="Terminal" className="mr-2" size={20} />
            Консоль
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Icon name="Minimize2" size={16} />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Icon name="Maximize2" size={16} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="bg-[#1a1d23] text-gray-300 font-mono text-sm h-[400px] overflow-y-auto p-4 space-y-1">
            {logs.map((log, index) => (
              <div key={index} className="flex items-start space-x-2">
                <span className="text-gray-500">{log.time}</span>
                <span 
                  className={
                    log.level === 'WARN' ? 'text-yellow-500' :
                    log.level === 'ERROR' ? 'text-red-500' :
                    log.level === 'CMD' ? 'text-green-500' :
                    'text-blue-400'
                  }
                >
                  [{log.level}]
                </span>
                <span className="text-gray-400">{log.source}:</span>
                <span className="text-gray-200">{log.message}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-sidebar-border bg-sidebar p-3 flex items-center space-x-2">
            <Icon name="ChevronRight" className="text-sidebar-foreground" size={18} />
            <Input
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Введите команду..."
              className="flex-1 bg-sidebar-accent border-sidebar-border text-sidebar-foreground"
            />
            <Button 
              onClick={handleSendCommand}
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              Отправить
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Console;
