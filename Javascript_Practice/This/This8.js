const object = {
    message: 'Hello, World!'
  };
  
  function logMessage() {
    console.log(this.message); // "Hello, World!"
  }

 logMessage.call(object)