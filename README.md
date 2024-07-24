## Golden eyes

### Docker

#Настройки
```bash
cp docker-compose.override.yml.dist docker-compose.override.yml

прописать в docker-compose.override.yml свои настройки, например порты
```

#Запуск контейнеров
```bash
docker-compose up -d --build
```

#Стоп контейнеров
```bash
docker-compose down
```

#Вход в контейнер
```bash
docker exec -it golden_eyes_web_node bash
```
