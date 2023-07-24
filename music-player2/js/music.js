class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Aşkın Mapushane", "Haluk Levent","8.jpg","9.mp3"),    
    new Music("Gözlerimin Etrafındaki Çizgiler", "Şebnem Ferah","5.jpg","6.mp3"),    
    new Music("Bu Aşk Fazla Sana", "Şebnem Ferah","5.jpg","5.mp3"),    
    new Music("Kupa Kızı Ve Sinek Kalesi", "Teoman","1.png","7.mp3"),
    new Music("Ölümle Yaşam Arasında", "Mavi gri & Ahmet Hatipoğlu","2.jpg","2.mp3"),
    new Music("Sevince", "Erkin Koray","6.jpg","11.mp3"),
    new Music("Kırılsın Ellerim", "Muazzez Ersoy","4.jpg","4.mp3")      
];
