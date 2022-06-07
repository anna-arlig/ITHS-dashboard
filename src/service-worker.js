/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open("bananpaj").then(function(cache) {
        return cache.addAll(
          statics.map(url => url.url)
        );
      })
    );
  });

self.addEventListener("fetch", event => {
    if( navigator.onLine ) { // Note uppercase L
    console.log('Online!');
    } else {
    console.log('Offline!');
    }


    event.respondWith(
        caches.open("bananpaj").then(function(cache){
            return caches.match(event.request).then(response => {
                if(response){return response}

                if(!navigator.onLine){
                    const markup = '<h1>Seems you are offline!.</h1>';
                    const headers = { 'Content-Type': 'text/html' }
                    const response = new Response(markup, {headers})
                    return response

                }else{
                    const result = fetch(event.request)
                    result.then(response => {
                        cache.put(event.request, response.clone())
                    })
                    return result
                }

            })

        })
    )
})

