<template>
    <body class="main">
        <form
  action="https://formspree.io/f/xwkdejzz"
  method="POST"
>
<div class="form" name="form">
    <input type="text" class="form-control" autocomplete="off"
   placeholder="First name" name="First name" required oninvalid="this.setCustomValidity('Whats your Name!')"
   oninput="setCustomValidity('')">

    <input type="text" class="form-control" autocomplete="off" placeholder="Last name" name="Last name" required oninvalid="this.setCustomValidity('I need a Surname!')"
    oninput="setCustomValidity('')">

    <input type="email" 
    class="form-control" 
    placeholder="Email:" autocomplete="off" name="email" required oninvalid="this.setCustomValidity('Email is required as Usual!')"
    oninput="setCustomValidity('')">

    <textarea type="text"
    class="form-control"
    placeholder="Message:" name="message" autocomplete="off" required oninvalid="this.setCustomValidity('Dont you want to say anything!')"
    oninput="setCustomValidity('')"></textarea>
    
  <button class="btn btn-outline-info" type="submit">SUBMIT</button><br>
</div>
</form> 
    </body>
</template>

<script>
    export default {
      
    };
</script>

<style scoped>

.line {
    border-bottom: 2px solid rgb(0, 0, 0);
    margin-top: 5px;
    width: 100%;
  }
.div{
    display: flex;
    justify-content:end;
    color: whitesmoke;
}
.form {
    display: flex;
    padding: 15px;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    margin-top: 80px;
    width: 18rem;
    margin-bottom: 70px;
    gap: 1rem;
  }
  .form-control {
    margin: 8px;
    border: 2px rgb(59, 183, 202) solid;
    text-align: left;
    box-shadow: 10px 10px 2px rgba(0, 0, 0, 0.2);
    transition: 500ms;
  }

  .form-control:focus {
    border: 2px rgb(202, 59, 59) solid;
    transition: 200ms;
  }
  .btn {
    box-shadow: 0px 0px 20px lightseagreen;
    outline: 2px solid;
    outline-color: lightseagreen;
    transition: 500ms;
  }
  
  .btn:hover {
    box-shadow: 0px 0px 20px rgb(243, 31, 31), 0 0 20px lightblue;
    outline-color: lightskyblue;
    outline-offset: 10px;
    text-shadow: lightseagreen;
  }

  .main {
    background-color: rgb(74, 73, 73);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin-bottom: -100px;
  }
</style>