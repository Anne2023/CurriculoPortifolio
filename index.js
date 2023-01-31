
    var header = document.getElementById ('header');
    var navigationheader = document.getElementById('nagivation_header');
    var content = document.getElementById('content');
    var showSidebar = false;

    function toggleSidebar()
    {
        showSidebar = !showSidebar;
        if(showSidebar)
        {
            navigationheader.style.marginLeft = '-10vw'; 
            navigationheader.style.animationName = 'showSidebar'; 
            content.style.filter = 'blur (2px)'
        }
        else
        {
            navigationheader.style.marginLeft = '-100vw'; 
            navigationheader.style.animationName = '';
            content.style.filter = '';
        }
    }
    function closeSidebar()
    {
        if (showSidebar)
        {
            ToggleSidebar();
        }
    }
    window.addEventListener('resize', function (event){
        if (window.innerWidth > 768 && showSidebar)
        {
            toggleSidebar();
        }
    })