Sepete bulunan ürünleri ekleme işlemi var.Eklemenin yanı sıra ürünlerin üzerinde yer alan arttırma-azaltma imleciyle ürün sayısını azaltma işlemi de yapılabilir. Sepet sağ köşede ürün eklendiğinde sepetin içerisine eklenen ürünün küçük bir görseli,kaç adet olduğu ve fiyatı gözükür.Sepetteki toplam ürünlerin fiyatı en altta gözükür.
<h1>ALIŞVERİŞ SEPETİ YAPIMI</h1>

https://user-images.githubusercontent.com/102542430/208994753-75de56fd-2790-4c00-8158-1b73ea98117c.mp4

Öncelikle bilgisayarımıza <a href="https://nodejs.org/tr/download/current/">nodejs </a> kurulması gerekiyor. Bilgisayarınızın özelliğine göre indirip kurun.


Diğer adımda ise masaüstüne boş bir klasör oluşturun.Bu klasöre ben <b>"react sepet"</b> ismini vereceğim.


Visual studio code'de masaüstündeki klasörü açıp aşağıdaki adımları terminale yazın.


<b>npx create-react-app  reactsepet</b> bu yazıyı yazın.React uygulaması oluştururReactsepet diye yazdığım kısım uygulamama verdiğim isimdir. Bu işlemi entere basarak bitirdiğimizde uygulama için indirmeler başlar.Aşağıda size görsel olarak sunacağım.


<img src="YAPIM/Ekran Alıntısı.PNG" width="500px" />


İndirme bittikten sonra diğer adıma geçebiliriz.


<b>cd reactsepett</b> yazarak uygulamamızın gözükmesini sağlarız.


<img src="YAPIM/Ekran Alıntı2sı.PNG" width="500px">


Devamında son olarak <b>npm start</b> yazarak projemizi çalıştıralım.


<img src="YAPIM/Ekran Alıntı3sı.PNG" width="500px">


Son adımda terminalde localhost gibi projenin özellikleri yer alıyor.Çalıştığında bir web sayfası karşınıza çıkacaktır.



Kurulum sırasında klasörün içerisine kendiliğinden yüklenen dosyaların içerisini temizleyerek başlayalım.


Src klasörünün içerisine <b>components</b>adında klasör oluşturalım.Buraya <b>Header.js ,Basket.js ve Product.js </b> adlarında dosyalar açalım.


<img src="YAPIM/Ekran Alı5ntısı.PNG">


Header.js dosyasına aşağıda verdiğim görseldeki kodları yazalım.


<img src="YAPIM/Ekran A6lıntısı.PNG">


Hemen peşine header,Basket ve Product dosyalarını App.js dosyasına import edelim.


<img src="YAPIM/Ekran Alınt7ısı.PNG" width="500px">


Buradaki arada yer alan kodları ilerleyen kısımlarda tek tek anlatacağım.

Sırada Product.js'deki ürün bilgilerini App.js'ye ekleyelim.Product.js ürün bilgilerini products.json dosyasından çekecektir. Fakat size ürünleri products.json dosyasına eklemeyi ileride anlatacağım.Product.js dosyasına aşağıdaki kodları yazmayla devam
edelim.


<img src="YAPIM/Ekran Alı8ntısı.PNG" width="500px">


Devamında App.js dosyasına aşağıdaki kodları yazın.


<img src="YAPIM/Ekran Alı9ntısı.PNG">


Sayfamızda ürünlerimizin görüntüleri oluşmuştur bu kodları yazdıktan sonra.Şimdi ürün görselleerinin üst kısımlarına arttırma ve azaltma imleçleri yerleştirelim.


<img src="YAPIM/Ek10ran Alıntısı.PNG" width="500px">


Gelin yukarıdaki kodları inceleyelim biraz.Butonlarımızı oluşturduk ve alt kısımdaki 'product.name' ve 'product.price' kısımları ürünlerin adlarını çektiği yerdeki isimlerle ekranda göstermeye yardımcı olur.Kodlarda verilen classname,id'de verilen tanımlamalar
sayesinde işlerimiz kolaylaşıyor.


