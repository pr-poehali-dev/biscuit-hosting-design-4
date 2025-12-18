import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const stats = [
    { label: 'Использовано места', value: '24.5 GB', max: '50 GB', percent: 49, icon: 'HardDrive' },
    { label: 'Трафик за месяц', value: '145 GB', max: 'Безлимит', percent: 0, icon: 'Activity' },
    { label: 'Активных доменов', value: '3', max: '10', percent: 30, icon: 'Globe' },
    { label: 'Аптайм', value: '99.98%', max: '100%', percent: 99.98, icon: 'TrendingUp' },
  ];

  const recentActivity = [
    { action: 'Резервная копия создана', time: '2 часа назад', status: 'success' },
    { action: 'SSL сертификат обновлён', time: '1 день назад', status: 'success' },
    { action: 'Домен example.com добавлен', time: '3 дня назад', status: 'success' },
    { action: 'Тариф обновлён до Профи', time: '5 дней назад', status: 'success' },
  ];

  const servers = [
    { name: 'Server-RU-01', location: 'Москва', status: 'online', load: 23 },
    { name: 'Server-EU-02', location: 'Амстердам', status: 'online', load: 45 },
    { name: 'Server-US-03', location: 'Нью-Йорк', status: 'online', load: 67 },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Панель управления</h1>
          <p className="text-muted-foreground">Мониторинг и управление вашим хостингом</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <Icon name={stat.icon as any} className="text-primary" size={20} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                {stat.percent > 0 && (
                  <Progress value={stat.percent} className="h-2" />
                )}
                <p className="text-xs text-muted-foreground mt-2">из {stat.max}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Activity" className="mr-2 text-primary" size={24} />
                Нагрузка на серверы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {servers.map((server, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">{server.name}</p>
                        <p className="text-sm text-muted-foreground">{server.location}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">{server.load}%</span>
                  </div>
                  <Progress value={server.load} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Clock" className="mr-2 text-primary" size={24} />
                Последняя активность
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 pb-3 border-b border-border last:border-0 last:pb-0">
                  <Icon 
                    name="CheckCircle2" 
                    className="text-green-500 flex-shrink-0 mt-0.5" 
                    size={20} 
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="BarChart3" className="mr-2 text-primary" size={24} />
              Статистика производительности
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/50 rounded-lg">
              <div className="text-center">
                <Icon name="TrendingUp" className="mx-auto mb-4 text-primary" size={48} />
                <p className="text-muted-foreground">График производительности</p>
                <p className="text-sm text-muted-foreground mt-2">Среднее время ответа: 12ms</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
