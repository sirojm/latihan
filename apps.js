const pass_field = document.querySelector('.password');
        const show_btn = document.querySelector('.show');
        show_btn.addEventListener('click',function(){
            if(pass_field.type === "password"){
                pass_field.type = "text";
                document.getElementById('show_btn').style.display = "none";
                document.getElementById('hide_btn').style.display = "block";
            }else{
                pass_field.type = "password";
                document.getElementById('show_btn').style.display = "block";
                document.getElementById('hide_btn').style.display = "none";
            }
        })