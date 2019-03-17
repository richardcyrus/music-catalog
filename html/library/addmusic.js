function myFunction() {
    $('button').click(function(){ 
        $(this).attr("disabled","disabled");
    });

    {var x = document.createElement("INPUT");
    x.setAttribute("type", "file");
    document.body.appendChild(x);}
}

