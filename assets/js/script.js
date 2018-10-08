$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    
    // Resets SVG animation, then plays
    var resetSVG = function(){
        $('#svg_bg').removeClass('svg-bg');
        ddr.reset().play();
    };

    $('#ddr').click(function(){
        resetSVG();
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
});