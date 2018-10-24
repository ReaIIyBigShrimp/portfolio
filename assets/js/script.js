$(document).ready(function(){
    // Side nav
    var sideNavElems = document.querySelectorAll('.sidenav');
    var sideNavArray = M.Sidenav.init(sideNavElems);

    // Paralax
    var paralaxElems = document.querySelectorAll('.parallax');
    var paralaxElemsArray = M.Parallax.init(paralaxElems);
    
    // Resets SVG animation, then plays
    var resetSVG = function(){
        $('#svg_bg').removeClass('svg-bg');
        ddr.reset().play();
    };

    $('#ddr').click(function(){
        resetSVG();
    });
    // Used to log if the user has already hovered over the DDR SVG
    var svgHasHovered = false;
    $('#ddr').hover(function(){
        if (svgHasHovered != true) {
            resetSVG();
        }
        svgHasHovered = true;
    });
    

    var ddr = new Vivus('ddr', {type: 'delayed', start: 'autostart', duration: 200}, function(){
        // Background of SVG to white, using CSS class change
        $('#svg_bg').addClass("svg-bg");
    });

    // Heading typing animation 
    var typed = new Typed('#typed_name', {
        strings: ["DDR", "Darryl Dolan-Rathmell"],
        typeSpeed: 50
    });

    

    function sendEmail() {
        window.open('mailto:darryl.dolan@hotmail.co.uk?subject=Darryl is Awesome');
    };

    $('#email').click(function(){
        sendEmail();
    });

    
    
});