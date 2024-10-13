function moveToMainSection() {
    const mainSection = document.getElementById('third-page')

    const scrollOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    }
    mainSection.scrollIntoView(scrollOptions);
}

const allSeats = document.getElementsByClassName('addSeats')
let count = 0;
let leftSeat = 40;

for (const seat of allSeats) {
    seat.addEventListener('click', function (e) {
        seat.classList.add("bg-[#1DD100]")
        seat.removeEventListener('click', arguments.callee)
        const seatData = seat.innerText
        console.log(seatData)

        count++;
        setInnerTextById('accuired-seat', count)

        leftSeat--;
        setInnerTextById('seat-left', leftSeat)

        const priceTotal = 550 * count;
        setInnerTextById('total-price', priceTotal)
        setInnerTextById('grandTotal', priceTotal)

        const coupon = document.getElementById('coupon')
        handleSeatClick(seatData)

        if (count >= 4) {
            alert('You can purchase 4 tickets maximum')
            disabledSeats()
            coupon.removeAttribute('disabled')

            const discountTr = document.getElementById("discountTr");
            const applyBtn = document.getElementById('apply-btn')

            applyBtn.classList.remove('cursor-not-allowed')

            applyBtn.addEventListener("click", function(e){
                const couponValue=coupon.value;

                // calculation for 15% discount 
                if (couponValue== 'NEW15'){
                    const discount15= 2200*0.15;
                    setInnerTextById("discount",discount15);
                    const finalPrice= 2200-discount15;
                    setInnerTextById("grandTotal",finalPrice);
                    coupon.classList.add("hidden");
                    applyBtn.classList.add("hidden");
                    discountTr.classList.remove("hidden");
                }
                // calculation for 15% discount
                else if(couponValue == 'Couple 20'){
                    const discount20= 2200*0.20;
                    setInnerTextById("discount",discount20);
                    const finalPrice= 2200-discount20;
                    setInnerTextById("grandTotal",finalPrice);
                    coupon.classList.add("hidden");
                    applyBtn.classList.add("hidden");
                    discountTr.classList.remove("hidden");
                }
                else{
                    alert('Wrong Coupon! Use a valid one.');
                }
            })
        }
    })
}

function disabledSeats() {
    for (const seat of allSeats) {
        if (!seat.classList.contains('bg-[#1DD100]')) {
            seat.setAttribute('disabled', 'disabled')
        }

    }
}

function success() {
    showElementById('success')
    hideElementById('header')
    hideElementById('second-page')
    hideElementById('third-page')
    hideElementById('seat-plan-container')
    hideElementById('footer')
}
function continueBtn(){
    hideElementById('success')
    showElementById('header')
    showElementById('second-page')
    showElementById('third-page')
    showElementById('seat-plan-container')
    showElementById('footer')
}

