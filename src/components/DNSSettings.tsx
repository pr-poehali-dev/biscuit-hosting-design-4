import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const DNSSettings = () => {
  const [domain, setDomain] = useState('bisqvit.mcdev.pol');
  const serverIP = '5.161.182.207';
  const serverPort = '25567';

  return (
    <div className="space-y-4">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-base font-semibold flex items-center">
            <Icon name="Globe" className="mr-2 text-primary" size={20} />
            Информация о сервере
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">IP адрес сервера</label>
              <div className="flex items-center space-x-2">
                <Input value={serverIP} readOnly className="bg-muted" />
                <Button size="sm" variant="outline">
                  <Icon name="Copy" size={16} />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Порт</label>
              <div className="flex items-center space-x-2">
                <Input value={serverPort} readOnly className="bg-muted" />
                <Button size="sm" variant="outline">
                  <Icon name="Copy" size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Info" className="text-primary flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-primary mb-1">Прямое подключение</p>
                <p className="text-sm text-muted-foreground">
                  Используйте {serverIP}:{serverPort} для прямого подключения к серверу
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-base font-semibold flex items-center">
            <Icon name="LinkIcon" className="mr-2 text-primary" size={20} />
            DNS настройки
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Домен</label>
            <div className="flex items-center space-x-2">
              <Input 
                value={domain} 
                onChange={(e) => setDomain(e.target.value)}
                placeholder="example.mcdev.pol"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Save" size={16} className="mr-2" />
                Сохранить
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Подключайтесь к серверу через доменное имя: {domain}
            </p>
          </div>

          <div className="border-t border-border pt-4">
            <h4 className="font-semibold mb-3">DNS записи</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <div>
                    <p className="font-medium">A запись</p>
                    <p className="text-sm text-muted-foreground">{serverIP}</p>
                  </div>
                </div>
                <span className="text-xs text-green-500 font-semibold">Активна</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <div>
                    <p className="font-medium">SRV запись</p>
                    <p className="text-sm text-muted-foreground">_minecraft._tcp.{domain}</p>
                  </div>
                </div>
                <span className="text-xs text-green-500 font-semibold">Активна</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-base font-semibold flex items-center">
            <Icon name="Shield" className="mr-2 text-primary" size={20} />
            DDoS защита
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="Shield" className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold text-green-700">Защита активна</p>
                <p className="text-sm text-muted-foreground">Ваш сервер защищён от DDoS атак</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Настроить
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DNSSettings;
