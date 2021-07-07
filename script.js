var spg;
var req = new XMLHttpRequest();
req.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
req.send();
req.onload=function(){
    var data = JSON.parse(this.response);
 
var p = 1;
var det = data
createtable(p,det)

var divi = document.createElement('div');
divi.className="divc"
for (let i=1;i<11;i++)
{
    var button = document.createElement('button');
    button.setAttribute('class',i)
    button.innerHTML=i
    button.addEventListener('click', () => cd(i,data));
    divi.append(button) 

}

    var button = document.createElement('button');
    button.setAttribute('class','f')
    button.innerHTML='First'
    button.addEventListener('click', () => cd('f',data));
    divi.append(button) 
    //document.body.append(divi);

    var button = document.createElement('button');
    button.setAttribute('class','l')
    button.innerHTML='Last'
    button.addEventListener('click', () => cd('l',data));
    divi.append(button) 
    //document.body.append(divi);

    var button = document.createElement('button');
    button.setAttribute('class','p')
    button.innerHTML='Prev'
    button.addEventListener('click', () => cd('p',data));
    divi.append(button) 
    document.body.append(divi);

}

function cd(pm,data)
{
    var tab = document.getElementById("intab")
    tab.remove()
  createtable(pm,data);    
}

function createtable(pg,detail)
{           
var div1 = document.createElement('div')
div1.setAttribute("id","intab")
document.body.append(div1)
var table = document.createElement('table');
table.setAttribute("id","tab2")
table.className="tab1";

var thead = document.createElement('thead');
var tr=document.createElement('tr');
var th1= createthtd('th','ID')
var th2= createthtd('th','Name')
var th3= createthtd('th','Email')
th1.className="tdw1";
th2.className="tdw2";
th3.className="tdw4";
tr.append(th1,th2,th3);
thead.append(tr)

var tbody = document.createElement('tbody');

if (pg<11)
{
    putdata();   
}
else
{
    if (pg=='f')
    {
        pg = 1;
        putdata()    
    }
    else if (pg == "l")
    {
            pg = 10;
            putdata()            
    }
    else if (pg = 'p')
    {
        pg = spg; 
        putdata()
    }  
}

if (pg===1)
{
    spg = 1;
}   
else{
    spg = (pg-1);
    }
div1.append(table)
document.body.append(div1)

function putdata()
{
    for(let j=((pg-1)*10);j<(pg*10);j++)
    {
    var tr=document.createElement('tr');
    var td1= createthtd('td',detail[j].id)
    td1.className="tdw1";
    var td2= createthtd('td',detail[j].name)
    td2.className="tdw2";
    var td3= createthtd('td',detail[j].email)
    td3.className="tdw4";
    tr.append(td1,td2,td3);
    tbody.append(tr)
    table.append(thead,tbody)
}
}



function createthtd(ele,value=' ')
{
    var td = document.createElement(ele)
    td.innerHTML=value
    return td
}
}
