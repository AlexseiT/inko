class Header {
    constructor(root) {
        this.root = root;
        this.isWhite = this.root.classList.contains('header_white');
        this.scrollPrev = 0;
        this.bindListeners();
    }
    bindListeners() {
        //Наложение класса при скролле
		

        document.addEventListener('scroll', (event) => {
            let scrolled = window.scrollY;
        
            if ( scrolled > 100 && scrolled > this.scrollPrev ) {
                this.root.classList.add('header__out');
            } else {
                this.root.classList.remove('header__out');
            }
            this.scrollPrev = scrolled;
        });

        document.addEventListener('scroll', (event) => {
            if(window.scrollY > 50) {
                this.root.classList.add('header_scroll');
                this.root.classList.add('header_white');
            }
            else {
                this.root.classList.remove('header_scroll');

                if(!this.isWhite) {
                    this.root.classList.remove('header_white');
                }
            }
        })
    }
}

export default Header;