


function validation(event)
{
    event.preventDefault();



    let emailOrphn = event.target[0].value; 
    let password = event.target[1].value;

    let err1=document.getElementsByClassName('err1')[0]
    let isvalid=true
    let err=''
    if(emailOrphn=='')
    {
        isvalid=false;
        console.log( err1.innerText="Please enter the email and id")
        err+="*Please enter the email and id"
    }
    else if(password=='')
    {
        isvalid=false;
        err+="*Password is required.\n"
    }


    if(!isvalid)
    {
        err1.innerText=err;
        return false;
    }

    else{
        err.innerText='';
        alert('Form submitter successfully!')
        event.target.submit();
    }
}