
# get lat,long,  geolocatin api 

# use geocode api to get citity 

html5
get lat,lon , geolocation api . 



Using OpenCage - API Reference | SDKs | Tutorials | Guides
Because you are already registered the code examples below use your API key.

This is a tutorial for using the OpenCage Geocoding API in Javascript.
Before we dive in to the tutorial ...
Spend two minutes ...

playing with the demo page, so that you see the actual response the API returns.
browing the API reference, so you understand the optional parameters, best practices, possible response codes, and the rate limiting on free trial accounts.
Ok, ready?

Using the OpenCage Geocoding API in javascript
Please note we also have tutorials for jQuery, and nodejs. If Javascript is your thing you can also find SDKs for ReactJS, TypeScript, GatsbyJS, and various serverless platforms on our SDKs page.
Code example:
<script>
  var api_key = '45871dc4479d4bb785eb9c7615fcadc8';
  var latitude = '51.0';
  var longitude = '7.0';

  var api_url = 'https://api.opencagedata.com/geocode/v1/json'

  var request_url = api_url
    + '?'
    + 'key=' + api_key
    + '&q=' + encodeURIComponent(latitude + ',' + longitude)
    + '&pretty=1'
    + '&no_annotations=1';

  // see full list of required and optional parameters:
  // https://opencagedata.com/api#forward

  var request = new XMLHttpRequest();
  request.open('GET', request_url, true);

  request.onload = function() {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status === 200){ 
      // Success!
      var data = JSON.parse(request.responseText);
      alert(data.results[0].formatted); // print the location

    } else if (request.status <= 500){ 
      // We reached our target server, but it returned an error
                           
      console.log("unable to geocode! Response code: " + request.status);
      var data = JSON.parse(request.responseText);
      console.log('error msg: ' + data.status.message);
    } else {
      console.log("server error");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log("unable to connect to server");        
  };

  request.send();  // make the request
                             
</script>


Some issues to consider:
Please note that putting your API key in client side javascript means that it is visible to anyone executing that javascript. We recommend you do this only for internal applications.

Please see our detailed guide to protecting your API key(s).

As an added measure of safety subscription customers can define a value for the Access-Control-Allow-Origin header in their account dashboard which will limit AJAX requests to a specific domain. You can find the details in the API documentation.

That being said, one worry that potential clients sometimes raise is that someone will get their key and start using it heavily and they will face a large and unexpected bill. Fear not - that can't happen because of how our pricing works. Subscription customers buy a month in advance, and there is no usage-based charging. If we see an explosion of usage we email you and ask if it is expected and the source is known. If yes, and it will be ongoing, we ask you to move to a higher pricing tier in the future, but this never happens as a surprise. If no, we can help you work out what is going on. Please see all the details of how our pricing works.

Further Reading
 OpenCage Geocoding API Reference
 Guide to Reverse Geocoding
 Cleaning / formatting your query
 Guide to geocoding more quickly
 Guide to geocoding large datasets
 Geocoding and preserving privacy

