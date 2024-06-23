var myRequest = new XMLHttpRequest();
myRequest.onreadystatechange= function(){
    this.readyState == 4 && this.status == 20 ? console.log(this.responseText) : console.log('not found');
};
myRequest.open('GET','',true);
myRequest.send();