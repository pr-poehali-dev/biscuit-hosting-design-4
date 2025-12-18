import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface FileItem {
  name: string;
  type: 'folder' | 'file';
  size: string;
  modified: string;
}

const FileManager = () => {
  const [currentPath, setCurrentPath] = useState('/home/minecraft');
  const [isDragging, setIsDragging] = useState(false);
  const [files] = useState<FileItem[]>([
    { name: 'server.properties', type: 'file', size: '2.4 KB', modified: '2024-12-15 14:23' },
    { name: 'world', type: 'folder', size: '145 MB', modified: '2024-12-18 10:15' },
    { name: 'plugins', type: 'folder', size: '24 MB', modified: '2024-12-17 09:30' },
    { name: 'logs', type: 'folder', size: '8.5 MB', modified: '2024-12-18 12:45' },
    { name: 'server.jar', type: 'file', size: '45 MB', modified: '2024-12-10 16:00' },
    { name: 'eula.txt', type: 'file', size: '120 B', modified: '2024-12-10 15:58' },
    { name: 'whitelist.json', type: 'file', size: '456 B', modified: '2024-12-16 18:20' },
    { name: 'ops.json', type: 'file', size: '234 B', modified: '2024-12-14 11:10' },
  ]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    console.log('Files dropped:', e.dataTransfer.files);
  };

  return (
    <div className="space-y-4">
      <Card className="bg-card border-border">
        <CardHeader className="border-b border-border">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold flex items-center">
              <Icon name="FolderOpen" className="mr-2" size={20} />
              Файловый менеджер
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline">
                <Icon name="Upload" size={16} className="mr-2" />
                Загрузить
              </Button>
              <Button size="sm" variant="outline">
                <Icon name="FolderPlus" size={16} className="mr-2" />
                Новая папка
              </Button>
              <Button size="sm" variant="outline">
                <Icon name="FilePlus" size={16} className="mr-2" />
                Новый файл
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-4 bg-muted/30 border-b border-border flex items-center space-x-2">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Icon name="Home" size={16} />
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Icon name="ChevronLeft" size={16} />
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Icon name="ChevronRight" size={16} />
            </Button>
            <div className="flex-1 bg-background border border-border rounded px-3 py-1 text-sm">
              {currentPath}
            </div>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Icon name="RefreshCw" size={16} />
            </Button>
          </div>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`min-h-[400px] ${
              isDragging ? 'bg-primary/10 border-2 border-dashed border-primary' : ''
            }`}
          >
            {isDragging ? (
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Upload" className="mx-auto mb-4 text-primary" size={48} />
                  <p className="text-lg font-semibold text-primary">Перетащите файлы сюда</p>
                  <p className="text-sm text-muted-foreground">Отпустите, чтобы загрузить</p>
                </div>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead>Имя</TableHead>
                    <TableHead className="w-32">Размер</TableHead>
                    <TableHead className="w-48">Изменен</TableHead>
                    <TableHead className="w-32"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {files.map((file, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell>
                        <Icon
                          name={file.type === 'folder' ? 'Folder' : 'File'}
                          className={file.type === 'folder' ? 'text-primary' : 'text-muted-foreground'}
                          size={20}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{file.name}</TableCell>
                      <TableCell className="text-muted-foreground">{file.size}</TableCell>
                      <TableCell className="text-muted-foreground">{file.modified}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Icon name="Download" size={16} />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Icon name="Edit" size={16} />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600">
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FileManager;
