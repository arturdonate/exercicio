## 3cTalk

## *O que é 3CTalk?*

A 3CTalk foi criada com o objetivo de trazer uma evolução na comunicação entre uma empresa e seu cliente. Sendo uma plataforma simples de utilizar, onde a empresa apenas terá que se registar, selecionar a sua equipa, conseguindo assim monitorizar a sua assiduidade.

## *Quais são seus recursos?*

Contendo inúmeras funcionalidades, o 3CTalk pode disponibilizar múltiplos atendentes, sistema de atendimento, separação de departamentos, respostas rápidas, identificação de atendente, mídia, chat interno, Dashboard customizado, integração com outros sistemas via API e também chat multinível.

## *Quais linguagens são usadas?*

As linguagens predominantes e usadas ​​são:
- `JavaScript`
- `HTML`
- `conexão webSocket `

## *Instalando e usando 3CTalk*

**Instalando o servidor**

Antes de iniciar os comandos, você deverá criar 4 subdomínios e apontar para o IP de sua VPS:

- SUB 1: FRONTEND DO CHATBOT > seudominio.3solucoes.tec.br
- SUB 2: BACKEND DO CHATBOT > seudominiobotapi.3csolucoes.tec.br
- SUB 3: FRONTEND DO 3CTalk > seudominio.3csolucoes.tec.br
- SUB 4: BACKEND DO 3CTalk > seudominioapi.3csolucoes.tec.br

Após a criação dos subdomínios você deverá utilizar seu software de transferência de arquivos seguro preferido, abra o terminal e digite os seguintes comandos:

```sudo su root 
    cd ~ 
    apt install mysql-server 
    mysql --version
    sudo mysql -u root 

 ```
**Este código deverá ser escrito linha por linha em seu terminal.**

Após a sequência de comandos você ira inserir códigos em MySql.

```
mysql> CREATE DATABASE testedb CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
mysql> USE mysql;
mysql> UPDATE user SET plugin='mysql_native_password' WHERE User='root';
mysql> FLUSH PRIVILEGES;
mysql> exit;

```

```
sudo nano /etc/mysql/my.cnf

[mysqld]
max_connections=1024
max_user_connections=1024
innodb_file_format = Barracuda
innodb_file_per_table = on
innodb_default_row_format = dynamic
```

Após isso você devera reiniciar seu MySql com o comando `sudo service mysql restart ` e adcionar seu usuáro com os seguintes comandos em seu terminal.

```
sudo su root
adduser nomeUser
usermod -aG sudo nomeUser
su nomeUser
```
Adicionado seu usuário você deverá enviar mais comandos para seu terminal, onde estará sendo enviado a senha.

```
sudo mysql
GRANT ALL PRIVILEGES ON *.* TO 'nomeUser'@'localhost' IDENTIFIED BY 'SuaSenh@';
FLUSH PRIVILEGES;
exit
```
Após enviar sua senha e nome de usuário, você enviará os seguintes comandos para começarmos a instalar o 3cTalk.

```
sudo apt update && sudo apt upgrade
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt install apt-transport-https ca-certificates curl software-properties-common
sudo apt update
sudo usermod -aG mysql ${USER}
su - ${USER}
cd ~
```
Com os próximos comandos será instalado o git onde será feita uma clonagem.

```
sudo apt install git
git clone https://3CTec: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@github.com/3CTec/3ctalk.git 3ctalk
```
Com o git instalado e com o clone do 3CTec, enviaremos os próximos comandos para adcionarmos informações em nosso backend. 
```
cp 3ctalk/backend/.env.example 3ctalk/backend/.env
nano 3ctalk/backend/.env
```

Após entrarmos no backend, enviaremos as seguintes alterações, fazendo as mudanças necessárias.

