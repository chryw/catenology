---
---

//RequireJS config
require.config({
    paths: {
        jquery: [
            'https://code.jquery.com/jquery-2.2.3.min',
            //If the CDN location fails, load from this location
            'jquery-2.2.3.min'
        ]
    }
});


define(['jquery'], function($) {
  var greetings = "Hello, Bunny!";
  $(document).ready(function(){
    console.log(greetings);
  });
});
