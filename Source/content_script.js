var isWeather = /weather|rain/.test(document.body.innerHTML);
if(!isWeather) {
  walk(document.body);
}

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  v = v.replace(/einer (Cloud|Wolke)/gi, function(match) {
    return "einem Mond";
  });
  
  v = v.replace(/in der (Cloud|Wolke)/gi, function(match) {
    return "auf dem Mond";
  });
  
  v = v.replace(/in die (Cloud|Wolke)/gi, function(match) {
    return "auf den Mond";
  });
  
  v = v.replace(/die (Cloud|Wolke)/gi, function(match) {
    return "der Mond";
  });
  
  v = v.replace(/Wolke/gi, function(match) {
    // c + 10 = m
    var m = String.fromCharCode(match.charCodeAt(0) - 10);
    return m + "ond";
  });
  
  //english
  v = v.replace(/Cloud/gi, function(match) {
    // c + 10 = m
    var m = String.fromCharCode(match.charCodeAt(0) + 10);
    return m + "oon";
  });

	textNode.nodeValue = v;
}


