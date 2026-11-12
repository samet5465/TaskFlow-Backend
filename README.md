TaskFlow Backend API

Proje Hakkında

TaskFlow, görevlerin oluşturulmasını, listelenmesini, güncellenmesini ve silinmesini sağlayan REST API tabanlı bir backend projesidir.

Bu proje Node.js Backend Programlama eğitimi kapsamında geliştirilmiştir.

Kullanılan Teknolojiler

* Node.js
* Express.js
* JavaScript
* REST API
* JSON
* Postman

Kurulum

1. Proje klasörünü bilgisayarınıza indirin ve terminalde açın.

2. Gerekli bağımlılıkları yükleyin:

npm install

3. Sunucuyu başlatma:

node server.js

Sunucu http://localhost:3000 adresinde çalışır.

API Endpointleri

Metot	Endpoint	Açıklama
GET	/tasks      	Tüm görevleri listeler
GET	/tasks/:id	    Belirli bir görevi getirir
POST	/tasks  	Yeni görev oluşturur
PUT	/tasks/:id	    Mevcut görevi günceller
DELETE	/tasks/:id	Görevi siler

Logger Middleware:

Sisteme gelen API isteklerinin tarih, saat, HTTP metodu ve adresi terminale kaydedilir.

Test:

API işlemleri Postman kullanılarak test edilmiştir.

Not:

Görevler şu anda bellekte tutulmaktadır. Sunucu yeniden başlatıldığında yapılan değişiklikler sıfırlanır.