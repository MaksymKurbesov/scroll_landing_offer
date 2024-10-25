self.addEventListener('fetch', function(event) {
    // Клонируем запрос для его дальнейшего использования
    const requestClone = event.request.clone();

    console.log(requestClone, 'requestClone')

    // Проверяем, имеет ли запрос тело (POST или PUT)
    if (requestClone.method === 'POST' || requestClone.method === 'PUT') {
        requestClone.clone().json().then(function(payload) {
            // Логируем или обрабатываем payload
            console.log('Payload:', payload);
        }).catch(function(error) {
            console.error('Failed to read payload:', error);
        });
    }

    // Передаем оригинальный запрос дальше
    event.respondWith(fetch(event.request));
});

