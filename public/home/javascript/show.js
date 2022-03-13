var articleShowCarouselDiagram = document.getElementById('articleShowCarouselDiagram').getElementsByTagName('ul');
var lis = articleShowCarouselDiagram[0].getElementsByTagName('li');
var diagramNumber = 0;

function carouselDiagram() {
    var diagramLength = lis.length;
    diagramTranslateX = diagramNumber * 680;
    articleShowCarouselDiagram[0].style.transform = "translateX(-" + diagramTranslateX + "px)";
    diagramNumber++;
    if (diagramNumber > diagramLength) {
        diagramNumber = 0;
    }
    console.log(diagramNumber > diagramLength);
    console.log(diagramNumber);
    console.log(diagramLength);
}
setInterval('carouselDiagram()', 200);
console.log(articleShowCarouselDiagram[0])