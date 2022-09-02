var FreqStack = function() {
  this.frequency = new Map();
  this.group = new Map();
  this.maxFrequency = 0
};

FreqStack.prototype.push = function(showName) {
  if(this.frequency[showName]){
      this.frequency[showName]++;
  }
  else
      this.frequency[showName] = 1;
  
  if(this.frequency[showName] > this.maxFrequency)
      this.maxFrequency = this.frequency[showName];

  if(this.group.has(this.frequency[showName]))
      this.group.get(this.frequency[showName]).push(showName);      
  else{
      this.group.set(this.frequency[showName],[]);
      this.group.get(this.frequency[showName]).push(showName);    
  }
  console.dir(this.group)     
};


FreqStack.prototype.pop = function() {
  if(this.group.has(this.maxFrequency)){
          var show = this.group.get(this.maxFrequency).pop();
          this.frequency[show]--;
          if(this.group.get(this.maxFrequency).length == 0)
          this.maxFrequency--;
          return show;
  }
  return "";
};

var obj = new FreqStack();
obj.push("Queen's Gambit");
obj.push("Teen Wolf");
obj.push("Queen's Gambit");
obj.push("Teen Wolf");
obj.push("Bigderton");
obj.push("Queen's Gambit");
for (var i = 0; i < 7; i++){
  console.log("...User navigates to the browser...");
  console.log("Continue Watching :",obj.pop());
  console.log();
}
  
