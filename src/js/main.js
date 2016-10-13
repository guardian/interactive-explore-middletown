import reqwest from 'reqwest'
import mainHTML from './text/main.html!text'
// import share from './lib/share'
// import template from './text/template.html!text'
import handlebars from 'handlebars'

// var shareFn = share('Interactive title', 'http://gu.com/p/URL', '#Interactive');
var el;
var data;

export function init(dom, context, config, mediator) {
  el = dom;
  el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);

  var data;
  var url = "https://interactive.guim.co.uk/docsdata-test/1jct3UKEcoJjKk1TQcYYt-3pidDHaMJiF3LIgPCvspSE.json";
  reqwest({
      url: url,
      type: 'json',
      crossOrigin: true,
      success: function(resp) {
          data = resp;
          console.log(data);
      }
  });

  // play video on click
  document.querySelector('.what__video .cover').onclick = function() {
    document.querySelector('.what__video').classList.add('will-play');
    var embed = document.querySelector('.what__video .embed');
    embed.setAttribute('src', embed.getAttribute('data-src'));
  }

  var middletown = document.getElementById('g-explore-middletown');
  if (getParameterByName('mode')) {
    middletown.setAttribute('data-component', 'middletown series page : ' + getParameterByName('mode'));
  } else {
    middletown.setAttribute('data-component', 'middletown series page : separate page');
  }

}


function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
