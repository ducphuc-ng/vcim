// the Vietnamese Characters Input Method - VCIM, version 1.0.5
// Created by PhucND, 2017-Jul
var vcim = {
       version: '1.0.5',
       updated: '2019/02/15'
    };

var kbMode = ['EN', 'VN_TELEX', 'VN_VNI'];
var currentKBMode = kbMode[1];

var accentArr0 = [
        ['s', 'f', 'r', 'x', 'j', 'z', 'a', 'e', 'o', 'w', 'w', 'd'],
        ['1', '2', '3', '4', '5', '0', '6', '6', '6', '7', '8', '9'],
        ['1', '2', '3', '4', '5', '6', '9', '9', '9','10','10', '11']
];

var accentArr1 = [
        ['w', '\u01B0'],
        ['W', '\u01AF']
];

var accentArr2 = [
        ['a', 'a', '6', '\u00E2'],
        ['\u00E1',  'a', '6', '\u1EA5'],
        ['\u00E0',  'a', '6', '\u1EA7'],
        ['\u1EA3',  'a', '6', '\u1EA9'],
        ['\u00E3',  'a', '6', '\u1EAB'],
        ['\u1EA1',  'a', '6', '\u1EAD'],
        ['\u0103',  'a', '6', '\u00E2'],
        ['\u1EAF',  'a', '6', '\u1EA5'],
        ['\u1EB1',  'a', '6', '\u1EA7'],
        ['\u1EB3',  'a', '6', '\u1EA9'],
        ['\u1EB5',  'a', '6', '\u1EAB'],
        ['\u1EB7',  'a', '6', '\u1EAD'],
        ['a', 'w', '8', '\u0103'],
        ['\u00E1',  'w', '6', '\u1EAF'],
        ['\u00E0',  'w', '6', '\u1EB1'],
        ['\u1EA3',  'w', '6', '\u1EB3'],
        ['\u00E3',  'w', '6', '\u1EB5'],
        ['\u1EA1',  'w', '6', '\u1EB7'],
        ['\u00E2',  'w', '6', '\u0103'],
        ['\u1EA5',  'w', '6', '\u1EAF'],
        ['\u1EA7',  'w', '6', '\u1EB1'],
        ['\u1EA9',  'w', '6', '\u1EB3'],
        ['\u1EAB',  'w', '6', '\u1EB5'],
        ['\u1EAD',  'w', '6', '\u1EB7'],
        ['d', 'd', '9', '\u0111'],
        ['e', 'e', '6', '\u00EA'],
        ['\u00E9', 'e', '6', '\u1EBF'],
        ['\u00E8', 'e', '6', '\u1EC1'],
        ['\u1EBB', 'e', '6', '\u1EC3'],
        ['\u1EBD', 'e', '6', '\u1EC5'],
        ['\u1EB9', 'e', '6', '\u1EC7'],
        ['o', 'o', '6', '\u00F4'],
        ['\u00F3', 'o', '6', '\u1ED1'],
        ['\u00F2', 'o', '6', '\u1ED3'],
        ['\u1ECF', 'o', '6', '\u1ED5'],
        ['\u00F5', 'o', '6', '\u1ED7'],
        ['\u1ECD', 'o', '6', '\u1ED9'],
        ['\u01A1', 'o', '6', '\u00F4'],
        ['\u1EDB', 'o', '6', '\u1ED1'],
        ['\u1EDD', 'o', '6', '\u1ED3'],
        ['\u1EDF', 'o', '6', '\u1ED5'],
        ['\u1EE1', 'o', '6', '\u1ED7'],
        ['\u1EE3', 'o', '6', '\u1ED9'],
        ['o', 'w', '7', '\u01A1'],
        ['\u00F3', 'w', '7', '\u1EDB'],
        ['\u00F2', 'w', '7', '\u1EDD'],
        ['\u1ECF', 'w', '7', '\u1EDF'],
        ['\u00F5', 'w', '7', '\u1EE1'],
        ['\u1ECD', 'w', '7', '\u1EE3'],
        ['\u00F4', 'w', '7', '\u01A1'],
        ['\u1ED1', 'w', '7', '\u1EDB'],
        ['\u1ED3', 'w', '7', '\u1EDD'],
        ['\u1ED5', 'w', '7', '\u1EDF'],
        ['\u1ED7', 'w', '7', '\u1EE1'],
        ['\u1ED9', 'w', '7', '\u1EE3'],
        ['u', 'w', '7', '\u01B0'],
        ['A', 'a', '6', '\u00C2'],
        ['\u00C1', 'a', '6', '\u1EA4'],
        ['\u00C0', 'a', '6', '\u1EB0'],
        ['\u1EA2', 'a', '6', '\u1EA8'],
        ['\u00C3', 'a', '6', '\u1EAA'],
        ['\u1EA0', 'a', '6', '\u1EAC'],
        ['\u0102', 'a', '6', '\u00C2'],
        ['\u1EAE', 'a', '6', '\u1EA4'],
        ['\u1EB0', 'a', '6', '\u1EB0'],
        ['\u1EB2', 'a', '6', '\u1EA8'],
        ['\u1EB4', 'a', '6', '\u1EAA'],
        ['\u1EB6', 'a', '6', '\u1EAC'],
        ['A', 'w', '8', '\u0102'],
        ['\u00C1', 'w', '8', '\u1EAE'],
        ['\u00C0', 'w', '8', '\u1EB0'],
        ['\u1EA2', 'w', '8', '\u1EB2'],
        ['\u00C3', 'w', '8', '\u1EB4'],
        ['\u1EA0', 'w', '8', '\u1EB6'],
        ['\u00C2', 'w', '8', '\u0102'],
        ['\u1EA4', 'w', '8', '\u1EAE'],
        ['\u1EB0', 'w', '8', '\u1EB0'],
        ['\u1EA8', 'w', '8', '\u1EB2'],
        ['\u1EAA', 'w', '8', '\u1EB4'],
        ['\u1EAC', 'w', '8', '\u1EB6'],
        ['D', 'd', '9', '\u0110'],
        ['E', 'e', '6', '\u00CA'],
        ['\u00C9', 'e', '6', '\u1EBE'],
        ['\u00C8', 'e', '6', '\u1EC0'],
        ['\u1EBA', 'e', '6', '\u1EC2'],
        ['\u1EBC', 'e', '6', '\u1EC4'],
        ['\u1EB8', 'e', '6', '\u1EC6'],
        ['O', 'o', '6', '\u00D4'],
        ['\u00D3', 'o', '6', '\u1ED0'],
        ['\u00D2', 'o', '6', '\u1ED2'],
        ['\u1ECE', 'o', '6', '\u1ED4'],
        ['\u00D5', 'o', '6', '\u1ED6'],
        ['\u1ECC', 'o', '6', '\u1ED8'],
        ['\u1EDA', 'o', '6', '\u1ED0'],
        ['\u1EDA', 'o', '6', '\u1ED0'],
        ['\u1EDC', 'o', '6', '\u1ED2'],
        ['\u1EDE', 'o', '6', '\u1ED4'],
        ['\u1EE0', 'o', '6', '\u1ED6'],
        ['\u1EE2', 'o', '6', '\u1ED8'],
        ['O', 'w', '7', '\u01A0'],
        ['\u00D3', 'w', '7', '\u1ED0'],
        ['\u00D2', 'w', '7', '\u1ED2'],
        ['\u1ECE', 'w', '7', '\u1ED4'],
        ['\u00D5', 'w', '7', '\u1ED6'],
        ['\u1ECC', 'w', '7', '\u1ED8'],
        ['\u01A0', 'w', '7', '\u00D4'],
        ['\u1EDA', 'w', '7', '\u1ED0'],
        ['\u1EDC', 'w', '7', '\u1ED2'],
        ['\u1EDE', 'w', '7', '\u1ED4'],
        ['\u1EE0', 'w', '7', '\u1ED6'],
        ['\u1EE2', 'w', '7', '\u1ED8'],
        ['U', 'w', '7', '\u01AF'],
        ['\u00DA', 'w', '7', '\u1EE8'],
        ['\u00D9', 'w', '7', '\u1EEA'],
        ['\u1EE6', 'w', '7', '\u1EEC'],
        ['\u0168', 'w', '7', '\u1EEE'],
        ['\u1EE4', 'w', '7', '\u1EF0']
];

