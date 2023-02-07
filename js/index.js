var allCard=document.querySelectorAll('.card')
allCard.forEach(card => {

    var buttonCard=card.children[1].children[2]
    var like=buttonCard.children[0]

    console.log(like);

    buttonCard.addEventListener('click',function () {
        var b=parseInt(like.textContent)+1

        like.textContent=b
        
    })
});

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

document.querySelector('#liveToastBtn').addEventListener('click',function () {
    var somme=0
    allCard.forEach(cart =>{
        somme=somme+parseInt(cart.children[1].children[2].children[0].textContent)
    });

    document.querySelector('.like').textContent=somme
})