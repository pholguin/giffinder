// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
$(document).ready(function() {
            function giphyURLWithSearchTerm(searchTerm) {
                // write a function that will return a url for the giphy API with
                // the searchTerm provided in the parameters

            }

            function appendImageToBody(srcURL) {
                // write a function that will append an <img> to the body with the
                // URL provided in the parameters
                $
            }

            /*/function callGiphyAPIWithSearchTerm(searchTerm) {
                $.ajax({
                  url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC",
                  method: "GET",
                  success: function(response) {
                       // Log the whole response to the console
                        console.log(response);
                       // Log the first image of the data to the console
                        console.log(response.data[0]);
                       // Log the "type" property of the first image object to the console
                       console.log(response.data[0].type);
                       // Log the "title" property of the first image object to the console
                       console.log(response.data[0].title);
                  },
                }); 
            }
            callGiphyAPIWithSearchTerm("dog");
            });
            /*/

            function giphyURLWithSearchTerm(searchTerm) {
                // write a function that will return a url for the giphy API with
                // the searchTerm provided in the parameters
                var newUrl = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
                return newUrl;
            }

            function appendImageToBody(srcURL) {
                // write a function that will append an <img> to the body with the
                // URL provided in the parameters
                $('body').append('<img src=' + srcURL + '>');
            }

            function callGiphyAPIWithSearchTerm(searchTerm) {
                $.ajax({
                    url: giphyURLWithSearchTerm(searchTerm),
                    method: "GET",
                    success: function(response) {
                        var url = response.data[0].images.original.url;
                        appendImageToBody(url);
                    },
                });
            }
            //Add a click handler beloe to call the function when the button is clicked
            $("button").click(function() {
                console.log("hi");
                var searchTerm = $("input").val();
                callGiphyAPIWithSearchTerm(searchTerm);
            });
});