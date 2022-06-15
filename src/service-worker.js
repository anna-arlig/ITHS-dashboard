/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener('install', function(event) {
  self.skipWaiting();
    event.waitUntil(
      caches.open("bananpaj").then(function(cache) {
        return cache.addAll(
          statics.map(url => url.url)
        );
      })
    );
  });

  // navigator.serviceWorker.getRegistrations().then(function(registrations) {
  //   for(let registration of registrations) {
  //    registration.unregister()
  //  } })

self.addEventListener("fetch", event => {
  if(event.request.url.startsWith("chrome-extention")){
    return
  }
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