var accentArr3 = [
        ['a', '\u00E1', '\u00E0', '\u1EA3', '\u00E3', '\u1EA1'],    
        ['\u0103', '\u1EAF', '\u1EB1', '\u1EB3', '\u1EB5', '\u1EB7'],
        ['\u00E2', '\u1EA5', '\u1EA7', '\u1EA9', '\u1EAB', '\u1EAD'],
        ['e', '\u00E9', '\u00E8', '\u1EBB', '\u1EBD', '\u1EB9'],    
        ['\u00EA', '\u1EBF', '\u1EC1', '\u1EC3', '\u1EC5', '\u1EC7'],
        ['i', '\u00ED', '\u00EC', '\u1EC9', '\u0129', '\u1ECB'],    
        ['o', '\u00F3', '\u00F2', '\u1ECF', '\u00F5', '\u1ECD'],    
        ['\u00F4', '\u1ED1', '\u1ED3', '\u1ED5', '\u1ED7', '\u1ED9'],
        ['\u01A1', '\u1EDB', '\u1EDD', '\u1EDF', '\u1EE1', '\u1EE3'],
        ['u', '\u00FA', '\u00F9', '\u1EE7', '\u0169', '\u1EE5'],    
        ['\u01B0', '\u1EE9', '\u1EEB', '\u1EED', '\u1EEF', '\u1EF1'],
        ['y', '\u00FD', '\u1EF3', '\u1EF7', '\u1EF9', '\u1EF5'],    
        ['A', '\u00C1', '\u00C0', '\u1EA2', '\u00C3', '\u1EA0'],    
        ['\u0102', '\u1EAE', '\u1EB0', '\u1EB2', '\u1EB4', '\u1EB6'],
        ['\u00C2', '\u1EA4', '\u1EB0', '\u1EA8', '\u1EAA', '\u1EAC'],
        ['E', '\u00C9', '\u00C8', '\u1EBA', '\u1EBC', '\u1EB8'],    
        ['\u00CA', '\u1EBE', '\u1EC0', '\u1EC2', '\u1EC4', '\u1EC6'],
        ['I', '\u00CD', '\u00CC', '\u1EC8', '\u0128', '\u1ECA'],    
        ['O', '\u00D3', '\u00D2', '\u1ECE', '\u00D5', '\u1ECC'],    
        ['\u00D4', '\u1ED0', '\u1ED2', '\u1ED4', '\u1ED6', '\u1ED8'],
        ['\u01A0', '\u1EDA', '\u1EDC', '\u1EDE', '\u1EE0', '\u1EE2'],
        ['U', '\u00DA', '\u00D9', '\u1EE6', '\u0168', '\u1EE4'],    
        ['\u01AF', '\u1EE8', '\u1EEA', '\u1EEC', '\u1EEE', '\u1EF0'],
        ['Y', '\u00DD', '\u1EF2', '\u1EF6', '\u1EF8', '\u1EF4']      
];

