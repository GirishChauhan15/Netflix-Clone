let englishText = document.createElement("div");
englishText.innerHTML = `
<section class="header-section">
        <div class="header_img">
          <img class="cover-img" src="./Assets/Bg.jpg" alt="background">
        </div>
       
        <section class="hero container">
          <div class="hero-one">
            <h1 class="title">Unlimited movies, TV shows and more</h1>
            <p class="sub-title">Watch anywhere. Cancel anytime.</p>
            <p class="another-sub-title">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div class="hero-two">
            <div class="email_wrap">
              <input type="email" id="email_input" autocomplete="off" />
              <label class="email_input-label" for="email_input">Email address</label>
            </div>
            <button class="get-started">
              Get Started <img src="./Assets/arrow.svg" alt="arrow" />
            </button>
          </div>
        </section>
      </section>
      <hr />
      <section class="card-section">
        <section class="cards container">
          <div class="card_one">
            <div class="card_sub-one">
              <h2 class="card_title">Enjoy on your TV</h2>
              <p class="card_description">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>
            <div class="card_sub-two">
              <img class="tv_screen" src="./Assets/tv.png" alt="Tv screen" />
              <video
                class="tv_video"
                src="./Assets/video-tv-in-0819.m4v"
                autoplay
                loop
                muted
              ></video>
            </div>
          </div>
        </section>
        <hr />
        <!--  -->
        <section class="cards container">
          <div class="card_one row-rev">
            <div class="card_sub-one">
              <h2 class="card_title">Download your shows to watch offline</h2>
              <p class="card_description">
                Save your favourites easily and always have something to watch.
              </p>
            </div>
            <div class="card_sub-two row-rev-pad mobile_download">
              <img
                class="mobile_screen"
                src="./Assets/mobile-0819.jpg"
                alt="mobile screen"
              />
              <div class="download_series">
                <div class="series_info">
                  <img
                    class="movie_poster"
                    src="./Assets/boxshot.png"
                    alt="stranger things poster"
                  />
                  <div class="series_insides">
                    <h5 class="series_title">Stranger Things</h5>
                    <p class="series_downloading">Downloading...</p>
                  </div>
                </div>
                <img
                  src="./Assets/download-icon.gif"
                  alt="download gif"
                  class="download_btn"
                />
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section class="cards container">
          <div class="card_one">
            <div class="card_sub-one">
              <h2 class="card_title">Watch everywhere</h2>
              <p class="card_description">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div class="card_sub-two Multi_tabs">
              <img
                class="Multi_screen"
                src="./Assets/device-pile-in.png"
                alt="Multi screen"
              />
              <video
                class="Multi_video"
                src="./Assets/video-devices-in.m4v"
                autoplay
                loop
                muted
              ></video>
            </div>
          </div>
        </section>
        <hr />
        <section class="cards container">
          <div class="card_one row-rev">
            <div class="card_sub-one">
              <h2 class="card_title">Create profiles for kids</h2>
              <p class="card_description">
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
            <div class="card_sub-two row-rev-pad">
              <img class="tv_screen" src="./Assets/kids.png" alt="kids show" />
            </div>
          </div>
        </section>
        <hr />
      </section>
      <section class="FAQ container">
        <div class="faq_header">
          <h2 class="faq_title">Frequently Asked Questions</h2>
        </div>
        <div class="faq_content">
          <div class="faq_content_title">
            <h3 class="faq_content_subtitle">What is Netflix?</h3>
            <button class="faq_content_close">
              <img class="close_btn" src="./Assets/x.svg" alt="close" />
            </button>
          </div>
          <div class="faq_content_content">
            <p class="faq_infoContent">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always something
              new to discover, and new TV shows and movies are added every week!
            </p>
          </div>
        </div>
        <div class="faq_content">
          <div class="faq_content_title">
            <h3 class="faq_content_subtitle">How much does Netflix cost?</h3>
            <button class="faq_content_close">
              <img class="close_btn" src="./Assets/x.svg" alt="close" />
            </button>
          </div>
          <div class="faq_content_content">
            <p class="faq_infoContent">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹149 to ₹649 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>
        <div class="faq_content">
          <div class="faq_content_title">
            <h3 class="faq_content_subtitle">Where can I watch?</h3>
            <button class="faq_content_close">
              <img class="close_btn" src="./Assets/x.svg" alt="close" />
            </button>
          </div>
          <div class="faq_content_content">
            <p class="faq_infoContent">
              Watch anywhere, anytime. Sign in with your Netflix account to watch
              instantly on the web at netflix.com from your personal computer or
              on any internet-connected device that offers the Netflix app,
              including smart TVs, smartphones, tablets, streaming media players
              and game consoles.
              <br /><br />
              You can also download your favourite shows with the iOS or Android
              app. Use downloads to watch while you're on the go and without an
              internet connection. Take Netflix with you anywhere.
            </p>
          </div>
        </div>
        <div class="faq_content">
          <div class="faq_content_title">
            <h3 class="faq_content_subtitle">How do I cancel?</h3>
            <button class="faq_content_close">
              <img class="close_btn" src="./Assets/x.svg" alt="close" />
            </button>
          </div>
          <div class="faq_content_content">
            <p class="faq_infoContent">
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your account
              anytime.
            </p>
          </div>
        </div>
        <div class="faq_content">
          <div class="faq_content_title">
            <h3 class="faq_content_subtitle">What can I watch on Netflix?</h3>
            <button class="faq_content_close">
              <img class="close_btn" src="./Assets/x.svg" alt="close" />
            </button>
          </div>
          <div class="faq_content_content">
            <p class="faq_infoContent">
              Netflix has an extensive library of feature films, documentaries, TV
              shows, anime, award-winning Netflix originals, and more. Watch as
              much as you want, anytime you want.
            </p>
          </div>
        </div>
        <div class="faq_content">
          <div class="faq_content_title">
            <h3 class="faq_content_subtitle">Is Netflix good for kids?</h3>
            <button class="faq_content_close">
              <img class="close_btn" src="./Assets/x.svg" alt="close" />
            </button>
          </div>
          <div class="faq_content_content">
            <p class="faq_infoContent">
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and films
              in their own space.
              <br /><br />
              Kids profiles come with PIN-protected parental controls that let you
              restrict the maturity rating of content kids can watch and block
              specific titles you don’t want kids to see.
            </p>
          </div>
        </div>
      </section>
      <section class="email container">
        <div class="email-one">
          <p class="email-title">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
        </div>
        <div class="email-two">
          <div class="email_wrap">
            <input type="email" id="twoEmail" autocomplete="off" />
            <label class="email_input-label" for="twoEmail">Email address</label>
          </div>
          <button class="get-started get-started-one">
            Get Started <img src="./Assets/arrow.svg" alt="arrow" />
          </button>
        </div>
      </section>
      <hr />
      <section class="footer-section container">
        <footer class="footer">
          <h5 class="footer-title">
            Questions? Call
            <a href="#">000-800-919-1694</a>
          </h5>
          <nav class="footer-nav">
            <ul class="footer_nav_one">
              <div class="first">
                <div class="divOne">
                  <li class="nav-item"><a href="#">FAQ</a></li>
                </div>
                <li class="nav-item"><a href="#">Help Centre</a></li>
              </div>
              <div class="second">
                <div class="divTwo">
                  <li class="nav-item"><a href="#">Account</a></li>
                </div>
                <li class="nav-item"><a href="#">Media Centre</a></li>
              </div>
            </ul>
            <ul class="footer_nav_two">
              <div class="first">
                <div class="divOne">
                  <li class="nav-item"><a href="#">Investor Relations</a></li>
                </div>
                <li class="nav-item"><a href="#">Jobs</a></li>
              </div>
              <div class="second">
                <div class="divTwo">
                  <li class="nav-item"><a href="#">Ways to Watch</a></li>
                </div>
                <li class="nav-item"><a href="#">Terms of Use</a></li>
              </div>
            </ul>
            <ul class="footer_nav_three">
              <div class="first">
                <div class="divOne">
                  <li class="nav-item"><a href="#">Privacy</a></li>
                </div>
                <li class="nav-item"><a href="#">Cookie Preferences</a></li>
              </div>
              <div class="second">
                <div class="divTwo">
                  <li class="nav-item"><a href="#">Corporate Information</a></li>
                </div>
                <li class="nav-item"><a href="#">Contact Us</a></li>
              </div>
            </ul>
            <ul class="footer_nav_four">
              <div class="first">
                <div class="divOne">
                  <li class="nav-item"><a href="#">Speed Test</a></li>
                </div>
                <li class="nav-item"><a href="#">Only on Netflix</a></li>
              </div>
              <div class="second">
                <div class="divTwo">
                  <li class="nav-item"><a href="#">Legal Notices</a></li>
                </div>
              </div>
            </ul>
          </nav>
          <div class="language-box-footer">
            <img
              class="language_image-footer"
              src="./Assets/language.svg"
              alt="language"
            />
            <select name="language" id="language_select-footer">
              <option value="English">English</option>
              <option value="हिन्दी">हिन्दी</option>
            </select>
          </div>
          <h5 class="footer_subTitle">Netflix India</h5>
        </footer>
      </section>
    </div>
`;

