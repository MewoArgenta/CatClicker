(function() {

    let model = {
        catConstructor: function (src, name) {
            this.src = src;
            this.name = name;
            this.numberOfClicks = 0
        },

        cats: [],

        imageSources: ['../img/firstCat.png', '../img/secondCat.png', '../img/thirdCat.png', '../img/fourthCat.png', '../img/fifthCat.png'],

        namesCats: ['Tom', 'Bubbles', 'Troubles', 'Pulgento', 'Brasil'],
    }

    let octopus = {

        generateCats: function () {
            for (let i = 0; i < model.namesCats.length; i++) {
                let catObject = model.namesCats[i];
                catObject = new model.catConstructor(model.imageSources[i], model.namesCats[i]);
                model.cats.push(catObject);
                this.numberOfCats += 1
            }
        },

        numberOfCats: 0,

        getCatName: function (i) {
            let name = model.cats[i].name;
            return name
        },

        getCatSource: function (i) {
            let src = model.cats[i].src;
            return src
        },

        getCatClicks: function (i) {
            let clicks = model.cats[i].numberOfClicks;
            return clicks
        },

        setCatClicks: function (i, numberOfClicks) {
            model.cats[i].numberOfClicks = numberOfClicks
        },

        init: function () {
            this.generateCats();
            view.init();
        }
    }

    let view = {
        init: function () {
            for (let i = 0; i < octopus.numberOfCats; i++) {
                let number = document.createElement("span");
                number.innerHTML = i + 1;
                let numberRow = document.getElementsByClassName('numbers')[0];
                number.style.padding = "10px";
                number.style.fontSize = "30px";
                numberRow.appendChild(number);
                this.appendImage();
            }
        },
        appendImage: function () {
            for (let i = 0; i < octopus.numberOfCats; i++) {

                let numberRow = document.getElementsByClassName('numbers')[0];
                let number = numberRow.getElementsByTagName("span")[i];

                number.addEventListener('click', function () {
                    let imageBox = document.getElementsByClassName("image")[0];
                    let nameBox = document.getElementsByClassName("name") [0];

                    nameBox.innerHTML = octopus.getCatName(i);

                    imageBox.src = octopus.getCatSource(i);

                    const counterSpan = document.getElementById('counter');
                    let counter = octopus.getCatClicks(i);
                    counterSpan.innerHTML = counter;
                    counter += 1;
                    octopus.setCatClicks(i, counter)
                })
            }
        }
    }

    octopus.init()
}());







