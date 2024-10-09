let clickCount = 0;
function handleEventListener(event) {
    const element = event.srcElement.id;
    const validSeats = [
        'A1', 'A2', 'A3', 'A4',
        'B1', 'B2', 'B3', 'B4',
        'C1', 'C2', 'C3', 'C4',
        'D1', 'D2', 'D3', 'D4',
        'E1', 'E2', 'E3', 'E4',
        'F1', 'F2', 'F3', 'F4',
        'G1', 'G2', 'G3', 'G4',
        'H1', 'H2', 'H3', 'H4',
        'I1', 'I2', 'I3', 'I4',
        'J1', 'J2', 'J3', 'J4'
    ];

    if (validSeats.includes(element)) {
        console.log(element)
        // console.log(clickCount)
        // Perform actions based on the click count
        if (clickCount < 4) {
            clickCount++;
            const seat = document.getElementById('accuired-seat')
            seat.innerText = clickCount;

            // console.log(clickCount); // Log the click count
            // console.log('hi');
            setBackGroundColorById(element)
            if (clickCount == 1) {
                showElementById('tr-1')

                const seat1 = document.getElementById('seat-1')
                seat1.innerText = element;
                console.log(seat1)

                const totalPrice = document.getElementById('total-price')
                totalPrice.innerText = '550 BDT'

                const seatLeft = document.getElementById('seat-left')
                seatLeft.innerText = 39
            }
            if (clickCount == 2) {
                showElementById('tr-2')

                const seat2 = document.getElementById('seat-2')
                seat2.innerText = element;
                console.log(seat2)

                const totalPrice = document.getElementById('total-price')
                const totalPriceFor2 = totalPrice.innerText
                const price = parseInt(totalPriceFor2) + 550;
                totalPrice.innerText = price + ' BDT'

                const seatLeft = document.getElementById('seat-left')
                seatLeft.innerText = 38
            }
            if (clickCount == 3) {
                showElementById('tr-3')

                const seat3 = document.getElementById('seat-3')
                seat3.innerText = element;
                console.log(seat3)

                const totalPrice = document.getElementById('total-price')
                const totalPriceFor3 = totalPrice.innerText
                const price = parseInt(totalPriceFor3) + 550
                totalPrice.innerText = price + ' BDT'

                const seatLeft = document.getElementById('seat-left')
                seatLeft.innerText = 37
            }
            if (clickCount == 4) {
                showElementById('tr-4')

                const seat4 = document.getElementById('seat-4')
                seat4.innerText = element;
                console.log(seat4)

                const totalPrice = document.getElementById('total-price')
                const totalPriceFor4 = totalPrice.innerText
                const price = parseInt(totalPriceFor4) + 550
                totalPrice.innerText = price + ' BDT'

                const seatLeft = document.getElementById('seat-left')
                seatLeft.innerText = 36
            }
            // if (element == 'A1' || element == 'A2' || element == 'A3' || element == 'A4') {
            //     setBackGroundColorById(element)
            // }
            // if (element == 'B1' || element == 'B2' || element == 'B3' || element == 'B4') {
            //     setBackGroundColorById(element)
            // }
            // if (element == 'C1' || element == 'C2' || element == 'C3' || element == 'C4') {
            //     setBackGroundColorById(element)
            // }
            // if (element == 'E1' || element == 'E2' || element == 'E3' || element == 'E4') {
            //     setBackGroundColorById(element)
            // }
            // if (element == 'F1' || element == 'F2' || element == 'F3' || element == 'F4') {
            //     setBackGroundColorById(element)
            // }
            // if (element == 'G1' || element == 'G2' || element == 'G3' || element == 'G4') {
            //     setBackGroundColorById(element)
            // }
            // if (element == 'H1' || element == 'H2' || element == 'H3' || element == 'H4') {
            //     setBackGroundColorById(element)
            // }
            // if (element == 'I1' || element == 'I2' || element == 'I3' || element == 'I4') {
            //     setBackGroundColorById(element)
            // }
            // if (element == 'J1' || element == 'J2' || element == 'J3' || element == 'J4') {
            //     setBackGroundColorById(element)
            // }
            // if (element == 'D1' || element == 'D2' || element == 'D3' || element == 'D4') {
            //     setBackGroundColorById(element)
            // }

        }
        else {
            clickCount = 4;
        }
    }
}
function applyBtn() {

    const inputField = document.getElementById('coupon-code')

    const couponCode1 = 'NEW15'
    const couponCode2 = 'Couple20'

    if (inputField.value.trim() === couponCode1) {
        if (clickCount >= 1) {
            cursorAllowed('coupon-apply-btn')
            const totalPrice = document.getElementById('total-price')
            console.log(totalPrice.innerText)
            console.log(clickCount)
            if (clickCount === 1) {
                totalPrice.innerText = parseInt(550 - (550 * 0.15)) + ' BDT'

            }
            if (clickCount === 2) {
                totalPrice.innerText = parseInt(1100 - (1100 * 0.15)) + ' BDT'

            }
            if (clickCount === 3) {
                totalPrice.innerText = parseInt(1650 - (1650 * 0.15)) + ' BDT'

            }
            if (clickCount === 4) {
                totalPrice.innerText = parseInt(2200 - (2200 * 0.15)) + ' BDT'

            }
        }
    }
    else {
        cursorNotAllowed('coupon-apply-btn')

    }
    if (inputField.value.trim() === couponCode2) {
        if (clickCount == 2) {
            cursorAllowed('coupon-apply-btn')
            const totalPrice = document.getElementById('total-price')
            console.log(totalPrice.innerText)
            console.log(clickCount)
            if (clickCount === 1) {
                totalPrice.innerText = parseInt(550 - (550 * 0.20)) + ' BDT'

            }
            if (clickCount === 2) {
                totalPrice.innerText = parseInt(1100 - (1100 * 0.20)) + ' BDT'

            }
            if (clickCount === 3) {
                totalPrice.innerText = parseInt(1650 - (1650 * 0.20)) + ' BDT'

            }
            if (clickCount === 4) {
                totalPrice.innerText = parseInt(2200 - (2200 * 0.15)) + ' BDT'

            }
        }
    }
    else {
        cursorNotAllowed('coupon-apply-btn')

    }

    console.log(inputField.value)
}

