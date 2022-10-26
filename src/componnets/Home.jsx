// function e(){

//   const canvas= document.getElementById('canvas1');
//   const ctx = canvas.getContext('2d')
//   const image1 = new Image();
  
//   image1.src='data:image/jpeg;base64,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'
  
//   class Cell{
//       constructor(x,y,symbol,color){
//       this.x=x;
//       this.y=y;
//       this.symbol=symbol;
//       this.color=color;
  
//       }
//       draw(ctx)
//       {
//           ctx.fillStyle=this.color;
//           ctx.fillText(this.symbol,this.x,this.y);
//       }
//   }
  
//   class AsciEffect {
//   #imageCelAray = [];
//   #symbols= [];
//   #pixels = [];
//   #ctx;
//   #width;
//   #height;
  
//   constructor(ctx, width, height)
//   {
//   this.#ctx= ctx;
//   this.#width=width;
//   this.#height=height;
//   this.#ctx.drawImage(image1,0,0,this.#width,this.#height);
//   this.#pixels=this.#ctx.getImageData(0,0,this.#width,this.#height);
//   console.log(this.#pixels.data);
  
  
//   }
  
//   #convertToSymbol(avgColor){
    
//       if(avgColor>250)
//       {
//   return '@'
//       }
//       else if(avgColor>230) return '/';
//       else if(avgColor>220) return '!';
//       else if(avgColor>210) return '$';
//       else if(avgColor>200) return '%';
//       else if(avgColor>190) return '^';
//       else if(avgColor>180) return '&';
//       else if(avgColor>170) return '*';
//       else if(avgColor>160) return '(';
//       else if(avgColor>150) return ')';
//       else if(avgColor>140) return '_';
//       else if(avgColor>130) return '+';
//       else if(avgColor>120) return 'q';
//       else if(avgColor>110) return 'w';
//       else if(avgColor>100) return 'e';
//       else if(avgColor>90) return 'r';
//       else if(avgColor>80) return 't';
//       else if(avgColor>70) return 'y';
//       else if(avgColor>60) return 'u';
//       else if(avgColor>50) return 'i';
//       else if(avgColor>40) return 'o';
//       else if(avgColor>30) return 'p';
//       else if(avgColor>20) return '[';
//       else if(avgColor>10) return ']';
//       else return "0";
//   }
  
//   #scanImage(cellSize){
//       this.#imageCelAray=[];
//       for(let y=0; y<this.#pixels.height;y+=cellSize){
//           for(let x=0;x<this.#pixels.width; x+=cellSize){
//               const posX= x*4;
//               const posY= y*4;
//               const pos=(posY* this.#pixels.width)+posX;
  
//               if(this.#pixels.data[pos+3]>128){
//                   const red=this.#pixels.data[pos];
//                   const green=this.#pixels.data[pos+1];
//                   const blue= this.#pixels.data[pos+2];
//                   const total = red+green+blue;
//                   const avaregeColorValue =total/3;
//                   const color= "rgb(" +  red+ ","+green+","+blue+")";
//                   const symbol= this.#convertToSymbol(avaregeColorValue);
//                   if(total>100)this.#imageCelAray.push(new Cell(x,y,symbol,color));
  
  
//               }
//           }
  
//       }
//       console.log(this.#imageCelAray)
  
//   }
  
//   #drawAscii(){
//       this.#ctx.clearRect(0,0,this.#width,this.#height);
//       for(let i=0;i<this.#imageCelAray.length;i++)
//       {
//            this.#imageCelAray[i].draw(this.#ctx)
//       }
//   }
  
  
//   draw(cellSize){
//       this.#scanImage(cellSize);
//       this.#drawAscii();
//    }
  
//   }
  
  
  
  
//   let effect;
  
//   image1.onload= function initialize(){
//       canvas.width= image1.width;
//       canvas.height=image1.height
//       effect=new AsciEffect(ctx,image1.width,image1.height);
//       effect.draw(4);
    
//   }
//   }
  
//   e()