var pre = ['b','c','ch','d','g','gi','gh','h','k','kh','l','m','n','ng','ngh','nh','ph','q','qu','r','s','t','th','tr','v','x'];
var voc = ['a','ai','ao','au','ay','e','eo','eu','i','ia','ie','ieu','iu','o','oa','oai','oay','oe','oeo','oi','u','ua','ue','ui','uo','uoi','uy','uya','uye','uu','y','ye','yeu'];
var pos = ['c','ch','n','nh','ng','m','p','t'];
var map = [
//  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//  S, c, ch,n, nh,ng,m, p, t, ^, +(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],   //0       b     a  
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   //1       c     ai  
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   //2       ch    ao  
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],   //3       d     au  
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],   //4       g     ay  
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],   //5       gi    e  
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   //6       gh    eo  
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],   //7       h     eu  
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],   //8       k     i  
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   //9       kh    ia  
    [2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 0],   //10      l     ie  
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],   //11      m     ieu
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   //12      n     iu  
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],   //13      ng    o  
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2],   //14      ngh   oa  
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   //15      nh    oai
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   //16      ph    oay
    [1, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0],   //17      q     oe  
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   //18      qu    oeo
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],   //19      r     oi  
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],   //20      s     u  
    [1, 0, 0, 2, 0, 0, 0, 0, 2, 2, 1],   //21      t     ua  
    [2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0],   //22      th    ue  
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],   //23      tr    ui  
    [2, 2, 0, 2, 0, 2, 0, 2, 2, 2, 9],   //24      v     uo  
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9],   //25      x     uoi
    [2, 0, 2, 0, 2, 2, 0, 2, 2, 0, 0],   //26            uy  
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   //27            uya
    [3, 0, 0, 3, 0, 0, 0, 0, 3, 3, 0],   //28            uye
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],   //29            uu  
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],   //30            y  
    [2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],   //31            ye  
    [2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0]    //32            yeu
];

