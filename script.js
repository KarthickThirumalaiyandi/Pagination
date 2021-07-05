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
    
    let pag 
    if (pg == 1 || pg == 'f')
    {
        pag = 0
        pk  = 9
        spg = pg
    }
    else 
        if (pg == 2)
    {
        pag = 10
        pk  = 19
        spg = pg
    }
    else 
         if (pg == 3)
        {
        pag = 20
        pk = 29
        spg = pg

      
        }
    else
    if(pg == 4)
        {
            pag = 30
            pk = 39
            spg = pg

        }
        else if (pg == 5)
        {
            pag = 40
            pk = 49
            spg = pg

        }
        else if (pg == 6)
        {
            pag = 50
            pk = 59
            spg = pg

        }   
        else if (pg == 7)
        {
            pag = 60
            pk = 69
            spg = pg

        }
        else if (pg == 8)
        {
            pag = 70
            pk = 79
            spg = pg

        }
        else if (pg == 9)
        {
            pag = 80
            pk = 89
            spg = pg

        } 
        else if (pg == 10 || pg=='l' )
        {
            pag = 90
            pk = 99
            spg = pg

        } 

        if (spg==1 && pg=='p')
        {
            pag = 0
            pk  = 9
        }
        else if (spg==2 && pg=='p')
        {
            pag = 0
            pk  = 9
            spg=spg-1
        }
        else if (spg==3 && pg=='p')
        {
            pag = 10
            pk  = 19
            spg=spg-1
        }
        else if (spg==4 && pg=='p')
        {
            pag = 20
            pk  = 29
            spg=spg-1
        }
        else if (spg==5 && pg=='p')
        {
            pag = 30
            pk  = 39
            spg=spg-1
        }
        else if (spg==6 && pg=='p')
        {
            pag = 40
            pk  = 49
            spg=spg-1
        }
        else if (spg==7 && pg=='p')
        {
            pag = 50
            pk  = 59
            spg=spg-1
        }
        else if (spg==8 && pg=='p')
        {
            pag = 60
            pk  = 69
            spg=spg-1
        }
        else if (spg==9 && pg=='p')
        {
            pag = 70
            pk  = 79
            spg=spg-1
        }
        else if (spg==10 && pg=='p')
        {
            pag = 80
            pk  = 89
            spg=spg-1
        }
        else if(pg=='p' && spg=='l')
        {
            pag=80
            pk=89
            spg=9
        }
           
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

for(let j=pag;j<=pk;j++)
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

div1.append(table)
document.body.append(div1)

function createthtd(ele,value=' ')
{
    var td = document.createElement(ele)
    td.innerHTML=value
    return td
}
}
