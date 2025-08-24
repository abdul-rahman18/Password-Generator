function changeRange(val)
{
    document.querySelector("#showLen").innerHTML=val;
}

function generatePassword()
{
    let len = parseInt(document.querySelector("#len").value);
    let upper = document.getElementById("uppercase").checked;
    let nums = document.getElementById("numbers").checked;
    let specChar = document.getElementById("specialChar").checked;
    let pass = genPass(len,upper,nums,specChar);
    document.getElementById("fpassword").textContent = pass;
}

function genPass(len,upper,nums,specChar)
{
    let l = "abcdefghijklmnopqrstuvwxyz";
    let u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let n = "0123456789";
    let sp = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    let p = l;
    if(upper) p+=u;
    if(nums) p+=n;
    if(specChar) p+=sp;
    let password = "";
    for(let i=0;i<len;i++)
    {
        let random = Math.floor(Math.random()*p.length);
        password += p[random];
    }
    return password;
}

function reset()
{
    document.getElementById("len").value = 8;
    document.getElementById("uppercase").checked = false;
    document.getElementById("numbers").checked = false;
    document.getElementById("specialChar").checked = false;
     document.getElementById("fpassword").textContent = "Generated Password";
}