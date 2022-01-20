if(Push.Permission.get() != 'granted'){
    Push.Permission.request()
}

if(Push.Permission.get() == 'granted'){
    Push.create("Olá, sou uma notificação",{
        body:"Como você vai?",
        icon:'icon/png',
        timeout:8000,
        onClick: function(){
            window.focus()
            this.close
        }
    })
}

