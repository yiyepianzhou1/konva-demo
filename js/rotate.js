/*
* @Author: Administrator
* @Date:   2017-06-14 20:15:46
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-27 10:34:42
*/

// 'use strict';

//旋转封装
function rotate(potion){
   this._init(potion)
}
rotate.prototype = {
    _init:function(potion){
    	this.x = potion.x || 0;
    	this.y = potion.y || 0;
    	this.text = potion.text || '';
    	this.innerRadius = potion.innerRadius || 0;
    	this.outerRadius = potion.outerRadius || 0;
    	this.fillStyle = potion.fill;
    	this.outerStyle = potion.fillOut;
    	this.opacity = potion.opacity;
    	this.name = potion.name
    	//创建组group
    	this.group = new Konva.Group({
    		x:this.x,
    		y:this.y,
    		name:this.name
    	})
    	//创建圆
      var circle_01 = new Konva.Circle({
       	x:0,
         y:0,
         radius:this.innerRadius,
         fill:this.fillStyle,
         opacity:this.opacity
       })
      //添加到组中
      this.group.add(circle_01)
      //创建圆环
      var ring = new Konva.Ring({
      	x:0,
      	y:0,
      	innerRadius:this.innerRadius,
      	outerRadius:this.outerRadius,
      	fill:this.outerStyle,
      	opacity:.5
      })
      //将圆环添加至组中
      this.group.add(ring)
      //创建文字
      var text = new Konva.Text({
      	x:0-this.outerRadius/2,
      	y:0,
      	width:this.outerRadius,
      	align:'center', 
      	fill:'#fff',
      	text:this.text,
      	fontSize:17,
      	fontStyle:'bold'
      })
       this.group.add(text);
    },
    addgroup:function(layer){
    	layer.add(this.group)
    }
}


// //柱状图绘制
// function Cude(potion) {
// 	//自调用模式
// 	this._init(potion)
// }
// Cude.prototype = {
// 	to:function(ele,name){
//       this.ele = ele;
//       this.names = name;
// 	},
// 	_init:function(potion){
//       this.x = potion.x ||0;
//       this.y = potion.y ||0;
//       this.text = potion.text || '';
//       this.width = potion.width || 10;
//       this.height = potion.height || 10;
//       this.arrs = potion.arrs || [];
//       for(var i=0 ;i<this.arrs.length;i++){
//       	var rects = new Konva.Rect({
//       		name:this.names,
//       		x:(this.x+10)*i,
//       		y:this.y-this.arrs[i].value*this.height,
//       		width:this.width,
//       		height:this.arrs[i].value*this.height,
//       		fill:this.arrs[i].color
//       	})

//       	var txt = new Konva.Text({
//       		x:(this.x+10)*i,
//       		y:this.y,
//       		text:this.text,
//       		fill:arrs[i].color
//       	})
//          this.ele.add(rects),
//          this.ele.add(txt)
//       }
// 	}
// }


// function phree(){}
// phree.prototype = {

// }