var staPos = 0;
var isIE = ((navigator.userAgent.toLowerCase().indexOf("msie") != -1) && (navigator.userAgent.toLowerCase().indexOf("opera") == -1));

checkCode = function(code) {
    if( ((code < 45) && (code != 42) && (code != 32) && (code != 39) && (code != 40) && (code != 43)) || (code == 145) || (code == 255)) {
        return true;
    }
}

document.addEventListener('keydown', function ( e ) {
    if ((e.metaKey || e.ctrlKey) && ( e.shiftKey) ) {
       currentKBMode = (currentKBMode ==kbMode[0]) ? kbMode[1] : (currentKBMode ==kbMode[1]) ? kbMode[2] : kbMode[0];
        mode = document.getElementById("kbMode").textContent = currentKBMode;
    }
});

document.addEventListener("keypress" , function(e) {
    var tg = (isIE) ?  window.event.srcElement : e.target;
    var kbCode = (isIE) ?  window.event.keyCode : e.which;
    if(e.ctrlKey || ((tg.type != 'textarea') && (tg.type != 'text')) || checkCode(kbCode) || (kbCode==32)) {
        return;
    }
    staPos = tg.selectionStart;
    var selEnd = tg.selectionEnd;
    var txtOrg = tg.value;
    var txtLen = txtOrg.length;
    var c = String.fromCharCode(kbCode);
    var c4 = (selEnd == txtLen) ? '' : txtOrg.substr(selEnd, txtLen-selEnd)
    var c3 = (staPos == 0) ? '' : txtOrg.substr(0, staPos)
    var c2 = c3.getLastW();
    var c1 = (c2==c3) ? '' : c3.substr(0,c3.length - c2.length);
    var c5 = c2.convertVN(c);
    var txtCnv = c1 + c5 + c4;
    tg.value = txtCnv;
    tg.selectionStart = staPos;
    tg.selectionEnd = staPos;
    if (c5 != c2) {
        e.preventDefault();
    }
}, false);

