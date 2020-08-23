function reloadPage() {
    location.reload();
}

function wordSearch() {
    document.getElementById('searchResult').style.visibility = 'visible';

    var word = document.getElementById('word');
    var definition = document.getElementById('definition');
    var example = document.getElementById('example');

    var wordToSearch = document.getElementById('searchBox').value;

    var request1 = new XMLHttpRequest();
    request1.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/definitions?limit=10&includeRelated=false&useCanonical=false&includeTags=false&api_key=e0d094e089e87c411680f08f6ab0e7be39143f84626e8c9e4', true);
    request1.onload = function () {
        var data = JSON.parse(this.response);
        if (request1.status >= 200 && request1.status < 400) {
            var i = Math.ceil(Math.random() * 10);      
            word.innerHTML = data[i].word;    
            definition.innerHTML = data[i].text;
        } else {
            word.innerHTML = "No Example";
            definition.innerHTML = "No Example";
        }
    }
    request1.send();

    var request2 = new XMLHttpRequest();
    request2.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/topExample?useCanonical=false&api_key=e0d094e089e87c411680f08f6ab0e7be39143f84626e8c9e4', true);
    request2.onload = function () {
        var data2 = JSON.parse(this.response);
        // console.log(data2);
        
        if (request2.status >= 200 && request2.status < 400) {
            example.innerHTML = data2.text;
        } else {
            example.innerHTML = "No example";
        }
    }
    request2.send();
        


}


