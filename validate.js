function validatef()
{
    var u=document.getElementById("username");
    var p=document.getElementById("password");

    if(u.value.length==0)
    {
        alert("Enter username");
        return false;
    }

    if(p.value.length==0)
    {
        alert("Enter password");
        return false;
    }



}