String.prototype.getLastW = function(){
    if (this != '' && this.substr(this.length-1, 1) != '') {
        var s = this.replace(/([■◆◇□※・└→←　.,'^~_"*+&#%-?=!:;${}()|[\]\/\\\|\r\n|\r|\n])/g, ' ').split(' ');
        return s[s.length - 1];
    }
    return '';
};

String.prototype.noAccent = function(type){
    var result = '';
    for (var i=0; i<this.length; i++){
        result += this.substr(i,1).accentRoot(type);
    }
    return result;
}

String.prototype.asTypeOf = function(s){
    var result = -1;
    for (var i=0; i<s.length; i++){
        if (this.substr(0,s[i].length) == s[i]) {
            result = i;
        }
   }
    return result;
};

String.prototype.changeW = function(c) {
    if (this == '' && currentKBMode == kbMode[1]){
        for (var i=0; i<accentArr1[0].length; i++) {
            if (accentArr1[i][0] == c) {
                staPos++;
                return accentArr1[i][1];
            }
        }
    }
    return '';
};

String.prototype.accentIdx = function() {
    var result = '0';
    var idx  = (currentKBMode == kbMode[1]) ? 0 : 1;
    for (var j=0; j<accentArr0[idx].length; j++) {
        if (accentArr0[idx][j] == this.toLowerCase()) {
            result = accentArr0[2][j];
            break;
        }
    }
    return result;
};

String.prototype.isUChar = function (c1, c2) {
    var result = false;
if (c2.toUpperCase() == c1) {
     for (var i=12; i<accentArr3.length ; i++) {
         for (var j=1; j<accentArr3[i].length; j++) {
             if (accentArr3[i][j] == this) {
                 result = true;
                 break;
             }
         }
     }
    }
    return result;
}

String.prototype.accentRoot = function (ext) {
    var result = this;
  var idx = (ext==0) ? 0 : 1;
    accent:
    for (var i=0; i<accentArr3.length ; i++) {
        for (var j=idx; j<accentArr3[i].length; j++) {
            if (accentArr3[i][j] == result) {
                result = accentArr3[i][0];
                break accent;
            }
        }
    }
    if (ext==0) {
        for (var i=0; i<accentArr2.length ; i++) {
            if (accentArr2[i][3] == result.toLowerCase()) {
                result = accentArr2[i][0];
                break;
            }
        }
    }
    return result;
};

String.prototype.setAccent = function (c) {
    var result = '';
    var idx = c.accentIdx();
    var r = (idx<6) ? this.accentRoot(1) : this;
    var c1 = c.toLowerCase();
    if (idx == 15) {
        result = r;
    } else if (idx > 0 && idx < 6) {
        for (var i=0; i<accentArr3.length; i++) {
            if (accentArr3[i][0] == r) {
                result = accentArr3[i][idx];
                break;
            }
        }
    } else if (idx > 5) {
        idx  = (currentKBMode == kbMode[1]) ? 1 : 2;
        for (var i=0; i<accentArr2.length; i++) {
            if (accentArr2[i][0] == r && accentArr2[i][idx] == c1) {
                result = accentArr2[i][3];
                break;
            } else if (accentArr2[i][3] == r && accentArr2[i][idx] == c1) {
                result = accentArr2[i][0];
                result += (i<56) ? accentArr2[i][idx] : accentArr2[i][idx].toUpperCase();
                break;
            }
        }
    }
    if (result==this) result = r + c;
    return result;
};

String.prototype.vnWordCheck = function() {
    var r = [-1,-1,-1,-1];
    var l1, l2=0, i1, i2, i3=-1;
    var txt = this.toLowerCase().noAccent(0);
    var txt2, txt3;
    l1 = txt.length;
    if (l1>8) return r;
    r[1] = txt.asTypeOf(pre);
    if (r[1] < 0) {
        r[2] = txt.asTypeOf(voc);
    } else {
        l2 = pre[r[1]].length;
        if (l1==l2) r[0] = 0;
        txt2 = txt.substr(l2, l1-l2);
        txt3 = txt2.accentRoot(0);
        r[2] = txt3.asTypeOf(voc);
    }
    if (r[1]==5 && r[2]<0) {
        r[1] = 4;
        r[2] = 8;
    }
    if (r[2] < 0) return r;
    if (((r[1]==1 || r[1]==4 || r[1]==13) && ((r[2]>4 && r[2]<13) || r[2]>29)) ||
        ((r[1]==6 || r[1]==8 || r[1]==14) && (r[2]<5 || (r[2]>12 && r[2]!=30)))    ) {
        r[0] = -1;
    } else {
        r[0] = 0;
    }
    l2 += voc[r[2]].length;
    if (l1==l2) return r;
    txt = txt.substr(l2, l1-l2)
    r[3] = txt.asTypeOf(pos);
    if (r[3] < 0) {
        r[0] = (txt.length>0) ? -1 : 0;
        return r;
    }
    l2 += pos[r[3]].length;
    if (l1!=l2) {
        r[0] = -1;
        r[3] = -1;
    }
    return r;
}

String.prototype.convertTxt = function (idx, c) {
    var result = ['', ''];
    var s1, s2='', s3;
    if (idx > this.length) {
        for (var i=0; i<this.length; i++) {
            s1 = this.substr(i,1).accentRoot(0);
            s2 = s1.setAccent(c);
            s3 = (s2=='') ? s1 : s2.substr(0,1);
            result[0] += s3;
        }
    } else if (idx > 0) {
        s1 = this.substr(idx-1,1);
        idx2  = (currentKBMode == kbMode[1]) ? 0 : 1;
        s2 = (c==accentArr0[idx2][5]) ? s1.noAccent(1): s1.setAccent(c);
        s3 = (s2=='') ? s1 : s2.substr(0,1);
        result[0] = this.replace(s1, s3);
    } else {
     result[0] = this;
    }
    result[1] = s2.substr(1,1);
    return result;
};

String.prototype.convertVN = function(c0) {
var c = c0;
    var chk, p, s, s1, s2, s3;
    var idx, i, j;
    if (this.length==0) return this.changeW(c0);
    chk = this.vnWordCheck();
    if (chk[0]<0) return this;
    i = chk[2];
    idx = parseInt(c.accentIdx());
    if (chk[1] >=0 && (i<0  || (chk[1]==4 && i==8)) && idx==10) return this + ''.changeW(c0);
    if ((idx==0) || (idx==9 && (i==1 || i==2 || i==6))) return this;
    s1 = (idx==11 || chk[1]<0) ? '' : this.substr(0, pre[chk[1]].length);
    s2 = (idx==11) ?  this.substr(0,1) : this.substr(s1.length, voc[i].length);
    s3 = (idx==11) ? this.substr(1,this.length) : this.substr(s1.length + s2.length, this.length);
    j = (idx==11) ? 1 : (idx>8) ? idx: (chk[3]+1);
    p = (idx==11) ? 1 : (i<0) ? i : map[i][j];
    if (idx==10 && s3=='' && s2==accentArr2[55][3]) return s1 + 'w';
    if (idx==10 && s3=='' && s2==accentArr2[111][3]) return s1 + 'W';
    if ((i==21 || i==24 || i==25) && s2!=voc[i]) {
     var s1_ = s2.substr(1,1).accentRoot(1);
     if (i==21 && idx>9 && s1_ != accentArr2[0][0]) return this;
     if (i==21 && idx==9 && s1_ == accentArr2[0][3]) {
      if (s2.substr(1,1) !=accentArr2[0][3] ) {
       return this;
      }
     }
    }
   s = s2.convertTxt(p, c);
  if ((i==24 || i==25) && (s2.substr(0,1) == accentArr2[6][3] || s2.substr(0,1) == accentArr2[13][3]) &&
     idx==10 && (s2.substr(1,1) == accentArr2[5][3] || s2.substr(1,1) == accentArr2[12][3])) {
   s[0] = s2.substr(0,1).setAccent(c).substr(0,1);
   s[0] += s2.substr(1,1).setAccent(c).substr(0,1);
   s[0] += s2.substr(2,1);
        s[1] += s2.substr(1,1).setAccent(c).substr(1,1);
  };
    if (s[1]!='') staPos++;    
    return s1 + s[0] + s3 + s[1];
}
