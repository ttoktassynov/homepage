function foo()
{
    let name = document.querySelector("#name").value;
    let message = document.querySelector("#message").value;
    document.querySelector("#feed").innerHTML = "Hello, " + name + ". Your message  '" + message + "' has been sent. I will soon respond";
}