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

*Instalando o servidor*

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
Adicionado seu usuário você deverá enviar mais comandos para seu terminal.

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


