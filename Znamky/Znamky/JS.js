function main() {
    let grades = document.getElementById("grades");
    let mean=0;

    document.getElementById("btnAdd").addEventListener("click",function() {
        grades.innerHTML+="<div class='grade'><input type='number' class='input'> <input type='number' class='input'>"+(grades.children.length+1)+"#</div>"
    });

    document.getElementById("btnCalc").addEventListener("click",function() {
        for(let i=0;i<grades.children.length;i++){
            mean+=parseInt(grades.children[i].children[0].value*(grades.children[i].children[1].value/100));
        }
        let awnser="";
        mean=mean/grades.children.length;
        if (mean<55){awnser="yes";}else {awnser="no";};
        document.getElementById("results").innerHTML="<p>"+awnser+"</p><p>"+mean+"%</p>";
        mean=0;
    });
}