/* class Slider {
    defaultSettings = {
        selector: '.slider',
        loop: false,
        arrows: false,
        dots: false,
        autoplay: false,
    }

    state = {
        activeSlide: 0,
    }

    templates = {
        renderDots: function (dots) {

            return `<ul class="slider-dots">
            ${dots.map(function(_, index) {
                return `<li class="slider-dot" >
                ${index + 1}
                 <i class="fa fa-dot-circle-o" aria-hidden="true"></i> 
            </li>`
            }).join('')}
        </ul>`
        },
        renderArrows: function () {
            return `<ul class="slider-arrows">
            <li class="arrow arrow-prev">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </li>
            <li class="arrow arrow-next" >
               <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </li>
        </ul>`
        },
        renderTrack: function (slides) {
            return `<div class="slider-list">
            <div class="slider-track">
                ${slides}
            </div>
            </div>`
        },
        renderSlides: function (slides) {
            return slides.map(function (slide) {
                return `<div class="slider-slide">
                    ${slide.outerHTML}
                </div>`
            }).join('')
        }
    }

    constructor(settings) {
        this.settings = Object.assign(this.defaultSettings, settings)
    }

    setState(state) {
        this.state = Object.assign(this.state, state)
    }

    render() {
        const slider = document.querySelector(this.settings.selector)
        const children = Array.from(slider.children)
        const slides = this.templates.renderSlides(children)
        const track = this.templates.renderTrack(slides)

        slider.innerHTML = track

        if (this.settings.dots) {
            const dots = this.templates.renderDots(children)

            slider.insertAdjacentHTML('beforeend', dots)
        }

        if (this.settings.arrows) {
            const arrows = this.templates.renderArrows()

            slider.insertAdjacentHTML('beforeend', arrows)
        }
        this.setState({
            slidesCount: children.length,
            elements: {
                slider,
                track: slider.querySelector('.slider-track'),
                next: slider.querySelector('.arrow-next'),
                prev: slider.querySelector('.arrow-prev'),
                dots: slider.querySelector('.slider-dots'),
            }
        })
    }

    next() {
        let slidesCount = this.state.slidesCount
        const track = this.state.elements.track
        console.log('next', this.state.activeSlide);
        if (Math.abs(this.state.activeSlide) === slidesCount - 1) return this.state.activeSlide = 1
        this.state.activeSlide -= 1
        track.style.transform = `translateX(${this.state.activeSlide* 100}%)`

    }

    prev() {
        const track = this.state.elements.track
        console.log('prev', this.state.activeSlide);
        if (this.state.activeSlide === 0) return this.state.activeSlide = 3

        this.state.activeSlide += 1
        track.style.transform = `translateX(${this.state.activeSlide* 100}%)`

    }

    arrowsEvents() {
        
               // const next = this.state.elements.next 

        const {
            elements: {
                next,
                prev,
            }
        } = this.state

        next.addEventListener('click', this.next.bind(this))

        prev.addEventListener('click', this.prev.bind(this))
    }

    loopTrack() {
        const loopNext = this.state.elements.next
        const loopPrev = this.state.elements.prev
        let slidesCount = this.state.slidesCount
        console.log(loopPrev);
        console.log(loopNext);

        if (this.state.activeSlide === 0) {
            console.log('poch');
        }
        if (Math.abs(this.state.activeSlide) === slidesCount - 1) {
            console.log('con');
        }
    }

    moveSlide(e) {
        const track = this.state.elements.track
        const dot = e.target

        if (dot.classList.contains('slider-dot')) {
            this.state.activeSlide = -(dot.textContent - 1)

            track.style.transform = `translateX(${this.state.activeSlide * 100}%)`

        }
    }

    dotsEvent() {
        const dots = this.state.elements.dots

        dots.addEventListener('click', this.moveSlide.bind(this))
    }

    init() {
        this.render()
        this.arrowsEvents()
        this.dotsEvent()
        this.loopTrack()
    }
}
class CustomSlider extends Slider {
    myNewMethod() {
        console.log('myNewMethod');
    }
}
const slider = new CustomSlider({
    arrows: true,
    dots: true,

    loop: true,
})

slider.init()  */


class SliderNew {
    defaultSettings = {
        selector: '.slider',
        loop: false,
        arrows: false,
        dots: false,
        autoplay: false,

    }

    state = {
        activeSlide: 0,
        elements: {

        }
    }