document.addEventListener("DOMContentLoaded", (event) => {
  engDiv.appendChild(englishText);
  videos()
  demo()
})


let hindiText = document.createElement("div");
hindiText.innerHTML = `

<section class="header-section">
<section class="header-section">
          <div class="header_img">
            <img class="cover-img" src="./Assets/Bg.jpg" alt="background">
          </div>
    <section class="hero container">
      <div class="hero-one">
        <h1 class="title">अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ</h1>
        <p class="sub-title">जहां चाहें देखें. जब चाहें कैंसल करें.</p>
        <p class="another-sub-title">
          देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए
          अपना ईमेल एड्रेस डालें.
        </p>
      </div>

      <div class="hero-two">
        <div class="email_wrap">
          <input type="email" id="email_input" autocomplete="off" />
          <label class="email_input-label" for="email_input">ईमेल एड्रेस</label>
        </div>
        <button class="get-started">
          शुरू करें <img src="./Assets/arrow.svg" alt="arrow" />
        </button>
      </div>
    </section>
  </section>
  <hr />
  <section class="card-section">
    <section class="cards container">
      <div class="card_one">
        <div class="card_sub-one">
          <h2 class="card_title">अपने टीवी पर आनंद लें</h2>
          <p class="card_description">
            स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.
          </p>
        </div>
        <div class="card_sub-two">
          <img class="tv_screen" src="./Assets/tv.png" alt="Tv screen" />
          <video
            class="tv_video"
            src="./Assets/video-tv-in-0819.m4v"
            autoplay
            loop
            muted
          ></video>
        </div>
      </div>
    </section>
    <hr />

    <!--  -->
    <section class="cards container">
      <div class="card_one row-rev">
        <div class="card_sub-one">
          <h2 class="card_title">ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें</h2>
          <p class="card_description">
            अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख
            सकें.
          </p>
        </div>
        <div class="card_sub-two row-rev-pad mobile_download">
          <img
            class="mobile_screen"
            src="./Assets/mobile-0819.jpg"
            alt="mobile screen"
          />
          <div class="download_series">
            <div class="series_info">
              <img
                class="movie_poster"
                src="./Assets/boxshot.png"
                alt="stranger things poster"
              />
              <div class="series_insides">
                <h5 class="series_title">Stranger Things</h5>
                <p class="series_downloading">डाउनलोड हो रहा है...</p>
              </div>
            </div>
            <img
              src="./Assets/download-icon.gif"
              alt="download gif"
              class="download_btn"
            />
          </div>
        </div>
      </div>
    </section>
    <hr />

    <section class="cards container">
      <div class="card_one">
        <div class="card_sub-one">
          <h2 class="card_title">हर जगह देखें</h2>
          <p class="card_description">
            बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर
            अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.
          </p>
        </div>
        <div class="card_sub-two Multi_tabs">
          <img
            class="Multi_screen"
            src="./Assets/device-pile-in.png"
            alt="Multi screen"
          />
          <video
            class="Multi_video"
            src="./Assets/video-devices-in.m4v"
            autoplay
            loop
            muted
          ></video>
        </div>
      </div>
    </section>
    <hr />

    <section class="cards container">
      <div class="card_one row-rev">
        <div class="card_sub-one">
          <h2 class="card_title">बच्चों के लिए प्रोफ़ाइल बनाएं</h2>
          <p class="card_description">
            बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर
            जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.
          </p>
        </div>
        <div class="card_sub-two row-rev-pad">
          <img class="tv_screen" src="./Assets/kids.png" alt="kids show" />
        </div>
      </div>
    </section>
    <hr />
  </section>

  <section class="FAQ container">
    <div class="faq_header">
      <h2 class="faq_title">अक्सर पूछे जाने वाले सवाल</h2>
    </div>

    <div class="faq_content">
      <div class="faq_content_title">
        <h3 class="faq_content_subtitle">Netflix क्या है?</h3>
        <button class="faq_content_close">
          <img class="close_btn" src="./Assets/x.svg" alt="close" />
        </button>
      </div>
      <div class="faq_content_content">
        <p class="faq_infoContent">
          Netflix एक स्ट्रीमिंग सर्विस है जिसके ज़रिए आप हज़ारों इंटरनेट-कनेक्टेड
          डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो, फ़िल्में, ऐनिमे,
          डॉक्यूमेंट्रीज़ का लुत्फ़ उठा सकते हैं.
          <br />
          <br />
          आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं – सारा
          कॉन्टेंट बहुत कम मासिक शुल्क पर. खोजने के लिए हमेशा कुछ नया होता है और
          हर हफ़्ते नए टीवी शो और फ़िल्में जोड़ी जाती हैं!
        </p>
      </div>
    </div>

    <div class="faq_content">
      <div class="faq_content_title">
        <h3 class="faq_content_subtitle">Netflix की कीमत कितनी है?</h3>
        <button class="faq_content_close">
          <img class="close_btn" src="./Assets/x.svg" alt="close" />
        </button>
      </div>
      <div class="faq_content_content">
        <p class="faq_infoContent">
          हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप,
          या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर महीने ₹149 से ₹649 तक के
          प्लान. कोई एक्सट्रा कीमत या कॉन्ट्रैक्ट नहीं.
        </p>
      </div>
    </div>

    <div class="faq_content">
      <div class="faq_content_title">
        <h3 class="faq_content_subtitle">मैं कहां देख सकता हूं?</h3>
        <button class="faq_content_close">
          <img class="close_btn" src="./Assets/x.svg" alt="close" />
        </button>
      </div>
      <div class="faq_content_content">
        <p class="faq_infoContent">
          कहीं भी, कभी भी देखें. तुरंत देखने के लिए वेब पर netflix.com पर जाकर
          अपने Netflix अकाउंट से साइन इन करें. आप Netflix ऐप ऑफ़र करने वाले
          इंटरनेट से जुड़े किसी भी डिवाइस से साइन इन कर सकते हैं जैसे कि आपका
          पर्सनल कंप्यूटर या स्मार्ट टीवी, स्मार्ट फ़ोन, टैबलेट, स्ट्रीमिंग
          मीडिया प्लेयर और गेम कंसोल.
          <br /><br />
          आप iOS या Android ऐप से भी अपने पसंदीदा शो डाउनलोड कर सकते हैं.
          चलते-फिरते और बिना इंटरनेट कनेक्शन के देखने के लिए डाउनलोड का उपयोग
          करें. Netflix को अपने साथ कहीं भी ले जाएं.
        </p>
      </div>
    </div>

    <div class="faq_content">
      <div class="faq_content_title">
        <h3 class="faq_content_subtitle">मैं कैसे कैंसल करूं?</h3>
        <button class="faq_content_close">
          <img class="close_btn" src="./Assets/x.svg" alt="close" />
        </button>
      </div>
      <div class="faq_content_content">
        <p class="faq_infoContent">
          Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और कोई बंधन
          नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट ऑनलाइन कैंसल कर सकते
          हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना अकाउंट कभी भी शुरू या बंद करें.
        </p>
      </div>
    </div>

    <div class="faq_content">
      <div class="faq_content_title">
        <h3 class="faq_content_subtitle">
          मैं Netflix पर क्या देख सकता/सकती हूं?
        </h3>
        <button class="faq_content_close">
          <img class="close_btn" src="./Assets/x.svg" alt="close" />
        </button>
      </div>
      <div class="faq_content_content">
        <p class="faq_infoContent">
          Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी
          शो, ऐनिमे, अवॉर्ड-विनिंग Netflix ओरिजिनल्स के अलावा और भी बहुत कुछ है.
          आप जितना चाहें, कभी भी देखें.
        </p>
      </div>
    </div>

    <div class="faq_content">
      <div class="faq_content_title">
        <h3 class="faq_content_subtitle">क्या Netflix बच्चों के लिए ठीक है?</h3>
        <button class="faq_content_close">
          <img class="close_btn" src="./Assets/x.svg" alt="close" />
        </button>
      </div>
      <div class="faq_content_content">
        <p class="faq_infoContent">
          आपकी मेंबरशिप में Netflix किड्स एक्सपीरियंस शामिल है. बच्चे अपनी तरह
          से पारिवारिक टीवी शो और फ़िल्मों का आनंद लेते हैं, लेकिन आप उनके
          द्वारा देखे जाने वाले कॉन्टेंट को कंट्रोल कर सकते हैं.
          <br /><br />
          बच्चों की प्रोफ़ाइल में PIN से सुरक्षित पैरेंटल कंट्रोल्स होते हैं
          जिससे आप बच्चों को मेच्योरिटी रेटिंग वाले कॉन्टेंट देखने से रोक सकते
          हैं और उन टाइटल को ब्लॉक कर सकते हैं जिन्हें आप नहीं चाहते हैं कि
          बच्चे देखें.
        </p>
      </div>
    </div>
  </section>

  <section class="email container">
    <div class="email-one">
      <p class="email-title">
        देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.
      </p>
    </div>

    <div class="email-two">
      <div class="email_wrap">
        <input type="email" id="twoEmail" autocomplete="off" />
        <label class="email_input-label" for="twoEmail">ईमेल एड्रेस</label>
      </div>
      <button class="get-started get-started-one">
        शुरू करें <img src="./Assets/arrow.svg" alt="arrow" />
      </button>
    </div>
  </section>
  <hr />

  <section class="footer-section container">
    <footer class="footer">
      <h5 class="footer-title">
        कोई सवाल है? <a href="#">000-800-919-1694</a> पर कॉल करें
      </h5>
      <nav class="footer-nav">
        <ul class="footer_nav_one">
          <div class="first">
            <div class="divOne">
              <li class="nav-item"><a href="#">FAQ</a></li>
            </div>
            <li class="nav-item"><a href="#">सहायता केंद्र</a></li>
          </div>
          <div class="second">
            <div class="divTwo">
              <li class="nav-item"><a href="#">अकाउंट</a></li>
            </div>
            <li class="nav-item"><a href="#">मीडिया केंद्र</a></li>
          </div>
        </ul>
        <ul class="footer_nav_two">
          <div class="first">
            <div class="divOne">
              <li class="nav-item"><a href="#">इंवेस्टर संबंध</a></li>
            </div>
            <li class="nav-item"><a href="#">नौकरियां</a></li>
          </div>
          <div class="second">
            <div class="divTwo">
              <li class="nav-item"><a href="#">देखने के तरीके</a></li>
            </div>
            <li class="nav-item"><a href="#">उपयोग की शर्तें</a></li>
          </div>
        </ul>
        <ul class="footer_nav_three">
          <div class="first">
            <div class="divOne">
              <li class="nav-item"><a href="#">प्रायवेसी</a></li>
            </div>
            <li class="nav-item"><a href="#">कुकी प्रेफ़रेंस</a></li>
          </div>
          <div class="second">
            <div class="divTwo">
              <li class="nav-item"><a href="#">कॉरपोरेट जानकारी</a></li>
            </div>
            <li class="nav-item"><a href="#">हमसे संपर्क करें</a></li>
          </div>
        </ul>
        <ul class="footer_nav_four">
          <div class="first">
            <div class="divOne">
              <li class="nav-item"><a href="#">स्पीड टेस्ट</a></li>
            </div>
            <li class="nav-item"><a href="#">सिर्फ़ Netflix पर</a></li>
          </div>
          <div class="second">
            <div class="divTwo">
              <li class="nav-item"><a href="#">कानूनी सूचनाएं</a></li>
            </div>
          </div>
        </ul>
      </nav>

      <div class="language-box-footer">
        <img
          class="language_image-footer"
          src="./Assets/language.svg"
          alt="language"
        />
        <select name="language" id="language_select-footer">
        <option value="English">English</option>
            <option value="हिन्दी">हिन्दी</option>
        </select>
      </div>
      <h5 class="footer_subTitle">Netflix भारत</h5>
    </footer>
  </section>

`;

