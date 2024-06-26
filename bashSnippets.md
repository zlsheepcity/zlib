# bash snippets


## links
- https://devhints.io/bash — general syntax


## common
```bash

sudo nano /etc/hosts

```

## files
```bash

Copy file from SCP to local
scp -P 44200 xxx@x.x.x.x:/var/www/file/location/file.xxx /Users/jeff/Documents/files

```

## mysql
```bash

mysql -u root -p databasename
mysql -u root -proot databasename

mysql -u root -proot databasename < updates.sql

```