```
NODE_ENV=DEVELOPMENT
BACKEND_URL=https://seudominioapi.3csolucoes.tec.br
FRONTEND_URL=https://seudominio.3csolucoes.tec.br
PORT=8080
PROXY_PORT=443
CHROME_BIN=/usr/bin/google-chrome-stable
DIALOG_FLOW_JSON=zdg-9un9-0aba54d6e44c.json
DIALOG_FLOW_PROJECT_ID=zdg-9un9
DIALOG_FLOW_LANGUAGE=pt-br

DB_HOST=localhost
DB_DIALECT=mysql
DB_USER=nomeUser
DB_PASS=SuaSenh@
DB_NAME=testedb

JWT_SECRET=saKPKKOxzczxcnscndcssccdsddngfsacxcs@Ers21vhhghee3c
JWT_REFRESH_SECRET=kldflhxvcxcxkkkjxhchghjgkdsdsccsd4234asdasdcxcc3c
```
Após enviarmos as informações, deveremos enviar o seguinte comando:

```
sudo apt-get install -y libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
```
Com todos comandos acimas enviados, enviaremos os seguintes comandos para concluir parte da instalção:

```
cd 3ctalk​
cd backend
npm install
```

Após isso será necessário sair do root e logar no usuário, subir a dist para o repositório no backend, após isso enviaremos os seguintes comandos: 
```
npx sequelize db:migrate
npx sequelize db:seed:all
npm start
```
Com isso enviaremos os comandos para instalar o pm2 globalmente e iniciar o js.

```
sudo npm install -g pm2
pm2 start dist/server.js --name nameUser-backend
pm2 startup ubuntu -u nameUser
sudo env PATH=$PATH:/usr/bin pm2 startup ubuntu -u nameUser --hp /home/nameUser
```
Após instalarmos o pm2 globalmente, enviaremos comandos para fazermos algumas mudanças em seu frontend: 
```
cd ../frontend
npm install
nano .env
```
```
REACT_APP_BACKEND_URL = https://testeapi.3csolucoes.tec.br
REACT_APP_HOURS_CLOUSE_TICKETS_AUTO=1440
nano src/pages/ZDGChatbot/index.js
linha 39: https://seudominiobot.3csolucoes.tec.br
```
Após fazermos as alterações, vamos enviar os seguintes comandos: 
```
npm run build
pm2 start server.js --name teste-frontend
pm2 save
pm2 list
```
Agora iremos fazer a instalação do ngix e vamos adcionar as seguintes informações em seu frontend: 
```
sudo apt install nginx
sudo rm /etc/nginx/sites-enabled/default
sudo nano /etc/nginx/sites-available/nameUser-frontend
``` 
**INFORMAÇÕES**

```
server {
  server_name seudominio.3csolucoes.tec.br;

  location / {
    proxy_pass http://127.0.0.1:3333;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Após adcionarmos as informações no frontend, vamos enviar o comando `sudo nano /etc/nginx/sites-available/nameUser-backend` para adcionarmos as seguintes informações para o backend: 
```server {
  server_name seudominioapi.3csolucoes.tec.br;

  location / {
    proxy_pass http://127.0.0.1:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_cache_bypass $http_upgrade;
  }
}
```
Adcionada as informações reiniciaremos o ngix e vamos alterar uma de suas configurações com os comandos: 
```
cd /etc/nginx/sites-available/
ls
sudo ln -s /etc/nginx/sites-available/teste-frontend /etc/nginx/sites-enabled
sudo ln -s /etc/nginx/sites-available/teste-backend /etc/nginx/sites-enabled
sudo nginx -t
sudo service nginx restart
sudo nano /etc/nginx/nginx.conf
```
**ALTERAÇÃO**
```
http {
    ...
    client_max_body_size 20M;
}
```
Alterada as configurações do ngix, enviaremos os últimos comandos para acabarmos a instalação do nosso servidor.

```
sudo nginx -t
sudo service nginx restart
sudo apt-get install snapd
sudo snap install notes
sudo snap install --classic certbot
sudo certbot --nginx
```
## :robot: *Instalção do Chatbot*

Após a instalação do servidor, será feito a instalação do *servidor Chatbot*.

Para começarmos a instalação do Chatbot, enviaremos o seguinte comando no mesmo terminal que foi utilizado para a instalção do servidor. 

```
cd ~
cd 3ctalk/backend-chatbot
npm install
nano .env
```
Após esse envio, adcionaremos as seguintes informações:
 ```
 DB_HOST=localhost
DB_DIALECT=mysql
DB_USER=coopacredi
DB_PASS=EIMAsol@3c
DB_NAME=coopacredidb
PORT=8081
```
