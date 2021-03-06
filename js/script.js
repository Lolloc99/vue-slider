/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe 
*/

const app = new Vue (
    {
        el : "#root",
        // Data
        data : {
            mainArray: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },

                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum'
                },

                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },

                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
                },

                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
                },
            ],

            currentSlide: 0, //posizione sulla prima slide
            
        },
        // Methods
        methods : {
            prevClick: function () {
                if (this.currentSlide === 0) {
                    this.currentSlide = this.mainArray.length - 1; // ultima
                } else {
                    this.currentSlide--; // precedente
                }
            
                console.log('Prev', this.currentSlide);
            },

            nextClick: function () {
                // se sono all'ultima, mi posiziono sulla prima
                if (this.currentSlide == this.mainArray.length - 1) {
                    this.currentSlide = 0; // prima
                } else {
                    this.currentSlide++; // successiva
                }

                console.log('Next', this.currentSlide);
            },

            thumbClick: function (index) {
                this.currentSlide = index
            }
        }
    }
)
