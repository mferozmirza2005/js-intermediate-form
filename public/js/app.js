var cendLoad = document.querySelector('#cendLoad');
var cendImg = document.querySelector('#cendImg');
var warn = document.getElementById('warning');
var form = document.getElementById('form');

var Name = document.getElementById('Name');
var fName = document.getElementById('FName');
var birth = document.getElementById('birth');
var nation = document.getElementById('Nationality');
var religion = document.getElementById('Religion');
var gender = document.getElementsByName('gender');
var address = document.getElementById('address');
var cnic = document.getElementById('cnic');
var contect = document.getElementById('contect');
var identity = document.getElementById('identity');
var pcode = document.getElementById('pcode');

var genderVal = "";

var bZero = document.getElementById('bZero');
var bOne = document.getElementById('bOne');
var rZero = document.getElementById('rZero');
var rOne = document.getElementById('rOne');
var gZero = document.getElementById('gZero');
var gOne = document.getElementById('gOne');
var yZero = document.getElementById('yZero');
var yOne = document.getElementById('yOne');
var gmZero = document.getElementById('gmZero');
var gmOne = document.getElementById('gmOne');


var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');
var r4 = document.getElementById('r4');
var r5 = document.getElementById('r5');
var r6 = document.getElementById('r6');
var r7 = document.getElementById('r7');
var r8 = document.getElementById('r8');
var r9 = document.getElementById('r9');
var r10 = document.getElementById('r10');
var r11 = document.getElementById('r11');
var r12 = document.getElementById('r12');
var r13 = document.getElementById('r13');
var r14 = document.getElementById('r14');
var r15 = document.getElementById('r15');
var r16 = document.getElementById('r16');
var r17 = document.getElementById('r17');
var r18 = document.getElementById('r18');
var r19 = document.getElementById('r19');
var r20 = document.getElementById('r20');
var r21 = document.getElementById('r21');

var imgUpload = "";
cendLoad.addEventListener("change", function() {
    var reader = new FileReader();
    reader.addEventListener("load", () => {
        imgUpload = reader.result;
        console.log(imgUpload);
        cendImg.style.backgroundImage = `url(${imgUpload})`;

        var recievedImg = document.getElementById("recievedImg");
        recievedImg.style.backgroundImage = `url(${imgUpload})`;
    })
    reader.readAsDataURL(this.files[0]);  
})


function submit() {
    userImg.style.display = "none";
    warn.style.display = "none";
    form.style.display = "none";
    recieved.style.display = "block"
    
    if(gender[0].checked){
        genderVal = "Male";
    }
    if(gender[1].checked){
        genderVal = "Female";
    }

    var candidate = {
        'name' : Name.value,
        'father name' : fName.value,
        'date of birth' : birth.value,
        'nationality' : nation.value,
        'religion' : religion.value,
        'gender' : genderVal,
        'address' : address.value,
        'Cnic' : cnic.value,
        'contect' : contect.value,
        'identity' : identity.value,
        'pcode' : pcode.value,
        'board' : [bZero.value , bOne.value],
        'Roll no' : [rZero.value , rOne.value],
        'group' : [gZero.value , gOne.value],
        'year' : [yZero.value , yOne.value],
        'great/marks' : [gmZero.value , gmOne.value]
    }

    r1.innerHTML = candidate.name;
    r2.innerHTML = candidate["father name"];
    r3.innerHTML = candidate["date of birth"];
    r4.innerHTML = candidate.nationality;
    r5.innerHTML = candidate.religion;
    r6.innerHTML = candidate.gender;
    r7.innerHTML = candidate.address;
    r8.innerHTML = candidate.Cnic;
    r9.innerHTML = candidate.contect;
    r10.innerHTML = candidate.identity;
    r11.innerHTML = candidate.pcode;
    r12.innerHTML = candidate.board[0];
    r13.innerHTML = candidate.board[1];
    r14.innerHTML = candidate["Roll no"][0];
    r15.innerHTML = candidate["Roll no"][1];
    r16.innerHTML = candidate.group[0];
    r17.innerHTML = candidate.group[1];
    r18.innerHTML = candidate.year[0];
    r19.innerHTML = candidate.year[1];
    r20.innerHTML = candidate["great/marks"][0];
    r21.innerHTML = candidate["great/marks"][1];

}
