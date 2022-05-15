# apt
sudo apt update
sudo apt upgrade -y
sudo apt install -y build-essential
sudo apt install net-tools

sudo apt install curl

# node js
nvm 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

nvm --version

source ~/.bashrc

nvm install node --lts

# mysql
sudo apt install mysql-server -y

mysql --version

sudo service mysql start
sudo service mysql status
sudo service mysql stop

sudo mysql -uroot 

# root 계정 패스워드 넣기
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by '비밀번호';

exit 

sudo mysql -uroot -p비밀번호

CREATE USER '유저명'@'%' IDENTIFIED WITH mysql_native_password by '비밀번호';
// % : 모든 아이피 주소에 허용하겠다 

// 모든 권한 주겠다
grant all privileges on *.* to '유저명'@'%' with grant option;
FLUSH PRIVILEGES;

exit

sudo service mysql restart

# 외부접속 
// net-tools 도움 받음
sudo netstat -ntlp | grep mysqld

cd /etc/mysql/mysql.conf.d
sudo vi mysqld.cnf

bind-address            = 0.0.0.0
// 변경 후 저장

sudo netstat -ntlp | grep mysqld

# Nginx
// 웹서버 === express 
// Nginx 오래됨  // aparch, php 등등
// 리버스 프록시 서버 
// react -> webpack이 devServer 돌려준거 

cd ~ 
mkdir www
vi index.html

// ip 접속시 index.html 페이지 나오게 해보자 

sudo apt install nginx
sudo service nginx start

sudo service nginx status
sudo service nginx stop
sudo service nginx restart 

cd /etc/nginx/sites-enabled

sudo vi default
root 디렉토리변경 /home/ubuntu/www

sudo nginx -t 오류 확인해줌