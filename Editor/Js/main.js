window.onload = function () {
    var body = document.body;
    var mobile_frame = document.getElementById("mobile-button"),
        default_frame = document.getElementById("default-button"),
        fullscreen_frame = document.getElementById("fullscreen-button"),
        grid = document.getElementById("grid"),
        aside = document.getElementById("editor-aside-menu");
    var frame = document.getElementById("editor-frame-preview");

    var frame_size = document.getElementById("frame-size-box");
    var open_header_tab_button = document.getElementById("open-header-tab-button"),
        close_header_tab_button = document.getElementById("close-header-tab-button"),
        open_footer_tab_button = document.getElementById("open-footer-tab-button"),
        close_footer_tab_button = document.getElementById("close-footer-tab-button"),
        open_book_tab_button = document.getElementById('open-book-tab-button'),
        close_book_tab_button = document.getElementById('close-book-tab-button'),
        open_slider_tab_button = document.getElementById("open-slider-tab-button"),
        open_slide1_button = document.getElementById("open-slide1-button"),
        close_slider_tab_button = document.getElementById("close-slider-tab-button"),
        close_slide1_tab_button = document.getElementById("close-slide1-tab-button");

        open_card_tab_button = document.getElementById("open-card-tab-button"),
        close_card_tab_button = document.getElementById("close-card-tab-button"),
        open_testimonial_tab_button = document.getElementById("open-testimonial-tab-button"),
        close_testimonial_tab_button = document.getElementById("close-testimonial-tab-button"),
        open_service_tab_button = document.getElementById("open-service-tab-button"),
        open_srv1_tab_button = document.getElementById("open-srv1-tab-button"),
        open_srv2_tab_button = document.getElementById("open-srv2-tab-button"),
        close_service_tab_button = document.getElementById("close-service-tab-button"),
        close_srv1_tab_button = document.getElementById("close-srv1-tab-button"),
        close_srv2_tab_button = document.getElementById("close-srv2-tab-button"),
        open_textimg_tab_button = document.getElementById("open-text--and--image-tab-button"),
        close_textimg_tab_button = document.getElementById("close-text--and--image-tab-button"),
        open_blog_tab_button = document.getElementById("open-blog-tab-button"),
        close_blog_tab_button = document.getElementById("close-blog-tab-button");

    var close_tab_button = document.querySelectorAll("[data-close-tab]");

    var headerInputs = document.querySelectorAll("[data-section='header-color']"),
        footerInputs = document.querySelectorAll("[data-section='footer-color']");

    function show_active(active, n1, n2, n3, n4) {
        active.addEventListener("click", function () {
            n1.classList.remove("button-primary");
            n2.classList.remove("button-primary");
            n3.classList.remove("msf-2");
            n4.classList.remove("full-screen-view_grid");
        });
    }

    mobile_frame.addEventListener("click", function () {
        frame_size.classList.add("mobile-size-frame");
        mobile_frame.classList.add("button-primary");
    });
    show_active(mobile_frame, default_frame, fullscreen_frame, aside, grid);

    default_frame.addEventListener("click", function () {
        frame_size.classList.remove("mobile-size-frame");
        default_frame.classList.add("button-primary");
    });
    show_active(default_frame, mobile_frame, fullscreen_frame, aside, grid);

    fullscreen_frame.addEventListener("click", function () {
        frame_size.classList.remove("mobile-size-frame");
        grid.classList.add("full-screen-view_grid");
        aside.classList.add("msf-2");
        fullscreen_frame.classList.add("button-primary");
    });
    show_active(fullscreen_frame, mobile_frame, default_frame);

    const handleThemeUpdate = (cssVars) => {
        const root = frame.contentDocument.querySelector(":root");
        const keys = Object.keys(cssVars);
        keys.forEach((key) => {
            root.style.setProperty(key, cssVars[key]);
        });
    };
    function change_color(input_area, place) {
        input_area.forEach((item) => {
            item.addEventListener("input", (e) => {
                const cssPropName = `--${place}-${e.target.getAttribute("data-id")}`;
                console.log(cssPropName);
                handleThemeUpdate({
                    [cssPropName]: e.target.value,
                });
            });
        });
    }
    change_color(headerInputs, "header");
    change_color(footerInputs, "footer");

    //live-text//
    function live_text(write, show, change_tabname) {
        frame.contentDocument.getElementById(`${show}`).textContent = document.getElementById(`${write}`).value;
        addEvent(document.getElementById(`${write}`), "keyup", function () {
            frame.contentDocument.getElementById(`${show}`).textContent = this.value.split(" ").join(" ");
        });

        function addEvent(ele, evnt, funct) {
            if (ele.addEventListener)
                // W3C
                return ele.addEventListener(evnt, funct, false);
            else if (ele.attachEvent)
                // IE
                return ele.attachEvent("on" + evnt, funct);
        }
    }

    live_text("add-text", "slider-live-text1");
    live_text("add-subtext", "slider-live-subtext1");
    live_text("add-button-label1", "slider-bl1");
    live_text("add-button-label2", "txt-btn1");
    live_text("add-button-label3", "txt-btn2");
    live_text("add-button-label4", "srv1-btn");
    //live_text("add-button-label5", "srv2-btn");
    live_text("add-formbutton-label1", "form-section-button");
    live_text("add-tag-text", "txt-tag1");
    live_text("add-srv1tag-text", "srv1-tag")
    live_text("add-text3", "txthd1");
    live_text("add-text4", "rooms-heading");
    live_text("add-text5", "srv1-hd");
    live_text("textarea-srv1-content", "srv1-text");
    //live_text("textarea-srv2-content", "srv2-text");
    
    /*function removeElement(id) {
        var elem = document.getElementById(id);
        return elem.parentNode.removeChild(elem);
    }
    function hide_button() {
        var button_label = document.getElementById("add-button-label1").value;
        var slider_button = frame.contentDocument.getElementById("slider-bl1");
        if (button_label.lenght == null) {
            slider_button.style.display= 'none';
        }
        else {
            slider_button.style.display= 'block';

        }
    
    };
    hide_button();*/

    function addhref(btn, label) {
        frame.contentDocument.getElementById(`${btn}`).href = document.getElementById(`${label}`).value;
        addEvent(document.getElementById(`${label}`), "keyup", function () {
            frame.contentDocument.getElementById(`${btn}`).href = this.value.split(" ").join(" ");
        });

        function addEvent(ele, evnt, funct) {
            if (ele.addEventListener)
                // W3C
                return ele.addEventListener(evnt, funct, false);
            else if (ele.attachEvent)
                // IE
                return ele.attachEvent("on" + evnt, funct);
        }
    };
    addhref('txt-btn1','pastelink2');
    addhref('txt-btn2','pastelink3');
    addhref( "slider-bl1", "add-button-label1");
    
    //live-text//

    /*var header_tab = document.getElementById("header-tab");
    var book_tab = document.getElementById("booking-form-tab");
    var slider_tab = document.getElementById("slider-tab");
    var slide1 = document.getElementById("slide1-tab");
    (slide2 = document.getElementById("slide2")), (slide3 = document.getElementById("slide3")), (slide4 = document.getElementById("slide4"));
    var text_and_image_tab = document.getElementById("text-and-image-tab");
    var card_tab = document.getElementById("card-tab");
    var service_tab = document.getElementById("service-tab");
    var testimonial_tab = document.getElementById("testimonial-tab");
    var blog_tab = document.getElementById("blog-tab");
    var footer_tab = document.getElementById("footer-tab");*/

    function open_tab(x, y, z) {
        y.addEventListener("click", function () {
            if (document.getElementById(x).style.display === "none") {
                document.getElementById(x).style.display = "block";
            } else {
                document.getElementById(x).style.display = "none";
             }
            frame.src = "Free/index.html#" + z;
        });
    }
    function close_tab(x, y) {
        y.addEventListener("click", function () {
            if (document.getElementById(x).style.display === "none") {
                document.getElementById(x).style.display = "block";
            } else {
                document.getElementById(x).style.display = "none";
            }
        });
    }

    open_tab('header-tab', open_header_tab_button, "header");
    close_tab('header-tab', close_header_tab_button);
    open_tab('booking-form-tab', open_book_tab_button, 'booking-form-section');
    close_tab('booking-form-tab', close_book_tab_button);
    open_tab('card-tab', open_card_tab_button, "card-section");
    close_tab('card-tab', close_card_tab_button);
    open_tab('slider-tab', open_slider_tab_button, "slider-section");
    close_tab('slider-tab', close_slider_tab_button);
    open_tab('slide1-tab', open_slide1_button, "slider-section");
    close_tab('slide1-tab', close_slide1_tab_button);
    open_tab('text-and-image-tab', open_textimg_tab_button, "text-and-image-section");
    close_tab('text-and-image-tab', close_textimg_tab_button)
    open_tab('blog-tab', open_blog_tab_button, "blog-section");
    //close_tab('blog-tab', close_blog_tab_button);
    open_tab('testimonial-tab', open_testimonial_tab_button, "testimonial-section");
    //close_tab('testimonial-tab', close_testimonial_tab_button);
    open_tab('service-tab', open_service_tab_button, "service-section");
    open_tab('srv1-tab', open_srv1_tab_button, "srv1");
    open_tab('srv2-tab', open_srv2_tab_button, "srv2");
    close_tab('service-tab', close_service_tab_button);
    close_tab('srv1-tab', close_srv1_tab_button);
    close_tab('srv2-tab', close_srv2_tab_button);
    open_tab('footer-tab', open_footer_tab_button, "footer");
    close_tab('footer-tab', close_footer_tab_button);

    /////textarea-edit///////

    var observe;
    if (window.attachEvent) {
        observe = function (element, event, handler) {
            element.attachEvent("on" + event, handler);
        };
    } else {
        observe = function (element, event, handler) {
            element.addEventListener(event, handler, false);
        };
    }
    var text = document.querySelectorAll(".textarea-content");

    function init() {
        text.forEach((text) =>{
            function resize() {
                text.style.height = "auto";
                text.style.height = text.scrollHeight + "px";
            }
            /* 0-timeout to get the already changed text */
            function delayedResize() {
                window.setTimeout(resize, 20);
            }
            observe(text, "change", resize);
            observe(text, "cut", delayedResize);
            observe(text, "paste", delayedResize);
            observe(text, "drop", delayedResize);
            observe(text, "keydown", delayedResize);
    
            text.focus();
            text.select();
            resize();
        });

    };
    body.addEventListener("load", init());
    /////textarea-edit///////

    ////upload-image////////
    /*var loadFile = function(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('output');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};*/

    var inputfile1 = document.querySelectorAll("#uplimg1");
    var inputfile2 = document.querySelectorAll("#uplimg2");
    function add_image1(img) {
        inputfile1.forEach((item) => {
            item.onchange = function() {
                var imgsrc = window.URL.createObjectURL(this.files[0]);
                frame.contentDocument.getElementById(`${img}`).style.backgroundImage = "url(" + imgsrc + ")";
            };
        });

    };
    function add_image2(img2) {
        inputfile2.forEach((item) => {
            item.onchange = function() {
                frame.contentDocument.getElementById(`${img2}`).src=window.URL.createObjectURL(this.files[0]);
            };  
        });
    };
    add_image1('slick-slide00');
    add_image2('txtimg1');


    /*onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])"*/
    ////upload-image////////
};