    templates = {
        renderDots: function (dots) {
            return `<ul class="slider-dots" >
            ${dots.map(function(_, index) {
                return `<li class="slider-dot" data-index = "${index}">
                <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                        </li>`
            }).join('')}
                    </ul>`
        },

        renderArrows: function () {
            return `<ul class="slider-arrows">
            <li class="arrow arrow-prev">
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </li>
            <li class="arrow arrow-next" >
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </li>
        </ul>`
        },

        renderTrack: function (slides) {
            return `<div class="slider-list">
                <div class="slider-track">
                    ${slides}
                </div>
            </div>`
        },

        renderSlides: function (slides) {
            return slides.map(function (slide) {
                return `<div class="slider-slide">
                    ${slide.outerHTML}
                </div>`
            }).join('')
        }
    }

    constructor(settings) {
        this.settings = Object.assign(this.defaultSettings, settings)
    }

    setState(state) {
        this.state = Object.assign(this.state, state)
    }

    render() {
        const slider = document.querySelector(this.settings.selector)
        const children = Array.from(slider.children)
        const slides = this.templates.renderSlides(children)
        const track = this.templates.renderTrack(slides)


        slider.innerHTML = track

        if (this.settings.dots) {
            const dots = this.templates.renderDots(children)

            slider.insertAdjacentHTML('beforeend', dots)
        }

        if (this.settings.dots) {
            const arrows = this.templates.renderArrows()

            slider.insertAdjacentHTML('beforeend', arrows)
        }

        this.setState({
            slider,
            slidesCount: children.length,
            elements: {
                track: slider.querySelector('.slider-track'),
                next: slider.querySelector('.arrow-next'),
                prev: slider.querySelector('.arrow-prev'),
                dots: slider.querySelector('.slider-dots'),
                arrows: slider.querySelector('.slider-arrows')
            },
        })
    }

    next() {
        const track = this.state.elements.track
        let slidesCount = this.state.slidesCount

        if (Math.abs(this.state.activeSlide) === slidesCount - 1) return this.loopEvent()

        this.state.activeSlide -= 1;

        track.style.transform = `translateX(${this.state.activeSlide * 100}%)`

    }

    prev() {
        const track = this.state.elements.track

        if (this.state.activeSlide === 0) return this.loopEvent()

        this.state.activeSlide += 1;

        track.style.transform = `translateX(${this.state.activeSlide * 100}%)`

    }

    arrowsEvents() {
        const next = this.state.elements.next
        const prev = this.state.elements.prev

        next.addEventListener('click', this.next.bind(this))

        prev.addEventListener('click', this.prev.bind(this))

    }

    moveSlide(e) {
        const dot = e.target
        const track = this.state.elements.track

        if (dot.classList.contains('slider-dot')) {
            this.state.activeSlide = -(dot.getAttribute('data-index'))

            track.style.transform = `translateX(${this.state.activeSlide * 100}%)`
        }
    }

    dotsEvent() {
        const dots = this.state.elements.dots

        dots.addEventListener('click', this.moveSlide.bind(this))
    }

    loopEvent() {
        if (!this.settings.loop) return

        const track = this.state.elements.track
        let slidesCount = this.state.slidesCount

        if (Math.abs(this.state.activeSlide) === slidesCount - 1) {
            track.style.transform = `translateX(0%)`
            this.state.activeSlide = 0
        } else if (this.state.activeSlide === 0) {
            track.style.transform = `translateX(-${(slidesCount - 1)* 100}%)`
            this.state.activeSlide = -slidesCount + 1

        }
    }

    interval() {
        if (!this.settings.loop) return

        if (!this.settings.autoplay) return

        const arrows = this.state.elements.arrows

        let delayInterval = setInterval(() => slider.next(), this.settings.autoplay * 1000)

        arrows.addEventListener('click', e => {
            clearInterval(delayInterval)
            delayInterval = null
            console.log(delayInterval);
            setTimeout(() => {
                delayInterval = setInterval(() => slider.next(), this.settings.autoplay * 1000)
            }, 3000)
            console.log(delayInterval);
        })

    }

    init() {
        this.render()
        this.arrowsEvents()
        this.dotsEvent()
        this.interval()
    }

}


const slider = new SliderNew({
    arrows: true,
    dots: true,
    loop: true,
    autoplay: 3,
})

slider.init()



/* setTimeout() */