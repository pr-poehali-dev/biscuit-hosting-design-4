import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Monitoring = () => {
  const cpuHistory = [23, 45, 32, 56, 78, 45, 34, 23, 45, 56, 43, 32];
  const ramHistory = [340, 450, 520, 600, 580, 620, 650, 680, 700, 690, 706, 710];
  const networkHistory = [12, 34, 23, 45, 67, 54, 43, 32, 45, 56, 67, 54];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">ЦП</p>
              <Icon name="Cpu" className="text-primary" size={20} />
            </div>
            <p className="text-3xl font-bold mb-2">0.58%</p>
            <Progress value={0.58} className="h-2 mb-1" />
            <p className="text-xs text-muted-foreground">из 1000%</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">ОЗУ</p>
              <Icon name="Database" className="text-primary" size={20} />
            </div>
            <p className="text-3xl font-bold mb-2">706 MB</p>
            <Progress value={35} className="h-2 mb-1" />
            <p className="text-xs text-muted-foreground">из 2 GB</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Диск</p>
              <Icon name="HardDrive" className="text-primary" size={20} />
            </div>
            <p className="text-3xl font-bold mb-2">174 MB</p>
            <Progress value={8.5} className="h-2 mb-1" />
            <p className="text-xs text-muted-foreground">из 2 GB</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Аптайм</p>
              <Icon name="Clock" className="text-primary" size={20} />
            </div>
            <p className="text-2xl font-bold mb-2">99.98%</p>
            <p className="text-xs text-muted-foreground">15 дней 4 часа</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-base font-semibold flex items-center">
              <Icon name="Activity" className="mr-2 text-primary" size={20} />
              Загрузка ЦП
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-end space-x-2">
              {cpuHistory.map((value, index) => (
                <div key={index} className="flex-1 bg-muted rounded-t relative group">
                  <div
                    className="bg-primary rounded-t absolute bottom-0 w-full transition-all"
                    style={{ height: `${value}%` }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      {value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>12 мин назад</span>
              <span>Сейчас</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-base font-semibold flex items-center">
              <Icon name="Database" className="mr-2 text-primary" size={20} />
              Использование ОЗУ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-end space-x-2">
              {ramHistory.map((value, index) => (
                <div key={index} className="flex-1 bg-muted rounded-t relative group">
                  <div
                    className="bg-primary rounded-t absolute bottom-0 w-full transition-all"
                    style={{ height: `${(value / 2048) * 100}%` }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {value}MB
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>12 мин назад</span>
              <span>Сейчас</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-base font-semibold flex items-center">
            <Icon name="Network" className="mr-2 text-primary" size={20} />
            Сетевая активность
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-4">Входящий трафик</p>
              <div className="h-32 flex items-end space-x-2">
                {networkHistory.map((value, index) => (
                  <div key={index} className="flex-1 bg-muted rounded-t relative group">
                    <div
                      className="bg-green-500 rounded-t absolute bottom-0 w-full transition-all"
                      style={{ height: `${value}%` }}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        {value}MB/s
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-bold mt-4">1.09 MB/s</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4">Исходящий трафик</p>
              <div className="h-32 flex items-end space-x-2">
                {networkHistory.map((value, index) => (
                  <div key={index} className="flex-1 bg-muted rounded-t relative group">
                    <div
                      className="bg-blue-500 rounded-t absolute bottom-0 w-full transition-all"
                      style={{ height: `${value * 0.3}%` }}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        {(value * 0.3).toFixed(1)}KB/s
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-bold mt-4">177.1 KB/s</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Monitoring;