// let removeClickCount = 4;
// function removeEventListener(event) {
//     const element = event.srcElement.id;
//     const validSeats = [
//         'A1', 'A2', 'A3', 'A4',
//         'B1', 'B2', 'B3', 'B4',
//         'C1', 'C2', 'C3', 'C4',
//         'D1', 'D2', 'D3', 'D4',
//         'E1', 'E2', 'E3', 'E4',
//         'F1', 'F2', 'F3', 'F4',
//         'G1', 'G2', 'G3', 'G4',
//         'H1', 'H2', 'H3', 'H4',
//         'I1', 'I2', 'I3', 'I4',
//         'J1', 'J2', 'J3', 'J4'
//     ];

//     if (validSeats.includes(element)) {
//         console.log(element)

//         // Perform actions based on the click count
//         if (clickCount > 0) {
//             clickCount -= 3;
//             console.log(clickCount); // Log the click count
//             // console.log('hi');
//             const seat = document.getElementById('accuired-seat')
//             seat.innerText = clickCount;
//             removeBackGroundColorById(element)

//         }
//         else {

//         }
//     }
// }


// function removeEventListener(event) {
//     const element = event.target.innerText;
//     console.log(element)

//     if (element == 'A1' || element == 'A2' || element == 'A3' || element == 'A4') {
//         removeBackGroundColorById(element)
//         clickCount--;
//     }
//     if (element == 'B1' || element == 'B2' || element == 'B3' || element == 'B4') {
//         removeBackGroundColorById(element)
//     }
//     if (element == 'C1' || element == 'C2' || element == 'C3' || element == 'C4') {
//         removeBackGroundColorById(element)
//     }
//     if (element == 'E1' || element == 'E2' || element == 'E3' || element == 'E4') {
//         removeBackGroundColorById(element)
//     }
//     if (element == 'F1' || element == 'F2' || element == 'F3' || element == 'F4') {
//         removeBackGroundColorById(element)
//     }
//     if (element == 'G1' || element == 'G2' || element == 'G3' || element == 'G4') {
//         removeBackGroundColorById(element)
//     }
//     if (element == 'H1' || element == 'H2' || element == 'H3' || element == 'H4') {
//         removeBackGroundColorById(element)
//     }
//     if (element == 'I1' || element == 'I2' || element == 'I3' || element == 'I4') {
//         removeBackGroundColorById(element)
//     }
//     if (element == 'J1' || element == 'J2' || element == 'J3' || element == 'J4') {
//         removeBackGroundColorById(element)
//     }
//     if (element == 'D1' || element == 'D2' || element == 'D3' || element == 'D4') {
//         removeBackGroundColorById(element)
//     }

// }

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

document.addEventListener('click', handleEventListener)
document.addEventListener('dblclick', removeEventListener)
document.addEventListener('keyup', applyBtn)