function demo() {
  let faqDiv = document.querySelectorAll(".faq_content_title");
  let closeBtns = document.querySelectorAll(".close_btn");
  
  
  faqDiv.forEach((e, index) => {
    e.addEventListener("click", function () {
      let contentFaq = this.nextElementSibling;
      let closeBtn = closeBtns[index];
  
      contentFaq.classList.toggle("active");
      if (contentFaq.className === "faq_content_content active") {
        closeBtn.style.transform = "rotate(0deg)";
      } else {
        closeBtn.style.transform = "rotate(45deg)";
      }
  
      faqDiv.forEach((remove, idx) => {
        if (idx !== index) {
          let removeDiv = remove.nextElementSibling;
          removeDiv.classList.remove("active");
          closeBtns[idx].style.transform = "rotate(45deg)";
        }
      });
    });
  });
}

let selectElm = document.querySelector("select");
let engDiv = document.querySelector(".englishDiv");
let hindiDiv = document.querySelector(".hindiDiv");
let signIn = document.querySelector(".sign_in ");

selectElm.addEventListener("change", function (e) {
  if (e.target.value === "English") {
    engDiv.appendChild(englishText)
    hindiDiv.innerHTML = "";
    signIn.innerHTML = "Sign In"
    signIn.classList.remove('hindi_signIn')
  }

  if (e.target.value === "हिन्दी") {
    engDiv.innerHTML = ''
    hindiDiv.appendChild(hindiText);
    signIn.innerHTML = "साइन इन करें";
    signIn.classList.add('hindi_signIn')
    videos()
    demo()
  }
});



function videos() {
  let tvVideo = document.querySelector('.tv_video')
  let multiVideo = document.querySelector('.Multi_video')
  tvVideo.outerHTML = `<video class="tv_video" src="./Assets/video-tv-in-0819.m4v" autoplay loop muted></video>`
  multiVideo.outerHTML = `<video class="Multi_video" src="./Assets/video-devices-in.m4v" autoplay loop muted></video>`
}