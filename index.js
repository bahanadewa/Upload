/* =========================== Annonymus Function (filter) ============================= */
var a = ['andi','seto','seno']
var filterNama = a.filter(function(val){ // val menerima setiap value ex: andi 
    return val.include('s')
}) 
// hasilnya seto, seto
/* ===================================================================================== */


/* ======================================== Map ======================================= */
var a = ['andi','seto','seno']
var mapNama = a.map(function(val){
    return val + 'saya'
})
// hasilnya andisaya, setosaya, seno saya
/* ===================================================================================== */



var w =[0,1,2,3,4,5]
var x = w.filter((a) => a !==2)

var newArr = []
for (var i=0 ; i<w.length ; i++){
    if (w[i] !==2){
        newArr.push(w[i])
    }
var a = 'helo'

}