Sağ tarafa bir de sepet ekleyelim.Basket.js dosyasını açarak aşağıda verilen kodları yazalım.


<img src="YAPIM/Ekran Alı11ntısı.PNG" width="400px">


Hemen peşisıra App.js dosyasına basket.js 'yi import edelim.


<img src="YAPIM/E12kran Alıntısı.PNG" width="300px">


Sepete ekleme ve çıkarma işlemlerini yapmaya geldi sıra.Gözünüz sakın korkmasın çok basit ve kolay.App.js dosyasını açın ve kodları yazmaya başlayın. Bu kodları return kodunun üst kısmına yazacaksınız.


<img src="YAPIM/Ekr13an Alıntısı.PNG" width="300px">


Aşağıda vereceğim kodları ise App.js dosyasında return kodunun iç kısımına yazın.


<img src="YAPIM/Ekr14an Alıntısı.PNG" width="400px">


Sepete ürün eklemeyi öncelikle yapalım.Verilen kodda eklenen ürün sepette varsa veya yoksa diye düşünerek if ve else kullandık.Ürün varsa fiyatı eklenen ürün sayısıyla çarpıp toplam fiyatı yanında gösterecektir.


<img src="YAPIM/Ekran15 Alıntısı.PNG" width="350px">


Tabiki eklenen ürünün ismi,fiyatı ve görselini de sepette gösterir.Orada product.name gibi yazdığımız kodlar işimizi basitleştirmek için yapılmıştır. Örneğin her ürün için tek tek isim yazmak yerine bizim her ürüne verdiğimiz idleri eklemesini sağlarız.


Sepete ekleme çıkarma işlemleri yapıldığı sürece konsola yazdırılmasını istiyorsak şu kodları App.js dosyasının return kodunun üst kısmına yazalım.


<img src="YAPIM/E16kran Alıntısı.PNG" width="400px">


Şimdi sepetteki ürünü 1 eksilttiğimizde sepette o üründen daha kalmıyorsa yani 0 oluyorsa o ürünü sepetten silmemiz gerekiyor. Product.js dosyasının return kodunun üst kısmına yazacağız.Bunun için de;


<img src="YAPIM/Ekra17n Alıntısı.PNG" width="300px">


Basket.js dosyasını açalım.Yapacağımız işlem sepette ürünlerin işlem özelliklerini içerecektir.


<img src="YAPIM/E18kran Alıntısı.PNG" width="300px">


Buradaki genel olarak kodlar diğer dosyalarda yazdıklarımız olduğu için ayrıntılı anlatmayacağım.Ama size ne işlemleri olduğunu anlatacağım. Width ile eklenen ürünün boyutunu ayarladık. Eklenen ürünün ismi fiyatı ve kaç adet olduğunu yazdırdık.Sepetin
en sonuna ise toplam fiyatı TL cinsinden yazdırdık.


App.js dosyasına da verdiğim alttaki kodları yazarak toplam fiyatı bulma ve ekranda gösterme işlemini bitirmiş oluyoruz.


<img src="YAPIM/Ek19ran Alıntısı.PNG" width="400px">


Evet son kısıma geldik.Ürün bilgilerini products.json dosyasına nasıl ekleyeceğiz onu öğrenmeye.Bir ürün eklemeyi göstereceğim zaten diğerlerini de aynı şekilde yaparsınız.


<img src="YAPIM/Ekr20an Alıntısı.PNG" width="500px">


Kıvırcık parantez içerinde ürünün ismi fiyatı ve id'sini yazdık.İd işi kolaylaştırma amacındadır.Ürünün linkini ise çift tırnak içerisinde yazmalıyız.Unutmadan her ürün için bu saydıklarımı tek tek yapmalısınız.Her kıvrıcık parantez arasına virgül atmayı
da unutmayın.


Evvet sepet yapımını bitirdik arkadaşlar.Umarım açıklayıcı olmuştur anlatımım.Bence gözünüzü korkutacak kadar bir zorluğu olduğunu düşünmüyorum.

