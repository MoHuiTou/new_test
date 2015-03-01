/**
 * Created by haochenli on 15/2/8.
 */
    /* test*/
var express=require('express');
var path=require('path');
var port=process.env.PORT || 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname,"bower_components")));
app.listen(port);

app.get('/',function(req,res){
    res.render('index',{title:'imooc main page'});
});
app.get('/admin',function(req,res){
    res.render('admin',{title:'admin'});
});
app.get('/list',function(req,res){
    res.render('list',{title:'list'});
});
//detail
app.get('/detail',function(req,res){
    res.render('detail',{title:'detail'});
});
