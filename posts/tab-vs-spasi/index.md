# Tab vs Spasi: Pilihan Yang Tiada Ujungnya


Pasti pernah dengar, *“Tab lebih bagus”* atau *“Spasi lebih rapih.”*
Dan anehnya, sampe sekarang perdebatan ini masih berkelanjutan.
Kubu tab maupun Kubu spasi merasa paling benar, padahal sama-sama disiksa error indentasi.

Dan sejak saat itu, sejarah identasi kode selalu berdebat karena hal sepele ini.

## Sepele tapi mempunyai sejarah panjang

Dulu waktu teks editor masih polos, gak ada warna, gak ada autoformat, tab ialah penyelamat bagi kalangan developer.
Tinggal pencet satu tombol, udah rapi.
Hemat waktu, hemat jari.
Tapi seiring perkembangan teks editor, munculah kaum “spasi si perfeksionis” yang bilang:

> ***“Tab tuh bikin berantakan teks editor lain!”***

Ya, gak salah juga sih.

Kadang kode keliatan rapi di laptop sendiri, tapi pas dibuka orang lain malah amburadul kayak tangga miring.
Dari situlah lahir dua kubu yaitu **Kubu Tab** dan **Kubu Spasi**.

## Kubu Tab

> Satu Tombol, Semua Kelar

Kubu tab beranggapan, *Kenapa pencet empat kali kalo bisa sekali?*

Tab itu efisien, fleksibel, bisa diatur lebarnya sesuka hati.
Dan katanya, tab itu *“lebih semantik”*, satu tab berarti satu niat indentasi.
Mereka sering bilang,

*“pengguna spasi tuh ribet, hidup aja udah susah, mau ngoding apa mau nyiksa.”*

Gaya mereka santai, yang penting program jalan.
Kalo ada warning, yaudah, tinggal <kbd>Shift Tab</kbd>.

## Kubu Spasi

Di sisi lain ada kaum spasi, yang lebih kalem tapi keras kepala.
Mereka trauma buka kode orang dan lihat indentasi tab kacau balau.

> *“Spasi tuh bisa dipercaya, tampilannya sama di semua tempat.”*

Dan itu ada benernya juga.
Buat mereka, tab itu sumber dosa linting.
Pakai spasi itu stabil, dan gak bikin diff jadi berantakan.

## Repositori Github

{{< image src="tabs-vs-spaces.png" caption="Perbandingan kode di repositori publik github" alt="[insanelab.com](https://insanelab.com/wp-content/uploads/2018/07/tabs-vs-spaces.png)" >}}


Topik ini telah dibahas secara mendalam oleh Felipe Hoffa dari Google di Medium.

Felipe menganalisis 400.000 repositori GitHub, 1 juta file, dan 14 terabyte kode untuk menentukan mengapa
spasi banyak digunakan di beberapa kode dan mungkin lebih baik daripada tab.


## Fun Fact

> *Pengguna Spasi Lebih Tajir?*


Analisis yang dilakukan oleh tim ++Stack Overflow++ 

Menemukan bahwa programmer yang menggunakan Spasi alih-alih Tab, gajinya lebih tinggi.

David Robinson, ilmuwan data yang melakukan studi ini,
menemukan bahwa programmer yang menggunakan Spasi alih-alih Tab dapat menghasilkan 9 persen lebih banyak setiap tahun
dibandingkan rekan mereka yang menggunakan tab.


## Realita

> Yang Menang Tetep Teks Editor

Lucunya, sekarang perang ini udah basi.

Teks Editor modern kayak NeoVim, VS Code, JetBrains, dll. semua bisa auto convert.
Lo pakai tab, bisa diubah jadi Spasi. atau pun sebaliknya Lo pakai Spasi, juga bisa diubah jadi Tab.
Intinya, teks editor zaman sekarang udah capek ngelihat manusia berantem hal sepele tentunya karakter kosong.

**Tapi entah kenapa, topik ini gak pernah mati.**

Mungkin karena developer perlu sesuatu untuk diributin, biar gak terus mikirin bug wkwkwk.

## Filosofi di Balik Indentasi

Kalau dipikir-pikir, gaya indentasi itu cerminan kepribadian.

Baik [Kubu Tab](#kubu-tab) maupun [Kubu Spasi](#kubu-spasi), Dua-duanya punya alasan, 
dan punya jasa masing-masing dengan versinya sendiri antara lain:

{{< tabs type="card" placement="top" >}}
{{% tab title="Pengguna Tab" %}}

Pengguna <kbd>Tab</kbd> cenderung pragmatis
> ***“yang penting beres.”***

{{% /tab %}}
{{% tab title="Pengguna Spasi" %}}

Pengguna <kbd>Spasi</kbd> lebih perfeksionis
> ***“yang penting konsisten.”***

{{% /tab %}}
{{< /tabs >}}

### Dua Kubu Developer


Jadi, mau Tab atau Spasi, **bebas pilihan kalian**.

Yang penting jangan mencampur keduanya. Karena yang bikin pusing bukan karakter kosongnya,
tapi dua-duanya dicampur di file yang sama.

Perdebatan soal **Tab vs Spasi** gak akan pernah berakhir. Tapi setidaknya, mereka sepakat satu hal:

{{< center-quote >}}
Manusia terlalu banyak waktu luang buat ngeributin hal kecil

{{< /center-quote >}}


---

> Penulis: [Adilhyz](https://github.com/adilhyz)  
> URL: https://sanrei.my.id/posts/tab-vs-spasi/  

