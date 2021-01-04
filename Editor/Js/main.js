
window.onload = function () {
    var mobile_frame = document.getElementById("mobile-button");
        default_frame = document.getElementById("default-button");
        fullscreen_frame = document.getElementById("fullscreen-button");
        grid = document.getElementById("grid");
        aside = document.getElementById("editor-aside-menu");
    var frame = document.getElementById("editor-frame-preview");
    
    var frame_size = document.getElementById("frame-size-box");
    var open_header_tab_button = document.getElementById("open-header-tab-button");
        close_header_tab_button = document.getElementById("close-header-tab-button");
        
        open_footer_tab_button = document.getElementById("open-footer-tab-button");
        close_footer_tab_button = document.getElementById("close-footer-tab-button");

        open_slider_tab_button = document.getElementById("open-slider-tab-button");
        close_slider_tab_button = document.getElementById("close-slider-tab-button");

        open_card_tab_button = document.getElementById("open-card-tab-button");
        close_card_tab_button = document.getElementById("close-card-tab-button");

        open_testimonial_tab_button = document.getElementById("open-testimonial-tab-button");
        close_testimonial_tab_button = document.getElementById("close-testimonial-tab-button");

        open_service_tab_button = document.getElementById("open-service-tab-button");
        close_service_tab_button = document.getElementById("close-service-tab-button");

        open_textimg_tab_button = document.getElementById("open-text--and--image-tab-button");
        close_textimg_tab_button = document.getElementById("close-text--and--image-button");

        open_blog_tab_button = document.getElementById("open-blog-tab-button");
        close_blog_tab_button = document.getElementById("close-blog-tab-button");
    
    var close_tab_button = document.querySelectorAll("[data-close-tab]")
    

    var headerInputs = document.querySelectorAll("[data-section='header-color']");
        footerInputs = document.querySelectorAll("[data-section='footer-color']");

    function show_active(active, n1, n2, n3, n4) {
        active.addEventListener('click', function () {
            n1.classList.remove("button-primary");
            n2.classList.remove("button-primary");
            n3.classList.remove("msf-2")
            n4.classList.remove("full-screen-view_grid")
        });
    };

    mobile_frame.addEventListener('click', function () {
        frame_size.classList.add("mobile-size-frame");
        mobile_frame.classList.add("button-primary");
    });show_active(mobile_frame, default_frame, fullscreen_frame, aside, grid);
    
    default_frame.addEventListener('click', function () {
        frame_size.classList.remove("mobile-size-frame");
        default_frame.classList.add("button-primary");
    });show_active(default_frame, mobile_frame, fullscreen_frame, aside, grid);

    fullscreen_frame.addEventListener('click', function () {
        frame_size.classList.remove("mobile-size-frame");
        grid.classList.add("full-screen-view_grid");
        aside.classList.add("msf-2");
        fullscreen_frame.classList.add("button-primary");
    });show_active(fullscreen_frame, mobile_frame, default_frame);

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
    };
    change_color(headerInputs, 'header');
    change_color(footerInputs, 'footer');


    document.getElementById("add-text").value = frame.contentDocument.getElementById("live-text").textContent;
    addEvent(document.getElementById("add-text"), "keyup", function () {
        frame.contentDocument.getElementById("live-text").innerHTML = this.value.split(" ").join(" ");
    });

    function addEvent(ele, evnt, funct) {
        if (ele.addEventListener)
            // W3C
            return ele.addEventListener(evnt, funct, false);
        else if (ele.attachEvent)
            // IE
            return ele.attachEvent("on" + evnt, funct);
    }

    var header_tab = document.getElementById("header-tab");
    var slider_tab = document.getElementById("slider-tab");
    var text_and_image_tab = document.getElementById("text-and-image-tab");
    var card_tab = document.getElementById("card-tab");
    var service_tab = document.getElementById("service-tab");
    var testimonial_tab = document.getElementById("testimonial-tab");
    var blog_tab = document.getElementById("blog-tab");
    var footer_tab = document.getElementById("footer-tab");
    
    function open_tab(x, y, z) {
        y.addEventListener('click', function () {
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
            frame.src = 'Free/index.html#' + z;
        });
    }
    function close_tab(x, y) {
        y.addEventListener("click", function () {
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        });
    }
    
    open_tab(header_tab, open_header_tab_button, 'header');
    close_tab(header_tab, close_header_tab_button);
    open_tab(card_tab, open_card_tab_button, 'card-section');
    //close_tab(card_tab, close_card_tab_button);
    open_tab(slider_tab, open_slider_tab_button, 'slider-section');
    close_tab(slider_tab, close_slider_tab_button);
    open_tab(text_and_image_tab, open_textimg_tab_button, 'text-and-image-section');
    //close_tab(text_and_image_tab, close_textimg_tab_button)
    open_tab(blog_tab, open_blog_tab_button, 'blog-section');
    //close_tab(blog_tab, close_blog_tab_button);
    open_tab(testimonial_tab, open_testimonial_tab_button, 'testimonial-section');
    //close_tab(testimonial_tab, close_testimonial_tab_button);
    open_tab(service_tab, open_service_tab_button, 'service-section');
    //close_tab(service_tab, close_service_tab_button);
    open_tab(footer_tab, open_footer_tab_button, 'footer');
    close_tab(footer_tab, close_footer_tab_button);
    
};
